import { NextResponse } from "next/server";
import { CheckResult } from "@/features/link-checker/types";

const SUSPICIOUS_KEYWORDS = ['login', 'verify', 'secure', 'account', 'update', 'bank', 'bonus', 'free'];

const getMockWhoisData = (domain: string) => {
  if (domain.includes('fresh') || domain.includes('new') || domain.includes('bonus')) {
    return {
      days: 2,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    };
  }

  if (domain.includes('google') || domain.includes('amazon') || domain.includes('kaspi')) {
    return {
      days: 10500,
      createdDate: "1997-09-15T00:00:00.000Z"
    };
  }

  return {
    days: 400,
    createdDate: "2024-01-01T00:00:00.000Z"
  };
};

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    
    let score = 100;
    const reasons: string[] = [];

    const whoisData = getMockWhoisData(domain);
    
    if (whoisData.days < 14) {
      score -= 40;
      reasons.push(`⚠️ Critical: Domain is very young (${whoisData.days} days old)`);
    } else if (whoisData.days < 30) {
      score -= 15;
      reasons.push(`Warning: Domain was created recently (${whoisData.days} days ago)`);
    }

    SUSPICIOUS_KEYWORDS.forEach(word => {
      if (domain.includes(word) || urlObj.pathname.includes(word)) {
        score -= 20;
        reasons.push(`Suspicious keyword detected: "${word}"`);
      }
    });

    if (domain.length > 30) {
      score -= 10;
      reasons.push('Domain name is unusually long');
    }

    let status: CheckResult['status'] = 'safe';
    if (score <= 50) status = 'danger';
    else if (score < 80) status = 'suspicious';

    await new Promise(resolve => setTimeout(resolve, 800));

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
    return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
  }
}