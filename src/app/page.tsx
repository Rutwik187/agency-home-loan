import EmblaCarousel from "@/components/carousel/carousel";
import Stats from "@/components/stats";
import { EmblaOptionsType } from "embla-carousel";
import { Navbar } from "@/components/navbar";
import CompanyProfile from "@/components/company-profile";
import HowItWorks from "@/components/how-it-works";
import LogoCloud from "@/components/logo-cloud";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

import ContactUs from "@/components/contact-us";
import { MobileNav } from "@/components/mobile-nav";
import ServicesPage from "./services/page";
import EMICalculatorHome from "@/components/emi-calculator";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Navbar />
      <MobileNav />
      <div className="max-w-7xl mx-auto mt-6 flex flex-col gap-10  sm:gap-16 lg:gap-20">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <Stats />
        <ServicesPage />
        <CompanyProfile />
        <EMICalculatorHome />
        <LogoCloud />
        <HowItWorks />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
