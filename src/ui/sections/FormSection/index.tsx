import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Twitter, Github, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";
import TitleSection from "@/ui/components/TitleSection";
import Input from "@/ui/components/Input";
import Button from "@/ui/components/Button";
import { useInView } from "react-intersection-observer";
import { BlockForm, SubtitleFormSection, ContainerSocialMedia, ItemSocialMedia } from "./formSection.style";
import Loading from "@/ui/components/Loading";
import { toast } from "react-toastify";

const FormSection = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputMessage, setInputMessage] = useState<string>("");
  const router = useRouter();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Verifique se os campos obrigatórios não estão vazios
    if (!inputName || !inputEmail || !inputMessage) {
      toast.error("Por favor, preencha todos os campos", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });

      setLoading(false);
      return;
    }

    try {
      // Envia a requisição para a API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputName,
          email: inputEmail,
          message: inputMessage,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/success");
      } else {
        toast.error(
          "Não foi possível enviar o e-mail. Por favor, tente novamente mais tarde!",
          {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
          }
        );
      }
      setLoading(false);
    } catch (error) {
      toast.error(
        "Não foi possível enviar o e-mail. Por favor, tente novamente mais tarde!",
        {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
        }
      );
      setLoading(false);
    }
  };

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
    <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleForm(e)}>
      <Send size={20} /> Enviar Mensagem
    </Button>,
  ];

  return (
    <BlockForm ref={ref}>
      <Loading loading={loading} />
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

      <ContainerSocialMedia
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}>
        <ItemSocialMedia href="https://www.instagram.com/brunonetto_dev/" target="_blank">
          <Instagram size={20} />
        </ItemSocialMedia>

        <ItemSocialMedia href="https://x.com/brunonetto_dev" target="_blank">
          <Twitter size={20} />
        </ItemSocialMedia>

        <ItemSocialMedia href="https://github.com/nettobruno" target="_blank">
          <Github size={20} />
        </ItemSocialMedia>

        <ItemSocialMedia href="https://www.linkedin.com/in/bruno-netto-77434b187/" target="_blank">
          <Linkedin size={20} />
        </ItemSocialMedia>
      </ContainerSocialMedia>
    </BlockForm>
  );
};

export default FormSection;
