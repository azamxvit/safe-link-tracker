import { z } from "zod";

export const urlSchema = z.string().url({ message: "Please enter a valid URL (e.g., https://google.com)" });

export const validateUrl = (url: string) => {
  const result = urlSchema.safeParse(url);
  return result;
};