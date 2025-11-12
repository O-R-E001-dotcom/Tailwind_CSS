import React from "react";
import "./App.css";
import pic from "./assets/pic.jpg";

const App = () => {
  return (
    <>
      
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with Nigerian colors */}
      <div className="h-32 bg-gradient-to-b from-green-500 via-white to-green-600"></div>
      
      {/* Avatar */}
      <div className="relative px-15 -mt-16">
        <div className="w-29 h-32 bg-gray-50 rounded-full border-4 border-white mx-auto"></div>
        <img src={pic} alt="Profile" className="w-29 h-30 object-cover bg-gray-50 rounded-full border-4 border-white mx-auto -mt-34" />

      </div>
      
      {/* Content */}
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">Abolore Sanni</h2>
        <p className="text-gray-600 mt-1">AI Developer</p>
        <p className="text-sm text-gray-500 mt-2">Abuja, Nigeria 🇳🇬</p>
        
        {/* Bio */}
        <p className="text-gray-700 mt-4 text-sm leading-relaxed">
          Passionate about building amazing web applications with React and Tailwind CSS.
        </p>
        
        {/* Stats */}
        <div className="flex justify-around mt-6 pt-6 border-t border-gray-200">
          <div>
            <p className="text-2xl font-bold text-naija-green">138.2k</p>
            <p className="text-xs text-gray-600 uppercase">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">72</p>
            <p className="text-xs text-gray-600 uppercase">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">200</p>
            <p className="text-xs text-gray-600 uppercase">Following</p>
          </div>
        </div>
        
        {/* Button */}
        <button className="mt-6 w-full bg-green-500 text-white font-semibold py-3 rounded-lg">
          Follow
        </button>
      </div>
    </div>

    
    
   
    </>
  );
};

export default App;
