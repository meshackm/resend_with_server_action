import Sender from "@/components/client";
import { Resend } from "resend";
import EmailTemplate from "@/components/template";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function Home() {
  async function sendEmail(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    console.log(name);
    try {
     await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["meshackmutinda555@gmail.com"],
        subject: "Hello world",
        react: EmailTemplate({ firstName: name }) as React.ReactElement,
      });


    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sender sendEmail={sendEmail} />
    </main>
  );
}
