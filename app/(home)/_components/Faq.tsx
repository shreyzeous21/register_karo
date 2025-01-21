import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software provides powerful recovery capabilities for deleted files from your desktop. The process is simple and user-friendly, with high success rates for recently deleted files.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software provides powerful recovery capabilities for deleted files from your desktop. The process is simple and user-friendly, with high success rates for recently deleted files.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software provides powerful recovery capabilities for deleted files from your desktop. The process is simple and user-friendly, with high success rates for recently deleted files.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software provides powerful recovery capabilities for deleted files from your desktop. The process is simple and user-friendly, with high success rates for recently deleted files.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software provides powerful recovery capabilities for deleted files from your desktop. The process is simple and user-friendly, with high success rates for recently deleted files.",
  },
];

export default function Faq() {
  return (
    <div className="w-full justify-center items-center bg-white py-10 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">FAQ</p>
          <h2 className="text-4xl font-bold text-[#3A2317]">
            Frequent Ask Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg shadow-sm border-l-8 border-blue-800 bg-white overflow-hidden">
              <AccordionTrigger className="px-6   py-4 hover:no-underline [&[data-state=open]>div>svg]:rotate-90">
                <div className="flex items-center justify-between w-full">
                  <span className="text-left font-medium">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Button
            variant="default"
            className="bg-[#1B4E78] hover:bg-[#163d5f] text-white px-6 py-2 rounded-md inline-flex items-center gap-2">
            Show more
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
