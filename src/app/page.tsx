"use client";

import { useState } from "react";
import HeaderSection from "@/ui/sections/HeaderSection";
import AboutSection from "@/ui/sections/AboutSection";
import Button from "@/ui/components/Button";
import CardSkills from "@/ui/components/CardSkills";
import CardProjects from "@/ui/components/CardProjects";
import Input from "@/ui/components/Input";

import { Send } from "lucide-react";
import {
  SkillsSection,
  TitleSection,
  GridSkillsSection,
  ProjectsSection,
  GridProjectsSection,
  FormSection,
  SubtitleSection,
  TrustedBySection,
  FooterSection,
  PulsingHeartIcon,
} from "./page.style";
import { skills } from "@/constants/skills";
import { projects } from "@/constants/projects";
import Image from "next/image";

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

      <SkillsSection>
        <TitleSection>Habilidades e Tecnologias</TitleSection>

        <GridSkillsSection className="container">
          {skills.map((skill, index) => {
            return (
              <CardSkills
                key={index}
                icon={<skill.icon color="rgba(92,156,84,1)" size={24} />}
                title={skill.title}
                description={skill.description}
                tags={skill.tags}
              />
            );
          })}
        </GridSkillsSection>
      </SkillsSection>

      <ProjectsSection>
        <TitleSection>Projetos em destaque</TitleSection>

        <GridProjectsSection className="container">
          {projects.map((project, index) => {
            return (
              <CardProjects
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                codeUrl={project.codeUrl}
                demoUrl={project.demoUrl}
              />
            );
          })}
        </GridProjectsSection>
      </ProjectsSection>

      <TrustedBySection>
        <TitleSection>Marcas que trabalhei</TitleSection>

        <div>
          <Image src="/images/locomotiva.svg" width={150} height={100} alt="" />

          <Image src="/images/hexalab.svg" width={150} height={100} alt="" />

          <Image src="/images/coobrastur.svg" width={150} height={100} alt="" />

          <Image src="/images/mirante.svg" width={150} height={100} alt="" />

          <Image src="/images/uol.svg" width={150} height={100} alt="" />

          <Image src="/images/gb.svg" width={150} height={100} alt="" />
        </div>
      </TrustedBySection>

      <FormSection>
        <TitleSection>Vamos nos conectar</TitleSection>
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
