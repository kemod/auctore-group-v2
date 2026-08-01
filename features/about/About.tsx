import { CTA } from "@/features/cta";

import AboutHero from "./components/AboutHero";
import Story from "./components/Story";
import VisionMission from "./components/VisionMission";
import Values from "./components/Values";
import Timeline from "./components/Timeline";

export default function About() {
  return (
    <>
      <AboutHero />

      <Story />

      <VisionMission />

      <Values />

      <Timeline />

      <CTA />
    </>
  );
}