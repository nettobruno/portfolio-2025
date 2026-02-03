import { Construction } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Projects, GridProjectsSection } from "./projectSection.style";
import TitleSection from "@/ui/components/TitleSection";
import CardProjects from "@/ui/components/CardProjects";
import { projects } from "@/constants/projects";

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "0px 0px -15% 0px",
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.06,
      },
    }),
  };

  return (
    <Projects ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{
          delay: 0.05,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <TitleSection text="Projetos em destaque" />
      </motion.div>

      <GridProjectsSection className="container">
        {projects.map((project, index) => {
          const isUnderConstruction = index > 0;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
              className={isUnderConstruction ? "under-construction" : ""}
            >
              <CardProjects
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                codeUrl={project.codeUrl}
                demoUrl={project.demoUrl}
              />
              {isUnderConstruction && (
                <div className="construction-overlay">
                  <Construction size={24} color="rgba(92,156,84,1)" />
                  <span>Em construção</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </GridProjectsSection>
    </Projects>
  );
};

export default ProjectsSection;
