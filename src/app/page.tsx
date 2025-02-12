"use client"

import Tag from "@/ui/Tag";
import Button from "@/ui/Button";

export default function Home() {
  const handleClick = () => {
    console.log('Botão clicado')
  }

  return (
    <main>
      <Tag text="First Tag"/>
      <Button onClick={handleClick}>First Button</Button>
    </main>
  );
}
