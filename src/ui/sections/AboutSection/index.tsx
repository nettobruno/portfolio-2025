import { Heart, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { About } from "./about.style";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <About ref={ref}>
      <motion.div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Code color="rgba(92,156,84,1)" size={32} /> Sobre Mim
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Sou Bruno Netto, desenvolvedor Front End com mais de 4 anos de
          experiência, especializado em ReactJS, NextJS e TypeScript. Minha
          paixão é transformar ideias em experiências digitais impactantes,
          criando interfaces excepcionais e soluções inovadoras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Sempre em busca de novos desafios e aprimoramento contínuo, também
          tenho prazer em compartilhar conhecimento e ajudar outros
          desenvolvedores a evoluir. Se você procura alguém para levar seu
          projeto a um novo patamar, vamos conversar e fazer acontecer!
        </motion.p>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <Heart color="rgba(92,156,84,1)" size={20} /> Criando experiências
          perfeitas com código
        </motion.span>
      </motion.div>
    </About>
  );
};

export default AboutSection;
