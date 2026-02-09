import { Heart, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { About } from "./about.style";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.35,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <About ref={ref}>
      <motion.div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <Code color="rgba(92,156,84,1)" size={32} /> Sobre Mim
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          Sou desenvolvedor de software com mais de 5 anos de experiência em aplicações web e mobile, com foco em Frontend, arquitetura de UI e Design Systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          Atuei em contextos de escala, ajudando times a manter consistência visual e técnica através de componentes reutilizáveis, design tokens, documentação, testes e práticas de acessibilidade.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          Hoje tenho base forte em React, Next.js e TypeScript e venho ampliando minha atuação para desenvolvimento de aplicações completas e integrações com backend. Gosto de resolver problemas reais de produto com código legível, previsível e fácil de manter.        
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          Se você tem um projeto e quer alguém que una cuidado com UI, consistência e qualidade técnica, vamos conversar.        
        </motion.p>

        <motion.span
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <Heart color="rgba(92,156,84,1)" size={20} />
          Construindo interfaces consistentes, acessíveis e escaláveis.
        </motion.span>
      </motion.div>
    </About>
  );
};

export default AboutSection;
