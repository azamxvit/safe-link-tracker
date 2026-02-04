import axios from "axios";
import { CheckResult } from "../types";

export const checkLinkFn = async (url: string): Promise<CheckResult> => {
  const response = await axios.post("/api/check-url", { url });
  return response.data;
};