import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Projects, GridProjectsSection } from "./projectSection.style";
import TitleSection from "@/ui/components/TitleSection";
import CardProjects from "@/ui/components/CardProjects";
import { projects } from "@/constants/projects";

const ProjectsSection = () => {
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
    <Projects ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.1,
          duration: 0.8,
        }}
      >
        <TitleSection text="Projetos em destaque" />
      </motion.div>

      <GridProjectsSection className="container">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <CardProjects
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                codeUrl={project.codeUrl}
                demoUrl={project.demoUrl}
              />
            </motion.div>
          );
        })}
      </GridProjectsSection>
    </Projects>
  );
};

export default ProjectsSection;
