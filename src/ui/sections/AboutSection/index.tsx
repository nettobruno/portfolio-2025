import { Heart, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { About } from "./about.style";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .6,
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
          experiência, especializado em ReactJS, NextJS e Typescript. Minha
          paixão é transformar ideias em experiências digitais únicas, criando
          interfaces incríveis e soluções inovadoras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Sempre em busca de novos desafios e aprimoramento contínuo, também
          adoro compartilhar conhecimento e ajudar outros desenvolvedores a
          crescer. Se você está procurando alguém para levar seu projeto ao
          próximo nível, vamos conversar e fazer acontecer!
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
