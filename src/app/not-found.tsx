"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";
import {
  Container,
  Content,
  MotionSpan,
  MotionRocket,
  MotionRocketWrapper,
  StyledRocket,
  TitlePage,
  SubtitlePage,
  StyledStars,
} from "./notFound.style";
import Button from "@/ui/components/Button";

export default function NotFound() {
  return (
    <Container>
      <Content>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "0.25rem",
              height: "0.25rem",
              backgroundColor: "white",
              borderRadius: "9999px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              pointerEvents: "none",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </Content>

      <div
        style={{
          maxWidth: "42rem",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <motion.div
            style={{
              position: "relative",
              marginBottom: "2rem",
              fontSize: "10rem",
              fontWeight: "bold",
              lineHeight: 1,
              textShadow: "0 0 40px rgba(92,156,84,0.5)",
            }}
          >
            <MotionSpan
              animate={{
                x: [-10, 10, -10],
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              404
            </MotionSpan>
            <motion.span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                color: "rgba(92, 156, 84, 1)",
              }}
              animate={{
                x: [10, -10, 10],
                y: [5, -5, 5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              404
            </motion.span>
          </motion.div>

          <MotionRocket
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <MotionRocketWrapper>
              <StyledRocket />
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <StyledStars />
              </motion.div>
            </MotionRocketWrapper>
          </MotionRocket>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <TitlePage>Opa, temos um problema!</TitlePage>
            <SubtitlePage>
              A página que você está procurando foi para o espaço profundo.
              Vamos levá-lo de volta para um território mais familiar.
            </SubtitlePage>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <Button>
                <Home />
                De volta para casa
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}
