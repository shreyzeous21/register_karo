import { Button } from "@/components/ui/button";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";

export default function AppSection() {
  return (
    <div className="bg-[#1e3a8a] w-full flex items-center px-4 lg:py-0 py-10 mx-auto justify-center">
      <div className="max-w-7xl mx-auto justify-center w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 flex items-start flex-col">
          <h2 className="text-4xl font-bold text-white leading-tight lg:text-5xl">
            Manage Your Services by your Mobile Phone
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>

          <div className="space-y-4">
            <h3 className="text-white text-xl">Get the App</h3>
            <div className="flex flex-row w-full items-center justify-between gap-4">
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-100 text-gray-900 flex items-center gap-2 h-14 px-6">
                <FaAppStore className="h-20 w-20" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="bg-white hover:bg-gray-100 text-gray-900 flex items-center gap-2 h-14 px-6">
                <BiLogoPlayStore className="h-20 w-20" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Images */}
        <div className="relative h-[400px] w-full overflow-hidden hidden lg:block">
          <div className="absolute right-0 top-0 w-[300px]">
            <img
              src="iphone1.png"
              alt="iPhone mockup 1"
              className="w-full h-auto rounded-[2.5rem] "
            />
          </div>
          <div className="absolute right-[200px] top-[100px] w-[280px]">
            <img
              src="iphone2.png"
              alt="iPhone mockup 2"
              className="w-full h-full rounded-[2.5rem] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
