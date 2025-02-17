"use client";

import { useState } from "react";
import HeaderSection from "@/ui/sections/HeaderSection";
import AboutSection from "@/ui/sections/AboutSection";
import SkillsSection from "@/ui/sections/SkillsSection";
import ProjectsSection from "@/ui/sections/ProjectsSection";
import TrustedBySection from "@/ui/sections/TrustedBySection";
import TitleSection from "@/ui/components/TitleSection";
import Button from "@/ui/components/Button";
import Input from "@/ui/components/Input";

import { Send } from "lucide-react";
import {
  FormSection,
  SubtitleSection,
  FooterSection,
  PulsingHeartIcon,
} from "./page.style";

export default function Home() {
  const handleForm = () => {
    console.log(inputName, inputEmail, inputMessage);
  };

  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputMessage, setInputMessage] = useState<string>("");

  return (
    <main>
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TrustedBySection />

      <FormSection>
        <TitleSection text="Vamos nos conectar" />
        <SubtitleSection>
          Tem um projeto em mente? Eu adoraria ouvir sobre isso.
        </SubtitleSection>

        <form>
          <Input
            name="name"
            placeholder="Nome"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />

          <Input
            name="email"
            placeholder="E-mail"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />

          <Input
            name="message"
            placeholder="Mensagem"
            value={inputMessage}
            isTextarea
            onChange={(e) => setInputMessage(e.target.value)}
          />

          <Button onClick={handleForm}>
            <Send size={20} /> Enviar Mensagem
          </Button>
        </form>
      </FormSection>

      <FooterSection>
        <p>
          Feito com <PulsingHeartIcon color="rgba(92,156,84,1)" size={16} /> por
          Bruno Netto
        </p>
      </FooterSection>
    </main>
  );
}
