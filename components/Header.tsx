import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Search, ChevronDown, MenuIcon, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = ["Home", "Our Services", "Blog", "Contact Us", "About Us"];

export default function Header() {
  return (
    <div className=" mx-auto py-2 px-4 w-full flex justify-center shadow-md items-center">
      <div className="max-w-7xl gap-6 w-full h-16 flex items-center justify-between">
        <Image
          src="/logo.png"
          width={1000}
          height={1000}
          className=" w-52 h-auto"
          alt="logo"
        />

        <nav className="hidden lg:flex w-full justify-center">
          <ul className="flex flex-row gap-4 w-full items-center justify-end">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/ /g, "-")}`
                  }>
                  {item}
                  {item === "Our Services" && (
                    <ChevronDown size={16} className="ml-1 inline-block" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:flex items-center hidden  space-x-6">
          <Search size={20} className="" />
          <Button className="text-white bg-[#FFA229]" variant={"default"}>
            Talk An Expert
          </Button>
        </div>
        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col gap-4 mt-4">
                {navItems.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(/ /g, "-")}`
                      }
                      className="block py-2 flex-grow">
                      {item}
                    </Link>
                    {item === "Our Services" && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 mt-4">
                <Button className="text-white bg-[#FFA229]" variant={"default"}>
                  Talk An Expert
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
