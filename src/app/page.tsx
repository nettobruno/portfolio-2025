"use client";

import HeaderSection from "@/ui/sections/HeaderSection";
import AboutSection from "@/ui/sections/AboutSection";
import SkillsSection from "@/ui/sections/SkillsSection";
import ProjectsSection from "@/ui/sections/ProjectsSection";
import TrustedBySection from "@/ui/sections/TrustedBySection";
import FormSection from "@/ui/sections/FormSection";
import Footer from "@/ui/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TrustedBySection />
      <FormSection />
      <Footer />
    </main>
  );
}
