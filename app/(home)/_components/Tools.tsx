"use client";

import {
  SiShopify,
  SiFirebase,
  SiGithub,
  SiDropbox,
  SiTrello,
  SiAsana,
  SiSlack,
  SiAdobecreativecloud,
  SiGooglecloud,
  SiFigma,
  SiJira,
  SiZoom,
  SiDigitalocean,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiGitlab,
  SiBitbucket,
} from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { BsAmazon, BsMicrosoft } from "react-icons/bs";

const tools = [
  { icon: SiShopify, color: "text-green-500" },
  { icon: BsMicrosoft, color: "text-blue-500" },
  { icon: SiFirebase, color: "text-yellow-500" },
  { icon: SiGithub, color: "text-gray-800" },
  { icon: SiDropbox, color: "text-blue-600" },
  { icon: SiTrello, color: "text-blue-400" },
  { icon: SiAsana, color: "text-red-500" },
  { icon: SiSlack, color: "text-purple-500" },
  { icon: SiAdobecreativecloud, color: "text-red-600" },
  { icon: SiGooglecloud, color: "text-blue-500" },
  { icon: SiFigma, color: "text-purple-600" },
  { icon: SiJira, color: "text-blue-500" },
  { icon: SiZoom, color: "text-blue-600" },
  { icon: BsAmazon, color: "text-orange-500" },
  { icon: SiDigitalocean, color: "text-blue-500" },
  { icon: SiVercel, color: "text-black" },
  { icon: SiNetlify, color: "text-teal-500" },
  { icon: SiHeroku, color: "text-purple-600" },
  { icon: SiGitlab, color: "text-orange-600" },
  { icon: SiBitbucket, color: "text-blue-500" },
];

export default function Tools() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Happy Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>

        <div className="relative">
          {/* Inner circle of icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {tools.slice(0, 8).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform hover:scale-110 hover:shadow-xl">
                  <Icon className={`w-8 h-8 ${tool.color}`} />
                </div>
              );
            })}
          </div>

          {/* Middle circle of icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {tools.slice(8, 14).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform hover:scale-110 hover:shadow-xl">
                  <Icon className={`w-8 h-8 ${tool.color}`} />
                </div>
              );
            })}
          </div>

          {/* Outer circle of icons */}
          <div className="flex flex-wrap justify-center gap-8">
            {tools.slice(14).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform hover:scale-110 hover:shadow-xl">
                  <Icon className={`w-8 h-8 ${tool.color}`} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="link"
            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2">
            Show more
            <FaArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
