import React from "react";
import NewsCard from "./NewsCard";

export default function CardSection() {
    const cards = [
  {
    category: "Entertainment",
    image: "https://media.premiumtimesng.com/wp-content/files/2024/12/Top-Stories-last-week.png",
    headline: "Blockbuster Movie Breaks Box Office Records",
    excerpt: "The latest release from a renowned director has shattered previous box office records, drawing massive crowds and rave reviews.",
    author: "Ore Sanni",
    date: "Oct 20, 2025",
    readTime: "4 min read",
  },
  {
    category: "Politics",
    image: "https://cdn.guardian.ng/wp-content/uploads/2024/10/Bola-Ahmed-Tinubu.jpg",
    headline: "Nigeria's New Economic Policy Set to Boost Growth",
    excerpt: "The Federal Government announced a new initiative aimed at diversifying the economy and empowering local industries across the nation.",
    author: "Ore Sanni",
    date: "Nov 11, 2025",
    readTime: "5 min read",
  },
  {
    category: "Sports",
    image: "https://cdn.vanguardngr.com/wp-content/uploads/2022/02/Super-Falcons-edited.jpeg",
    headline: "Local Team Wins Championship After Decade",
    excerpt: "In an exhilarating final match, the hometown heroes clinched the title, ending a ten-year drought and igniting celebrations across the city.",
    author: "Ore Sanni",
    date: "Nov 11, 2025",
    readTime: "3 min read",
  },
];


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            News Today
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Checkout out today's news on Tribunal 🇳🇬
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <NewsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
    
  );
}


