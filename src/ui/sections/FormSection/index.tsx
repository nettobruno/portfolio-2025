import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import TitleSection from "@/ui/components/TitleSection";
import Input from "@/ui/components/Input";
import Button from "@/ui/components/Button";
import { useInView } from "react-intersection-observer";
import { Form, SubtitleFormSection } from "./formSection.style";

const FormSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const handleForm = () => {
    console.log(inputName, inputEmail, inputMessage);
  };

  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputMessage, setInputMessage] = useState<string>("");

  const items = [
    <TitleSection text="Vamos nos conectar" />,
    <SubtitleFormSection>
      Tem um projeto em mente? Eu adoraria ouvir sobre isso.
    </SubtitleFormSection>,
    <Input
      name="name"
      placeholder="Nome"
      value={inputName}
      onChange={(e) => setInputName(e.target.value)}
    />,
    <Input
      name="email"
      placeholder="E-mail"
      value={inputEmail}
      onChange={(e) => setInputEmail(e.target.value)}
    />,
    <Input
      name="message"
      placeholder="Mensagem"
      value={inputMessage}
      isTextarea
      onChange={(e) => setInputMessage(e.target.value)}
    />,
    <Button onClick={handleForm}>
      <Send size={20} /> Enviar Mensagem
    </Button>,
  ];

  return (
    <Form ref={ref}>
      <form>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
            }}
          >
            {item}
          </motion.div>
        ))}
      </form>
    </Form>
  );
};

export default FormSection;
