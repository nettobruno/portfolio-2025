"use client";

import { useState } from "react";
import Tag from "@/ui/Tag";
import Button from "@/ui/Button";
import CardSkills from "@/ui/CardSkills";
import CardProjects from "@/ui/CardProjects";
import Input from "@/ui/Input";
import { ChevronDown, Code, Heart } from "lucide-react";
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
} from "./page.style";
import { skills } from "@/constants/skills";

export default function Home() {
  const handleClick = () => {
    console.log("Botão clicado");
  };

  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <main>
      <Header>
        <Title data-text="Bruno Netto">Bruno Netto</Title>
        <JobTitle>Front End Developer</JobTitle>
        <InfoText>23 years old • Creative Coder</InfoText>

        <BlockArrow>
          <ChevronDown size={36} />
        </BlockArrow>
      </Header>

      <AboutSection>
        <div className="container">
          <h2>
            <Code color="rgba(92,156,84,1)" size={32} /> Sobre Mim
          </h2>
          <p>
            Minha jornada pela codificação começou com o fascínio pela criação
            de experiências interativas na web. O que começou como curiosidade
            rapidamente evoluiu para uma paixão por criar interfaces bonitas e
            funcionais com as quais os usuários adoram interagir.
          </p>
          <p>
            Como desenvolvedor front-end, combino conhecimento técnico com
            solução criativa de problemas para construir aplicações web
            modernas. Estou constantemente explorando novas tecnologias e
            ampliando os limites do que é possível no desenvolvimento web.
          </p>

          <span>
            <Heart color="rgba(92,156,84,1)" size={20} /> Criando experiências
            perfeitas com código
          </span>
        </div>
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

      <Tag text="First Tag" />
      <Button onClick={handleClick}>First Button</Button>
      <Input
        placeholder="Digite algo..."
        value={inputValue}
        onChange={handleChange}
      />

      <CardProjects
        image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
        title="Frontend Development"
        description="Building responsive and interactive user interfaces with modern frameworks and libraries."
        tags={["React", "Typescript", "NextJS"]}
        codeUrl="#"
        demoUrl="#"
      />
    </main>
  );
}
