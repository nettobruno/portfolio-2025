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
          Sou Bruno Netto, desenvolvedor Front End com mais de 4 anos de
          experiência, especializado em ReactJS, NextJS e TypeScript. Minha
          paixão é transformar ideias em experiências digitais impactantes,
          criando interfaces excepcionais e soluções inovadoras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          Sempre em busca de novos desafios e aprimoramento contínuo, também
          tenho prazer em compartilhar conhecimento e ajudar outros
          desenvolvedores a evoluir. Se você procura alguém para levar seu
          projeto a um novo patamar, vamos conversar e fazer acontecer!
        </motion.p>

        <motion.span
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          <Heart color="rgba(92,156,84,1)" size={20} /> Criando experiências
          perfeitas com código
        </motion.span>
      </motion.div>
    </About>
  );
};

export default AboutSection;
