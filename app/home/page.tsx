"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { TypeAnimation } from "react-type-animation";
interface BlogPost {
  content: string;
}

const Home = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [blogPost, setBlogPost] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setBlogPost("");
    setPrompt(
      prompt +
      " create a long descriptive and engaging blog content for this topic"
    );
    try {
      const response = await axios.post<BlogPost>("/api/generate-post", {
        prompt,
      });
      setIsTyping(true);
      setBlogPost(response.data.content);
    } catch (error) {
      console.error("Error generating blog post:", error);
      setBlogPost("An error occurred while generating the blog post.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (blogPost) {
      setIsTyping(true);
    }
  }, [blogPost]);

  return (
    <div>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Generate Your Blog Post
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="prompt"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter your blog post topic or idea
              </label>
              <textarea
                id="prompt"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                rows={2}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., '10 tips for productive remote work'"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate Blog Post"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* ... (keep the features section as it was) ... */}

      {blogPost && (
        <div className="bg-white shadow-xl text-black rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Generated Blog Post
            </h2>
            <div className="prose max-w-none">
              {isTyping ? (
                <TypeAnimation
                  sequence={[blogPost, () => setIsTyping(false)]}
                  wrapper="div"
                  cursor={true}
                  speed={99}
                  style={{
                    whiteSpace: "pre-line",
                    display: "inline-block",
                  }}
                />
              ) : (
                blogPost.split("\n").map((paragraph, index) => (
                  <div key={index} className="mb-4 text-gray-700">
                    <ReactMarkdown>{paragraph}</ReactMarkdown>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;