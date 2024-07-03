"use client";
import EmblaCarousel from "@/components/carousel/carousel";
import { Services } from "@/components/services";
import Stats from "@/components/stats";
import { EmblaOptionsType } from "embla-carousel";
import { services } from "@/constants/services";
import { Navbar } from "@/components/navbar";
import CompanyProfile from "@/components/company-profile";
import HowItWorks from "@/components/how-it-works";
import LogoCloud from "@/components/logo-cloud";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import EMICalculator from "./emi-calculator/page";
import { RecoilRoot } from "recoil";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <RecoilRoot>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-12 flex flex-col gap-10  sm:gap-16 lg:gap-20">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <Stats />
        <Services items={services} />
        <CompanyProfile />
        <EMICalculator />
        <LogoCloud />
        <HowItWorks />
        <Testimonials />
        <Footer />
      </div>
    </RecoilRoot>
  );
}
