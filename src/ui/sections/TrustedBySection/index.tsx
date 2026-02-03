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

const TrustedBySection = () => {
  const [threshold, setThreshold] = useState(0.6);
  const [mounted, setMounted] = useState(false);
  const autoScroll = useRef(
    AutoScroll({
      speed: 1.2,
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
      setThreshold(window.innerWidth < 750 ? 0.1 : 0.6);
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
  });
  const shouldAnimate = mounted && inView;

  return (
    <TrustedBy ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
        }}
      >
        <TitleSection text="Marcas que trabalhei" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="embla" aria-label="Marcas com as quais trabalhei">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container" role="list">
              {carouselLogos.map((logo, index) => (
                <div className="embla__slide" role="listitem" key={`${logo.src}-${index}`}>
                  <Image
                    src={logo.src}
                    width={190}
                    height={120}
                    alt={index < logos.length ? logo.alt : ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </TrustedBy>
  );
};

export default TrustedBySection;
