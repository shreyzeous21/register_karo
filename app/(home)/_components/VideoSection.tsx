import { Brain, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="w-full mx-auto flex justify-center items-center bg-[#1e3a8a] py-10 px-4">
      <div className="max-w-7xl flex w-full justify-center items-center ">
        <div className="grid gap-8 lg:grid-cols-2 grid-cols-1 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Our Video Introductions
              </h2>
              <p className="text-gray-300">
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus
                magna vulputate pellentesque a diam tincidunt apis dui.
              </p>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    Explore ideas together
                  </h3>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    Bring those ideas to life
                  </h3>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video Thumbnail */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <Image
              src="/video.png"
              alt="Video thumbnail"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
