"use client";

import { useState } from "react";
import Head from "next/head";

const BlogPage = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentCategory, setCurrentCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Refurbished Laptop in 2023",
      excerpt:
        "A comprehensive guide to selecting the perfect refurbished laptop for your needs and budget.",
      content: `When shopping for a refurbished laptop, there are several key factors to consider. First, determine your primary use case - whether it's for work, gaming, or general use. Inspect the hardware specifications carefully, paying attention to the processor, RAM, and storage. Don't overlook the warranty and return policy offered by the seller. We recommend choosing A-grade or B-grade refurbished devices for the best balance of price and quality.`,
      category: "Buying Guide",
      date: "May 15, 2023",
      readTime: "5 min read",
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4e3c546-f5b9-454e-be7b-80412091e934.png",
      imageAlt:
        "Professional workspace with a high-end refurbished laptop surrounded by office supplies",
    },
    {
      id: 2,
      title: "The Truth About Refurbished Laptop Batteries",
      excerpt:
        "Everything you need to know about battery health in refurbished laptops and how to extend lifespan.",
      content: `Battery life is a common concern with refurbished laptops. Reputable refurbishers typically replace aging batteries or restore them to 80%+ capacity. Lithium-ion batteries naturally degrade over time, but proper care can extend their lifespan significantly. Avoid extreme temperatures, don't leave your laptop plugged in constantly, and consider calibrating the battery monthly for accurate charge readings.`,
      category: "Maintenance",
      date: "April 22, 2023",
      readTime: "4 min read",
      image: "https://placehold.co/800x450",
      imageAlt:
        "Close-up of a laptop battery with percentage indicator showing 85% capacity",
    },
    {
      id: 3,
      title: "Top 5 Business Laptops Available Refurbished",
      excerpt:
        "Premium business laptops that offer excellent value when purchased refurbished.",
      content: `1. Dell Latitude 7420 - Legendary business durability with 11th Gen Intel processors
      2. HP EliteBook 840 G7 - Excellent keyboard and security features
      3. Lenovo ThinkPad T490 - Iconic ThinkPad quality with modern specs
      4. MacBook Pro M1 - Apple Silicon performance at a fraction of retail
      5. Microsoft Surface Laptop 4 - Premium build quality and touchscreen

      Each of these models offers enterprise-grade reliability and can be found refurbished with significant savings. Look for units with at least 8GB RAM and SSD storage.`,
      category: "Product Reviews",
      date: "March 30, 2023",
      readTime: "6 min read",
      image: "https://placehold.co/800x450",
      imageAlt:
        "Three premium business laptops displayed side by side in a professional office setting",
    },
    {
      id: 4,
      title: "Our Refurbishment Process Explained",
      excerpt:
        "A behind-the-scenes look at how we test and certify our refurbished laptops.",
      content: `Every laptop in our inventory goes through a rigorous 25-point inspection process:
      1. Physical inspection for cosmetic defects
      2. Diagnostic testing of all hardware components
      3. Stress testing for thermal performance
      4. Battery health evaluation
      5. Keyboard and touchpad functionality
      6. Display quality assessment
      7. Port and connectivity verification
      8. Fresh OS installation with all updates
      9. Final quality assurance check

      We only sell grade A and B refurbished units that meet our strict performance standards.`,
      category: "Behind the Scenes",
      date: "February 18, 2023",
      readTime: "7 min read",
      image: "https://placehold.co/800x450",
      imageAlt:
        "Technician in lab coat testing a refurbished laptop in a clean workshop environment",
    },
  ];

  const categories = [
    "All",
    "Buying Guide",
    "Maintenance",
    "Product Reviews",
    "Behind the Scenes",
  ];

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      currentCategory === "All" || post.category === currentCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Refurbished Laptop Blog | Expert Tips & Reviews</title>
        <meta
          name="description"
          content="Expert advice, buying guides, and maintenance tips for refurbished laptops"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0a590665-360c-455b-b569-bdbb8039da6c.png"
            alt="Modern tech workspace with multiple refurbished laptop models on display"
            className="w-full h-64 object-cover"
          />
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Refurbished Laptop Blog
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300">
                Expert advice, buying guides, and maintenance tips to help you
                get the most from your refurbished laptop
              </p>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 items-start md:items-end">
            <div className="flex-1 w-full">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search Articles
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Filter by Category
              </label>
              <select
                id="category"
                className="block w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={currentCategory}
                onChange={(e) => setCurrentCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No posts found
              </h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter criteria
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentCategory("All");
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Clear filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid gap-12">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-600">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {post.date} · {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                      <p className="mb-4 text-gray-600">{post.excerpt}</p>

                      {expandedPost === post.id && (
                        <div className="mt-4 mb-6 prose max-w-none text-gray-700">
                          {post.content.split("\n").map((paragraph, i) => (
                            <p key={i} className="mb-4">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => togglePost(post.id)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {expandedPost === post.id ? "Show Less" : "Read More"}
                        <svg
                          className="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12 shadow-inner border border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Subscribe to our newsletter for the latest refurbished laptop
                deals, expert tips, and new blog posts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="px-6 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
