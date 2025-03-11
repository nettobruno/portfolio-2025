import {
  Code2,
  Layers,
  CheckCircle,
  GitBranch,
  Clipboard,
  Plug,
  GitPullRequest,
  Droplet,
  MonitorSmartphone,
} from "lucide-react";

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    description:
      "Criação de interfaces responsivas, interativas e de alta performance.",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "Design Systems",
    icon: Layers,
    description:
      "Criação de Design Systems para garantir consistência e escalabilidade.",
    tags: ["Componentes", "Tokens"],
  },
  {
    title: "Qualidade de Código",
    icon: CheckCircle,
    description:
      "Garantia de código limpo, escalável e de fácil manutenção com boas práticas e testes.",
    tags: ["Testes", "Refatoração"],
  },
  {
    title: "Integração Backend",
    icon: Plug,
    description:
      "Conexão de frontends a APIs, garantindo troca eficiente de dados e experiência fluida.",
    tags: ["REST", "JSON"],
  },
  {
    title: "CI/CD",
    icon: GitBranch,
    description:
      "Automatização de integração e entrega, garantindo deploys rápidos e consistentes.",
    tags: ["Deploy", "Github Actions"],
  },
  {
    title: "Gestão de Projetos",
    icon: Clipboard,
    description:
      "Execução de projetos frontend, garantindo alinhamento, prazos e qualidade.",
    tags: ["Scrum", "Kanban", "Gestão"],
  },
  {
    title: "Versionamento",
    icon: GitPullRequest,
    description:
      "Gerenciamento de código com Git e GitHub, garantindo controle e colaboração.",
    tags: ["GIT", "GitHub"],
  },
  {
    title: "Estilização",
    icon: Droplet,
    description:
      "Uso de técnicas avançadas de CSS para criar layouts flexíveis e escaláveis.",
    tags: ["Styled Components", "Tailwind"],
  },
  {
    title: "Web Responsiva e Acessibilidade",
    icon: MonitorSmartphone,
    description: "Desenvolvimento de interfaces adaptáveis e inclusivas.",
    tags: ["WCAG", "Acessibilidade"],
  },
];
