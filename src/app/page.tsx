"use client";

import { useState } from "react";
import Button from "@/ui/Button";
import CardSkills from "@/ui/CardSkills";
import CardProjects from "@/ui/CardProjects";
import Input from "@/ui/Input";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, Heart, Code, Send } from "lucide-react";
import {
  Header,
  Title,
  JobTitle,
  InfoText,
  BlockArrow,
  AboutSection,
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleForm = () => {
    console.log(inputName, inputEmail, inputMessage);
  };

  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputMessage, setInputMessage] = useState<string>("");

  return (
    <main>
      <Header>
        <Title
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          data-text="Bruno Netto"
        >
          Bruno Netto
        </Title>
        <JobTitle
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Front End Developer
        </JobTitle>
        <InfoText
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          23 years old • Creative Coder
        </InfoText>

        <BlockArrow
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <ChevronDown size={36} />
        </BlockArrow>
      </Header>

      <AboutSection ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="container"
        >
          <h2>
            <Code color="rgba(92,156,84,1)" size={32} /> Sobre Mim
          </h2>

          <p>
            Sou Bruno Netto, desenvolvedor Front End com mais de 4 anos de
            experiência, especializado em ReactJS, NextJS e Typescript. Minha
            paixão é transformar ideias em experiências digitais únicas, criando
            interfaces incríveis e soluções inovadoras.
          </p>

          <p>
            Sempre em busca de novos desafios e aprimoramento contínuo, também
            adoro compartilhar conhecimento e ajudar outros desenvolvedores a
            crescer. Se você está procurando alguém para levar seu projeto ao
            próximo nível, vamos conversar e fazer acontecer!
          </p>

          <span>
            <Heart color="rgba(92,156,84,1)" size={20} /> Criando experiências
            perfeitas com código
          </span>
        </motion.div>
      </AboutSection>

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
