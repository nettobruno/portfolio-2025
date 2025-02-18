"use client";

import { useState } from "react";
import HeaderSection from "@/ui/sections/HeaderSection";
import AboutSection from "@/ui/sections/AboutSection";
import SkillsSection from "@/ui/sections/SkillsSection";
import ProjectsSection from "@/ui/sections/ProjectsSection";
import TrustedBySection from "@/ui/sections/TrustedBySection";

import {
  FooterSection,
  PulsingHeartIcon,
} from "./page.style";
import FormSection from "@/ui/sections/FormSection";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TrustedBySection />
      <FormSection />

      <FooterSection>
        <p>
          Feito com <PulsingHeartIcon color="rgba(92,156,84,1)" size={16} /> por
          Bruno Netto
        </p>
      </FooterSection>
    </main>
  );
}
