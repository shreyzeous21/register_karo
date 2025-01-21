"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Search,
  ChevronDown,
  MenuIcon,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = ["Home", "Our Services", "Blog", "Contact Us", "About Us"];
const services = [
  "Company Registration",
  "GST Registration",
  "Tax Filing",
  "Trademark Registration",
  "Legal Services",
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-4"
        }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image
              src="/logo.png"
              width={1000}
              height={1000}
              className="w-40 md:w-52 h-auto"
              alt="logo"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item === "Our Services" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-[#FFA229] transition-colors">
                      {item}
                      <ChevronDown
                        size={16}
                        className="transform group-hover:rotate-180 transition-transform duration-200"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      {services.map((service, idx) => (
                        <DropdownMenuItem
                          key={idx}
                          className="cursor-pointer hover:bg-orange-50">
                          <Link
                            href={`/services/${service
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                            className="w-full">
                            {service}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/ /g, "-")}`
                    }
                    className="text-gray-700 hover:text-[#FFA229] transition-colors">
                    {item}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} className="text-gray-600" />
            </button>
            <Button
              className="bg-[#FFA229] hover:bg-[#ff9100] text-white px-6 rounded-full"
              variant="default">
              Talk to Expert
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100">
                  <MenuIcon size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex-1 py-4">
                    <ul className="space-y-3">
                      {navItems.map((item, index) => (
                        <li key={index}>
                          {item === "Our Services" ? (
                            <div className="space-y-2">
                              <div className="text-lg font-medium text-gray-900">
                                {item}
                              </div>
                              <div className="pl-4 space-y-3">
                                {services.map((service, idx) => (
                                  <Link
                                    key={idx}
                                    href={`/services/${service
                                      .toLowerCase()
                                      .replace(/ /g, "-")}`}
                                    className="block text-gray-600 hover:text-[#FFA229] transition-colors"
                                    onClick={() => setIsOpen(false)}>
                                    {service}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={
                                item === "Home"
                                  ? "/"
                                  : `/${item.toLowerCase().replace(/ /g, "-")}`
                              }
                              className="text-lg font-medium text-gray-900 hover:text-[#FFA229] transition-colors block"
                              onClick={() => setIsOpen(false)}>
                              {item}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={16} />
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail size={16} />
                        <a href="mailto:info@registerkaro.com">
                          info@registerkaro.com
                        </a>
                      </div>
                      <Button
                        className="w-full bg-[#FFA229] hover:bg-[#ff9100] text-white"
                        onClick={() => setIsOpen(false)}>
                        Talk to Expert
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}
