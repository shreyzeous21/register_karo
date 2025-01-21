import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full justify-center items-center px-4 flex py-10 ">
      <div className="max-w-7xl mx-auto justify-center items-center w-full ">
        <div className="grid gap-6 lg:grid-cols-2 items-center mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-orange-500 font-medium tracking-wide uppercase">
                WELCOME TO REGISTERKARO.IN
              </h3>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2">
                About <span className="text-orange-500">Register Karo</span>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We have been using Intelegencia as our DevOps vendor for our
                field service applications over the last couple of years and
                I&apos;m extremely pleased with their performance, ability to
                execute, and willingness to adapt in our ever changing
                environment. Perry is an outstanding leader who is fanatical
                about customer satisfaction. He has built a solid team which has
                consistently delivered on projects thereby exceeding
                everyone&apos;s expectations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I would strongly recommend their services to any organization
                that is looking for solid, reliable, and predictable outcomes.
              </p>
            </div>
            <div>
              <Button
                variant="default"
                size="lg"
                className=" flex gap-2 items-center  bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                Learn More <ArrowRightCircle />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <Image
                src="/about-bg.png"
                alt="Register Karo Team"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="absolute hidden lg:block -right-4 top-1/2 -translate-y-1/2 w-24 h-96">
              <div className="absolute inset-0 bg-orange-500/10">
                <div className="absolute right-0 top-0 w-full h-full">
                  <div className="grid grid-cols-3 gap-2 p-2">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={`${i}`}
                        className="w-1.5 h-1.5 rounded-full bg-orange-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
