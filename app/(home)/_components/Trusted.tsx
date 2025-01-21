import React from "react";
import Image from "next/image";

const trustedImages = [
  "/trusted/oracle.png",
  "/trusted/morp.png",
  "/trusted/samsung.png",
  "/trusted/monday.png",
  "/trusted/segment.png",
];

export default function Trusted() {
  return (
    <div className="w-full bg-white flex max-w-7xl px-4 py-10 gap-8 mx-auto justify-center flex-col items-center ">
      <h1 className="text-2xl font-bold text-center">
        Trusted By Over 100+ Startups and freelance business
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 items-center justify-center gap-10">
        {trustedImages.map((image) => (
          <Image
            key={image}
            src={image}
            alt="Trusted by"
            width={1000}
            height={1000}
            className="w-44 h-auto"
          />
        ))}
      </div>
    </div>
  );
}
