"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

async function confirm({ id }: { id: string }) {
  const data = await resend.contacts.get({
    id: id,
    audience_id: "9f846b2e-dedd-49d0-a6fa-78f2b7466118",
  });
  console.log(data);
  return data;
}

export async function send(formData: FormData) {
  const email = formData.get("email") as string;

  try {
    const data = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audience_id: "9f846b2e-dedd-49d0-a6fa-78f2b7466118",
    });
  } catch (error) {}
}
