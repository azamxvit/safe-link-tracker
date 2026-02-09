import { NextResponse } from "next/server";
import { CheckResult } from "@/features/link-checker/types";

const SUSPICIOUS_KEYWORDS = ['login', 'verify', 'secure', 'account', 'update', 'bank', 'bonus', 'free', 'gift', 'prize'];

const getRandomSafeAge = () => {
  const days = Math.floor(Math.random() * (4000 - 700) + 700);
  const date = new Date();
  date.setDate(date.getDate() - days);
  return { days, createdDate: date.toISOString() };
};

const getMockWhoisData = (domain: string) => {
  if (domain.includes('fresh') || domain.includes('new')) {
    return { days: 2, createdDate: new Date(Date.now() - 2 * 86400000).toISOString() };
  }
  return getRandomSafeAge();
};

async function getRealWhoisData(domain: string) {
  const apiKey = process.env.WHOIS_API_KEY;
  if (!apiKey) return null;

  try {
    const response = await fetch(
      `https://whoisxmlapi.com/whoisService/json?apiKey=${apiKey}&domainName=${domain}&outputFormat=JSON`
    );
    
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();

    if (data.WhoisRecord?.createdDate) {
      const createdDate = new Date(data.WhoisRecord.createdDate);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - createdDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return {
        days: diffDays,
        createdDate: createdDate.toISOString()
      };
    }
    return null;
  } catch (error) {

    console.warn("⚠️ Whois API unavailable, switching to Mock mode.");
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { url } = body;

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: "URL is required and must be a string" }, { status: 400 });
    }

    const urlToParse = url.startsWith('http') ? url : `https://${url}`;
    
    let urlObj: URL;
    try {
      urlObj = new URL(urlToParse);
    } catch (e) {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
    }

    const domain = urlObj.hostname;
    
    let score = 100;
    const reasons: string[] = [];
    let status: CheckResult['status'] = 'safe';


    if (urlObj.protocol === 'http:') {
      score -= 30;
      reasons.push("⚠️ Not Secure: Uses unencrypted HTTP protocol");
    }

    let whoisData = await getRealWhoisData(domain);
    if (!whoisData) {
      whoisData = getMockWhoisData(domain);
    }
    
    if (whoisData.days < 14) { 
      score -= 40; 
      reasons.push(`⚠️ Critical: Domain is very young (${whoisData.days} days old)`);
    } else if (whoisData.days < 180) {
      score -= 10;
      reasons.push(`Note: Domain is relatively new (${whoisData.days} days)`);
    }

    SUSPICIOUS_KEYWORDS.forEach(word => {
      if (domain.includes(word)) {
        score -= 15;
        reasons.push(`Suspicious keyword: "${word}"`);
      }
    });

    if (score <= 50) status = 'danger';
    else if (score < 80) status = 'suspicious';

    const result: CheckResult = {
      url,
      status,
      score: Math.max(0, score),
      reasons,
      checkedAt: new Date().toISOString(),
      domainAge: whoisData,
    };

    return NextResponse.json(result);

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}