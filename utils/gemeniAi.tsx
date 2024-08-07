import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.gemini_api as string);

export async function generateBlogPost(prompt: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}