import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
    const data = await request.json();
    const parsedData = JSON.parse(JSON.stringify(data));
    console.log(data);

    try {
      const data = await resend.contacts.create({
        email: parsedData.email,
        unsubscribed: false,
        audience_id: "9f846b2e-dedd-49d0-a6fa-78f2b7466118",
      });
      return new Response(JSON.stringify(data));
    } catch (error) {
        return new Response(JSON.stringify(error));
    }
  }
  