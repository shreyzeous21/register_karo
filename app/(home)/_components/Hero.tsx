import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GrGroup } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";

const items = [
  "Annual Compliance",
  "Payroll Services",
  "Company Formation",
  "Annual Compliance",
];

export default function Hero() {
  return (
    <div className=" bg-[url('/bg-hero.png')] bg-center bg-cover w-full ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
              <span className="text-sm">Google Rating</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 stroke-yellow-400"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Your Trusted Partner For{" "}
                <span className="text-orange-500">Compliance</span> needs
              </h1>
              <p className="text-gray-600 text-lg">
                An online business compliance platform that helps entrepreneurs
                and other individuals with various,{" "}
                <span className="font-medium">registrations, tax filings</span>,
                and other <span className="font-medium">legal matters</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-4">
                <CiGrid41 className="text-4xl" />
                <div>
                  <div className="font-bold text-xl">4.5+</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <GrGroup className="text-4xl" />
                <div>
                  <div className="font-bold text-xl">20,000+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaHandshake className="text-4xl" />
                <div>
                  <div className="font-bold text-xl">99.8%</div>
                  <div className="text-sm text-gray-600">
                    Financial Stability
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-2">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                Get Started For Free
              </Button>
              <Button size="lg" variant="outline" className="gap-1">
                <span className="size-2 bg-orange-500 rounded-full" />
                See how it works
              </Button>
            </div>
          </div>

          <div className="flex ">
            <Image
              src={"/hero.png"}
              height={1000}
              width={1000}
              alt="hero_logo"
              className="object-contain  lg:w-[36vw]"
            />
            <div className="lg:flex hidden flex-col gap-6">
              {items.map((item, index) => (
                <Button key={index} variant={"outline"} className="shadow-md">
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
