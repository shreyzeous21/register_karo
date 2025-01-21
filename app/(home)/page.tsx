import React from "react";
import Hero from "./_components/Hero";
import Trusted from "./_components/Trusted";
import ServicesSection from "./_components/Explore";
import AboutSection from "./_components/About";
import ChooseSection from "./_components/ChooseSection";
import VideoSection from "./_components/VideoSection";
import NewsLetter from "./_components/NewsLetter";
import FooterUpper from "./_components/FooterUpper";
import StatsSection from "./_components/StatsSection";
import AppSection from "./_components/AppSection";
import Faq from "./_components/Faq";
import Testimonials from "./_components/Testimonials";
import BlogSection from "./_components/BlogSection";
import Banner from "./_components/Banner";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-full h-auto">
      <Hero />
      <Trusted />
      <ServicesSection />
      <AboutSection />
      <ChooseSection />
      <VideoSection />
      <Banner />
      <BlogSection />
      <Testimonials />
      <Faq />
      <AppSection />
      <StatsSection />
      <NewsLetter />
      <FooterUpper />
    </div>
  );
}
