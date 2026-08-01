import { FadeUp } from "@/components/motion";
import { CTA } from "@/features/cta";

import AboutHero from "./components/AboutHero";
import Story from "./components/Story";
import VisionMission from "./components/VisionMission";
import Values from "./components/Values";
import Timeline from "./components/Timeline";

export default function About() {
  return (
    <>
      <FadeUp>
        <AboutHero />
      </FadeUp>

      <FadeUp delay={0.1}>
        <Story />
      </FadeUp>

      <FadeUp delay={0.15}>
        <VisionMission />
      </FadeUp>

      <FadeUp delay={0.2}>
        <Values />
      </FadeUp>

      <FadeUp delay={0.25}>
        <Timeline />
      </FadeUp>

      <FadeUp delay={0.3}>
        <CTA />
      </FadeUp>
    </>
  );
}