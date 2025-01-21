import Image from "next/image";
import React from "react";
const footerUpperImages = [
  "/footerUpper/coinbase.png",
  "/footerUpper/spotify.png",
  "/footerUpper/slack.png",
  "/footerUpper/dropbox.png",
  "/footerUpper/webflow.png",
  "/footerUpper/zoom.png",
];

export default function FooterUpper() {
  return (
    <div className="w-full flex justify-center items-center mb-10 px-4">
      <div className="max-w-7xl mx-auto justify-center items-center w-full">
        <div className="grid grid-cols-2 lg:grid-cols-6 items-center justify-center gap-10">
          {footerUpperImages.map((image) => (
            <Image
              key={image}
              src={image}
              alt="footer upper image"
              width={1000}
              height={1000}
              className="w-36 h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
