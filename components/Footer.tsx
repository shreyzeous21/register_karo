import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaApple, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

const sections = [
  {
    title: "Start a Business",
    links: ["Features", "Solutions", "Integrations", "Enterprise", "Partners"],
  },
  {
    title: "Government Registration",
    links: ["Partners", "Community", "Developers", "App", "Blog"],
  },
  {
    title: "Compliance & Tax",
    links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
  },
  {
    title: "BIS & CDSCO",
    links: ["About Us", "News", "Leadership", "Media Kit"],
  },
];

const socialLinks = [
  { icon: <FaFacebook />, href: "#", label: "Facebook" },
  { icon: <FaGoogle />, href: "#", label: "Google" },
  { icon: <FaApple />, href: "#", label: "Apple" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <div className="flex w-full justify-center items-center mx-auto py-10 bg-[#1e3a8a] text-white px-4">
      <div className="max-w-7xl gap-16 flex flex-col w-full mx-auto justify-center items-center">
        <div className="flex lg:flex-row flex-col w-full lg:items-start gap-10 lg:justify-start items-center justify-center">
          <div className="flex flex-col lg:text-start text-center lg:w-1/5">
            <p className="text-sm">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <ul className="flex items-center lg:justify-start justify-center gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    className="text-white hover:text-gray-300 transition-colors">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 w-full items-start">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#FFA229] text-lg">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center flex-col items-center gap-5">
          <span
            className="h-16 w-16 bg-[#FFA229] flex items-center justify-center rounded-full">
            <ArrowUp size={30} />
          </span>
          <p className="text-sm">© 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
