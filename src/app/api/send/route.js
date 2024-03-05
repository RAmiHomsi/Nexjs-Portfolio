import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Hello world",
      react: <>email body</>,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
