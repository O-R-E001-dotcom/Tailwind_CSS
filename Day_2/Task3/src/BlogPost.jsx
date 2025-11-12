import React from "react";

export default function BlogPost() {
  const relatedPosts = [
    { title: "Navigating tasks in AI Fellowship", date: "Nov 10, 2025" },
    { title: "Integratin of AI into Workplace", date: "Nov 11, 2025" },
    { title: "Becoming a better coder", date: "Nov 9, 2025" },
  ];

  return (
    <div className="min-h-screen bg-cyan-50 p-6 md:p-12">
      {/* Featured Image */}
      <div className="w-full h-72 md:h-96 overflow-hidden rounded-2xl mb-8">
        <img
          src="https://i.pinimg.com/1200x/ab/b5/33/abb533741bcd9b568b61308b20d49673.jpg"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Title & Meta */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-sky-800 mb-3">
          The Future of Tech in Nigeria
        </h1>
        <div className="text-gray-500 text-sm flex gap-4">
          <span>By <strong className="text--700 text-blue-600">Abolore Sanni</strong></span>
          <span>• Nov 11, 2025</span>
          <span>• 6 min read</span>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Nigeria’s tech ecosystem has seen exponential growth in recent years.
            Startups across Lagos, Abuja, and Port Harcourt are building innovative
            solutions that address real-world challenges in fintech, health, and education.
          </p>
          <p>
            With an increasing number of investors and global partnerships,
            the future looks bright. Government policies are slowly adapting
            to support the digital economy, though infrastructure remains a key challenge.
          </p>
          <div className="grid grid-cols-2 px-4 gap-4">
            <img src="https://i.pinimg.com/1200x/8e/3e/5f/8e3e5f4d25e9aa7a42a33305561e62cd.jpg" alt="pic" />
            <div className=""> 
                <h2 className="text-lg font-semibold text-blue-400 capitalize underline leading-lose">AI in the Workplace</h2>
            <p>
            As more young Nigerians embrace coding, design, and entrepreneurship,
            the country is positioning itself as Africa’s innovation hub.
          </p>
            </div>
            
          </div>
          
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <h2 className="text-xl font-semibold text-cyan-800 border-b pb-2">
            Related Posts
          </h2>
          <ul className="space-y-4">
            {relatedPosts.map((post, index) => (
              <li key={index} className="border-l-4 border-green-600 pl-4 hover:bg-green-50 transition-colors rounded-md">
                <h3 className="text-gray-900 font-medium hover:text-green-700 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500">{post.date}</p>
              </li>
            ))}
          </ul>
          <img src="https://i.pinimg.com/736x/b3/1c/60/b31c608108475fea6cd7e49e3a2dd46e.jpg" alt="coding" className="w-62 h-60"/>
        </aside>
      </div>
    </div>
  );
}
