import React from "react";
import Link from "next/link";

export default function Home() {
  const featuredArticles = [
    {
      title: "Breaking: Star Player Transfers Announced",
      image: "/images/transfer.jpg",
      slug: "star-player-transfers",
      category: "Sports",
    },
    {
      title: "Top 10 Entertainment Highlights of the Week",
      image: "/images/entertainment.jpg",
      slug: "top-entertainment-highlights",
      category: "Entertainment",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Combo Sports TV</h1>
      <p className="text-center text-lg mb-10 text-gray-600">
        Daily global coverage of Sports & Entertainment
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {featuredArticles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index}>
            <div className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow bg-white">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 uppercase mb-2">
                  {article.category}
                </p>
                <h2 className="text-xl font-semibold">{article.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
