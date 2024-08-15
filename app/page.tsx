"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import HeroSection from "../components/HeroSection"
import { TypeAnimation } from "react-type-animation";

import Testimonials from "../components/Testimonials";
import Footer from "../components/footer";
interface BlogPost {
  content: string;
}

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [blogPost, setBlogPost] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setBlogPost("");
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
    <>
      {/* <Navbar /> */}
      <Head>
        <title>AI Blog Writer - Generate Amazing Content</title>
        <meta
          name="description"
          content="Generate high-quality blog posts with AI"
        />
      </Head>
      <HeroSection />
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
                AI-Powered Blog Content Generator
              </h1>
              {/* Features Section */}

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
                        rows={4}
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
                          speed={50}
                          style={{
                            whiteSpace: "pre-line",
                            display: "inline-block",
                          }}
                        />
                      ) : (
                        blogPost.split("\n").map((paragraph, index) => (
                          <p key={index} className="mb-4 text-gray-700">
                            {paragraph}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* features */}
        <div className="mb-40 -mt-40">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Generated Content */}
            <div
              className="bg-white shadow-lg hover:bg-black 
              text-gray-800 hover:text-white rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <h3 className="text-xl font-semibold  mb-2">AI Generated</h3>
                <p className="">
                  State-of-the-art AI technology to create high-quality, unique
                  content tailored to your needs.
                </p>
              </div>
            </div>
            {/* Fast Response */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Fast Response
                </h3>
                <p className="text-gray-600">
                  Generate blog posts in seconds, saving you time and boosting
                  your productivity.
                </p>
              </div>
            </div>
            {/* No Limitation */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Limitation
                </h3>
                <p className="text-gray-600">
                  Generate as many blog posts as you need without any
                  restrictions or hidden fees.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial */}
        <Testimonials />
        {/* contact section */}

        <div
          id="contact"
          className="bg-white shadow-xl max-w-[800px] mx-auto rounded-lg overflow-hidden mt-12"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
