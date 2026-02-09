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
      "Desenvolvimento de interfaces com foco em performance, acessibilidade e manutenibilidade. Do componente ao fluxo completo.",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "Design Systems",
    icon: Layers,
    description:
      "Criação e evolução de componentes reutilizáveis, tokens e documentação para padronizar UI em times e produtos.",
    tags: ["Componentes", "Tokens"],
  },
  {
    title: "Integração Backend",
    icon: Plug,
    description:
      "Integração de frontends com APIs e serviços, garantindo fluxos consistentes, tratamento de erros e boa experiência de uso.",
    tags: ["REST", "JSON"],
  },
  {
    title: "Versionamento",
    icon: GitPullRequest,
    description:
      "Rotina com Git e colaboração via PRs, code review e padrões de qualidade para reduzir fricção no time.",
    tags: ["GIT", "GitHub"],
  },
  {
    title: "Estilização",
    icon: Droplet,
    description:
      "Estilização escalável com Tailwind e Styled Components, com atenção a responsividade, consistência visual e DX.",
    tags: ["Styled Components", "Tailwind"],
  },
  {
    title: "Acessibilidade",
    icon: MonitorSmartphone,
    description: "Interfaces adaptáveis e inclusivas seguindo boas práticas e diretrizes, com foco em uso real.",
    tags: ["WCAG", "Acessibilidade"],
  },
];
