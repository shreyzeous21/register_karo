import {
  Facebook,
  Instagram,
  Mail,
  PhilippinePeso,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const socialLinks = [
  {
    icon: <Instagram size={20} />,
    href: "#",
  },
  {
    icon: <Facebook size={20} />,
    href: "#",
  },
  {
    icon: <Twitter size={20} />,
    href: "#",
  },
  {
    icon: <PhilippinePeso size={20} />,
    href: "#",
  },
];

export default function TopBar() {
  return (
    <div className="w-full hidden lg:flex px-4 bg-blue-950 h-10 items-center justify-center ">
      <div className="flex-row gap-5 flex items-center  max-w-7xl w-full  justify-end">
        <Link
          href={"mailto:www.registerkaro.in"}
          className="text-white text-sm flex gap-2 items-center">
          <Mail size={20} />
          www.registerkaro.in
        </Link>
        <Separator orientation="vertical" className="h-4" />
        <span className="flex gap-2 items-center text-white text-sm">
          <Phone size={20} />
          +91 8447746183
        </span>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex gap-2 items-center text-white text-sm">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
