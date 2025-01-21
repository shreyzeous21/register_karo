import React from "react";

const stats = [
  { value: "1M+", label: "Customers" },
  { value: "12+", label: "Years of Excellence" },
  { value: "41+", label: "R&D Engineers" },
  { value: "78+", label: "Countries" },
  { value: "3287+", label: "Partners" },
  { value: "41+", label: "Awards Received" },
];

export default function StatsSection() {
  return (
    <div className="bg-white py-10 px-4 w-full text-center">
      {/* Header Section */}
      <p className="text-sm uppercase tracking-widest text-orange-500 mb-2">
        Why Register Karo
      </p>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-10">
        Some Numbers are Important
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 items-center  md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-orange-500 via-blue-500 to-blue-900 text-transparent bg-clip-text">
              {stat.value}
            </h3>
            <p className="text-sm font-semibold text-gray-700 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
