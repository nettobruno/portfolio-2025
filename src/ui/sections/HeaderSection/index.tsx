import { ChevronDown } from "lucide-react";
import { Header, Title, JobTitle, InfoText, BlockArrow } from "./header.style";

const HeaderSection = () => {
  return (
    <Header>
      <Title
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        data-text="Bruno Netto"
      >
        Bruno Netto
      </Title>
      <JobTitle
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Front End Developer
      </JobTitle>
      <InfoText
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        24 years old • Creative Coder
      </InfoText>

      <BlockArrow
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <ChevronDown size={36} />
      </BlockArrow>
    </Header>
  );
};

export default HeaderSection;
