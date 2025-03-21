import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TitleSection from "@/ui/components/TitleSection";
import { TrustedBy } from "./trustedBySection.style";
import { useState, useEffect } from "react";

const TrustedBySection = () => {
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

  return (
    <TrustedBy ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.1,
          duration: 0.8,
        }}
      >
        <TitleSection text="Marcas que trabalhei" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Image src="/images/locomotiva.svg" width={150} height={100} alt="" />

        <Image src="/images/hexalab.svg" width={150} height={100} alt="" />

        <Image src="/images/coobrastur.svg" width={150} height={100} alt="" />

        <Image src="/images/mirante.svg" width={150} height={100} alt="" />

        <Image src="/images/uol.svg" width={150} height={100} alt="" />

        <Image src="/images/gb.svg" width={150} height={100} alt="" />
      </motion.div>
    </TrustedBy>
  );
};

export default TrustedBySection;
