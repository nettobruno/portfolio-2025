"use client";

import Tag from "@/ui/Tag";
import Button from "@/ui/Button";
import CardSkills from "@/ui/CardSkills";
import CardProjects from "@/ui/CardProjects";
import { Code2 } from "lucide-react";

export default function Home() {
  const handleClick = () => {
    console.log("Botão clicado");
  };

  return (
    <main>
      <Tag text="First Tag" />
      <Button onClick={handleClick}>First Button</Button>
      <CardSkills
        icon={<Code2 color="rgba(92,156,84,1)" size={24} />}
        title="Frontend Development"
        description="Building responsive and interactive user interfaces with modern frameworks and libraries."
        tags={["React", "Typescript", "NextJS"]}
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
