"use client";

import { FaWpforms } from "react-icons/fa";
import { BsCreditCard2Front } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const steps = [
  {
    icon: FaWpforms,
    text: "Fill up Application Form",
    color: "bg-pink-500",
  },
  {
    icon: BsCreditCard2Front,
    text: "Make Online Payment",
    color: "bg-green-500",
  },
  {
    icon: MdOutlineManageAccounts,
    text: "Executive will Process Application",
    color: "bg-orange-500",
  },
  {
    icon: AiOutlineMail,
    text: "Get Confirm Mail",
    color: "bg-blue-500",
  },
];

export default function Banner() {
  return (
    <div className="w-full bg-orange-400 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 justify-center sm:justify-start">
                <div
                  className={`${step.color} p-3 rounded-full text-white flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-black  text-sm font-semibold">
                  {step.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}