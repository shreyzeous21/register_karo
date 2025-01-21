"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Chris",
    position: "President and CEO, PrintReach, USA",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
  },
  {
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Sarah",
    position: "CTO, TechGrowth, UK",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
  },
  {
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Michael",
    position: "Founder, InnovateLabs, USA",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
  },
  {
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Emma",
    position: "Director, DesignCraft, Canada",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=100",
  },
  {
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "David",
    position: "CEO, CloudSolutions, Australia",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=100",
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {rating % 1 !== 0 && (
        <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      )}
    </div>
  );
};

export default function Testimonial() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className=" bg-[#1B4E78] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center sm:text-left">
            What peoples says about us
          </h2>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-gray-100 transition-colors"
              onClick={prevSlide}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-orange-500 hover:bg-orange-600 border-none transition-colors"
              onClick={nextSlide}>
              <ChevronRight className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={`${currentPage}-${index}`}
              className="bg-white p-6 sm:p-8 relative transform transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl sm:text-6xl text-gray-300 font-serif absolute top-4 left-6">
                "
              </div>
              <div className="mb-4 sm:mb-6">
                <RatingStars rating={testimonial.rating} />
              </div>
              <p className="text-gray-600 mb-6 sm:mb-8 relative z-10 text-sm sm:text-base line-clamp-6">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-6 sm:mt-8">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 rounded-full mx-1 transition-colors ${
                i === currentPage ? "bg-orange-500" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
