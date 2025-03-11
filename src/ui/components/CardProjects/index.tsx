import React from "react";
import { CardProjectsProps } from "./cardProjects.types";
import {
  StyledCardProjects,
  Content,
  Title,
  Description,
  BlockTags,
  BlockUrls,
} from "./cardProjects.style";
import Tag from "../Tag";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const CardProjects: React.FC<CardProjectsProps> = ({
  image,
  title,
  description,
  tags,
  codeUrl,
  demoUrl,
}) => {
  return (
    <StyledCardProjects>
      <Image src={image} alt="texto alternativo" width={360} height={190} />

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <BlockTags>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </BlockTags>

        <BlockUrls>
          <Link href={codeUrl}>
            <Github />
            Code
          </Link>

          <Link href={demoUrl}>
            <ExternalLink /> Live Demo
          </Link>
        </BlockUrls>
      </Content>
    </StyledCardProjects>
  );
};

export default CardProjects;
