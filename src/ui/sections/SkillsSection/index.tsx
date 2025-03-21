import { motion } from "framer-motion";
import TitleSection from "@/ui/components/TitleSection";
import CardSkills from "@/ui/components/CardSkills";
import { skills } from "@/constants/skills";
import { useInView } from "react-intersection-observer";
import { Skills, GridSkillsSection } from "./skills.style";
import { useState, useEffect } from "react";

const SkillsSection = () => {
  const [threshold, setThreshold] = useState(0.6);

  useEffect(() => {
    const handleResize = () => {
      setThreshold(window.innerWidth < 750 ? 0.1 : 0.6);
    };

    handleResize(); // Definir o threshold inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    }),
  };

  // console.log("SkillsSection inView:", inView);

  return (
    <Skills ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.1,
          duration: 0.8,
        }}
      >
        <TitleSection text="Habilidades e tecnologias" />
      </motion.div>

      <GridSkillsSection className="container">
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <CardSkills
                icon={<skill.icon color="rgba(92,156,84,1)" size={24} />}
                title={skill.title}
                description={skill.description}
                tags={skill.tags}
              />
            </motion.div>
          );
        })}
      </GridSkillsSection>
    </Skills>
  );
};

export default SkillsSection;
