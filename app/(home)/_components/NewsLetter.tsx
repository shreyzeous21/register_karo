import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import React from "react";

export default function NewsLetter() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-blue-900 text-white py-16 px-4 text-center">
      {/* Header Section */}
      <p className="text-sm uppercase tracking-widest mb-2">
        1% of the Industry
      </p>
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Welcome to your new digital reality.{" "}
        <span className="text-orange-300">Now.</span>
      </h1>

      <div className="relative max-w-lg mx-auto">
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="w-full  border-none bg-white text-black"
        />
        <Button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white   font-medium">
          Submit
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 text-white">
        {[
          "Instant results",
          "User-friendly interface",
          "Personalized customization",
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className="text-orange-300 w-5 h-5" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
