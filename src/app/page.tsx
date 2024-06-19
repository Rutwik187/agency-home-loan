import EmblaCarousel from "@/components/carousel/carousel";
import { Navbar } from "@/components/navbar";
import Stats from "@/components/stats";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Navbar />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Stats />
    </>
  );
}
