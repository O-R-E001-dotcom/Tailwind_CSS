
// import { ArrowUpRight, ShoppingCart, Users, DollarSign, BarChart3 } from "lucide-react";

export default function StatsCards() {
  // const stats = [
  //   {
  //     title: "Total Sales",
  //     number: "₦10.5B",
  //     change: "+15%",
  //     color: "bg-cyan-100 text-cyan-700",
  //     icon: <BarChart3 className="w-6 h-6 text-cyan-900" />,
  //   },
  //   {
  //     title: "Orders",
  //     number: "22,734,324",
  //     change: "+15%",
  //     color: "bg-blue-100 text-blue-700",
  //     icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
  //   },
  //   {
  //     title: "Customers",
  //     number: "900,076",
  //     change: "+32%",
  //     color: "bg-purple-100 text-purple-700",
  //     icon: <Users className="w-6 h-6 text-purple-600" />,
  //   },
  //   {
  //     title: "Revenue",
  //     number: "₦4.2B",
  //     change: "+18%",
  //     color: "bg-pink-100 text-green-700",
  //     icon: <DollarSign className="w-6 h-6 text-green-600" />,
  //   },
  // ];

  // return (
  //   <div className="min-h-screen bg-sky-100 py-10 px-6">
  //     <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
  //       Business Overview 
  //     </h1>

  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
  //       {stats.map((stat, index) => (
  //         <div
  //           key={index}
  //           className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${stat.color}`}
  //         >
  //           <div className="flex items-center justify-between mb-4">
  //             {stat.icon}
  //             <span className="text-sm font-semibold flex items-center gap-1">
  //               {stat.change} <ArrowUpRight className="w-4 h-4" />
  //             </span>
  //           </div>
  //           <h2 className="text-2xl font-bold">{stat.number}</h2>
  //           <p className="text-sm opacity-80">{stat.title}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 mt-2">We'd love to hear from you 🇳🇬</p>
        </div>
        
        <form className="space-y-6">
          {/* Name input */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Chidi Okafor"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all"
            />
          </div>
          
          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="chidi@example.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all"
            />
          </div>
          
          {/* Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all resize-none"
            ></textarea>
          </div>
          
          {/* Submit button with active state */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
