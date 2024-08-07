import { NextApiRequest, NextApiResponse } from "next";
import { generateBlogPost } from "../../utils/gemeniAi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { prompt } = req.body;
      const blogPost = await generateBlogPost(prompt);
      res.status(200).json({ content: blogPost });
    } catch (error) {
      console.error("Error generating blog post:", error);
      res
        .status(500)
        .json({ error: "An error occurred while generating the blog post." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
