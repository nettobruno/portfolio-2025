import { motion } from "framer-motion";
import TitleSection from "@/ui/components/TitleSection";
import CardSkills from "@/ui/components/CardSkills";
import { skills } from "@/constants/skills";
import { useInView } from "react-intersection-observer";
import { Skills, GridSkillsSection } from "./skills.style";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
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

  return (
    <Skills ref={ref}>
      <TitleSection text="Habilidades e Tecnologias" />

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
