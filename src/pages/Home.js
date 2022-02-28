import React from "react";
import HeroSection from "../components/HeroSection";
import AboutHome from "../components/AboutHome";
import ServiceSection from "../components/ServiceSection";
import ProjectHome from "../components/ProjectHome";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactBanner from "../components/ContactBanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutHome />
      <ServiceSection />
      <ProjectHome />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}
