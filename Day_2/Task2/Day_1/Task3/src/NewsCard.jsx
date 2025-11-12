
import { Link } from "react-router-dom";

export default function NewsCard({ category, image, headline, excerpt, author, date, readTime,
}) {
  const categoryColors = {
    Politics: "bg-green-600 text-white",
    Sports: "bg-green-500 text-white border-green-500 border",
    Entertainment: "bg-green-500 text-white",
  };

  return (
    <div className="max-w-sm bg-white shadow-md rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      {/* Featured Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={headline}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
            categoryColors[category] || "bg-pink-700 text-white"
          }`}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-700 transition-colors duration-300">
          {headline}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed  mb-4">
          {excerpt}
        </p>

        {/* Author & Date Info */}
        <div className="flex items-center justify-between text-gray-500 text-xs mb-3">
          <span>{author}</span>
          <span>{date}</span>
        </div>

        {/* Read Time & Link */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">{readTime}</span>
          <Link to="#"
            className="text-green-700 text-sm font-semibold hover:text-green-800 hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}

