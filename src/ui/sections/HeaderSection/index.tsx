import { ChevronDown } from "lucide-react";
import { Header, Title, JobTitle, InfoText, BlockArrow } from "./header.style";

const HeaderSection = () => {
  return (
    <Header>
      <Title
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        data-text="Bruno Netto"
      >
        Bruno Netto
      </Title>
      <JobTitle
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        Software Developer
      </JobTitle>
      <InfoText
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        React • Next.js • Design Systems • Ruby on Rails • APIs
      </InfoText>

      <BlockArrow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        <ChevronDown size={36} />
      </BlockArrow>
    </Header>
  );
};

export default HeaderSection;
