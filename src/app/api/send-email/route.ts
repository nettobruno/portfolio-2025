import { EmailTemplate } from "@/ui/templates/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const emailContent = EmailTemplate({
      name,
      email,
      message,
    }) as React.ReactElement;

    const { data, error } = await resend.emails.send({
      from: "delivered@resend.dev",
      to: "brunonettomac@gmail.com",
      subject: "Contato portfólio",
      react: emailContent,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: error || "Erro inesperado" },
      { status: 500 }
    );
  }
}
