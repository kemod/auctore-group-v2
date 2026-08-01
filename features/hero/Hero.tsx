import { Container, Section } from "@/components/common";
import {
  AnimatedImage,
  FadeUp,
  Parallax,
} from "@/components/motion";

import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";

export default function Hero() {
  return (
    <Section className="overflow-hidden pt-44 pb-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-50 via-white to-white" />

      <Container>
        <div className="grid items-center gap-24 lg:grid-cols-[1fr_560px]">
          <FadeUp>
            <HeroContent />
          </FadeUp>

          <Parallax
            offset={35}
            className="justify-self-end"
          >
            <AnimatedImage>
              <HeroImage />
            </AnimatedImage>
          </Parallax>
        </div>
      </Container>
    </Section>
  );
}