import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import TitleSection from "@/ui/components/TitleSection";
import { TrustedBy } from "./trustedBySection.style";
import { useState, useEffect, useRef } from "react";

const logos = [
  { src: "/images/locomotiva.svg", alt: "Locomotiva" },
  { src: "/images/hexalab.svg", alt: "Hexalab" },
  { src: "/images/coobrastur.svg", alt: "Coobrastur" },
  { src: "/images/mirante.svg", alt: "Mirante" },
  { src: "/images/uol.svg", alt: "UOL" },
  { src: "/images/gb.svg", alt: "GB" },
  { src: "/images/pixta.svg", alt: "Pixta" },
  { src: "/images/o2Filmes.svg", alt: "O2 Filmes" },
  { src: "/images/teksto.svg", alt: "Teksto" },
];

const carouselLogos = [...logos, ...logos];

const listVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const TrustedBySection = () => {
  const [threshold, setThreshold] = useState(0.6);
  const [mounted, setMounted] = useState(false);
  const autoScroll = useRef(
    AutoScroll({
      speed: 1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      playOnInit: true,
    })
  );
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoScroll.current]
  );

  useEffect(() => {
    const handleResize = () => {
      setThreshold(window.innerWidth < 750 ? 0.2 : 0.35);
    };

    handleResize(); // Definir o threshold inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: "0px 0px -15% 0px",
  });
  const shouldAnimate = mounted && inView;

  return (
    <TrustedBy ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{
          delay: 0.05,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <TitleSection text="Marcas que trabalhei" />
      </motion.div>

      <motion.div
        variants={listVariants}
        initial="hidden"
        animate={shouldAnimate ? "show" : "hidden"}
      >
        <div className="embla" aria-label="Marcas com as quais trabalhei">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container" role="list">
              {carouselLogos.map((logo, index) => (
                <motion.div
                  className="embla__slide"
                  role="listitem"
                  key={`${logo.src}-${index}`}
                  variants={itemVariants}
                >
                  <Image
                    src={logo.src}
                    width={190}
                    height={120}
                    alt={index < logos.length ? logo.alt : ""}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </TrustedBy>
  );
};

export default TrustedBySection;
