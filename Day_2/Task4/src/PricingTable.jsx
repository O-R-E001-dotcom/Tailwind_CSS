
import React from "react";

export default function PricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "₦5,000",
      period: "/month",
      features: [
        "3 Products",
        "Basic Support",
        "5GB Storage",
        "Email Notifications",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₦15,000",
      period: "/month",
      features: [
        "Advanced Supports",
        "10GB Storage",
        "All Features in Basic",
        "Priority Email Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₦50,000",
      period: "/month",
      features: [
        "All Pro Features",
        "Fast Performance",
        "Unlimited Storage",
        "24/7 Premium Support",
      ],
      popular: false,
    },
  ];

  return (
    
    <div className="min-h-screen bg-green-50 inset-0 py-16 px-6" style={{
          backgroundImage: 'repeating-linear-gradient(30deg, #008751, #008751 10px, white 60px, white 70px)'
        }}>{/* For stripe pattern */} {/* rgba() stands for Red, Green, Blue, Alpha(transparency)*/}
        
      <div className="max-w-6xl mx-auto text-center mb-12 inset-0 " >
        <h1 className="text-4xl font-extrabold text-black-500">
          Choose Your Plan
        </h1>
        <p className="mt-3 text-black-600 text-lg font-bold">
          Flexible pricing for individuals and businesses across Nigeria 🇳🇬
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-all duration-300 
              ${
                plan.popular
                  ? "bg-green-700 text-white scale-105 border-4 border-green-800"
                  : "bg-white text-zinc-600 hover:shadow-2xl"
              }`}
          >
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <div className="flex items-baseline justify-center md:justify-start gap-1 mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-sm">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className={`${
                        plan.popular ? "text-green-100" : "text-green-600"
                      } font-bold`}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call To Action(CTA) Button */}
            <button
              className={`w-full py-3 mt-4 rounded-lg font-semibold transition-all 
                ${
                  plan.popular
                    ? "bg-white text-green-700 hover:bg-zinc-100"
                    : "bg-green-700 text-white hover:bg-green-800"
                }`}
            >
              {plan.popular ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
