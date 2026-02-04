export type PhishingStatus = 'safe' | 'suspicious' | 'danger';

export interface CheckResult {
  url: string;
  status: PhishingStatus;
  score: number;
  reasons: string[];
  checkedAt: string;
  domainAge?: {
    days: number;
    createdDate: string;
  };
}

export interface CheckLinkResponse {
  data: CheckResult;
}