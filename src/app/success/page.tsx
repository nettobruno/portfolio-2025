"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";
import Link from "next/link";
import Confetti from "react-confetti";
import {
  Container,
  BlockContent,
  TitlePage,
  SubtitlePage,
} from "./success.style";
import Button from "@/ui/components/Button";

export default function Success() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        colors={["#5C9C54", "#FFFFFF", "#90EE90"]}
        numberOfPieces={200}
        recycle={false}
      />

      <BlockContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: 1,
          }}
        >
          <CheckCircle color="rgba(92, 156, 84, 1)" width={96} height={96} />
        </motion.div>

        <TitlePage>Mensagem enviada com sucesso!</TitlePage>
        <SubtitlePage>
          Agradeço pelo seu contato. Em breve, entrarei em contato com você!
        </SubtitlePage>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/">
            <Button>
              <Home />
              De volta para casa
            </Button>
          </Link>
        </motion.div>
      </BlockContent>
    </Container>
  );
}
