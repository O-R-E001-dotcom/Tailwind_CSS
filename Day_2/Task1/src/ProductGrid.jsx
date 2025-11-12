import React from "react";

export default function ProductGrid() {
  const products = [
    { name: "Jollof Rice", price: "₦1,500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEYZoAXFTrvMnKNDO3OlMbJo0jBs12lyx3A&s" },
    { name: "Ankara Fabric", price: "₦5,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlou_pIYZztneMRTrzE_ATv5FmAETjl68BQ&s" },
    { name: "Suya", price: "₦1,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXioa8jUFb1_hbf63tgrq2np90D563XylCjg&s" },
    { name: "Aso-Ebi", price: "₦15,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPViEnBS6gjmK79VFE65xCSiXNIX6_6R_BQ&s" },
    { name: "Palm Wine", price: "₦1,200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kRMePHE521OJdFAzRnCk1_7na4n3HwA4AQ&s" },
    { name: "Agbada", price: "₦25,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlCNKAIEQ6gql5qRasMtSrL2dJxGToFk7aA&s" },
    { name: "Chin Chin", price: "₦500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyva17G0qOU4R1ahiPjsmt1HLwyyX7vfJg9w&s" },
    { name: "Puff Puff", price: "₦300", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPD3cu5kDqg5fpUSwFJ4LnWR4C9S430BnjzA&s" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Nigerian Market Specials
      </h2>

      {/* Responsive grid size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-green-600 font-bold mb-4">{product.price}</p>
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
