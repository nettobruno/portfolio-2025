import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import TitleSection from "@/ui/components/TitleSection";
import Input from "@/ui/components/Input";
import Button from "@/ui/components/Button";
import { useInView } from "react-intersection-observer";
import { BlockForm, SubtitleFormSection } from "./formSection.style";
import Loading from "@/ui/components/Loading";

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
      alert("Por favor, preencha todos os campos.");
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
        // Caso contrário, exibe um erro
        alert(`Erro: ${result.error || "Não foi possível enviar o e-mail."}`);
      }
      setLoading(false);
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      alert("Houve um erro ao enviar o e-mail.");
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
    </BlockForm>
  );
};

export default FormSection;
