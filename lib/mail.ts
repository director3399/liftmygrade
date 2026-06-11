import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

interface SendMailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, text, replyTo }: SendMailOptions) {
  try {
    // Using onboarding@resend.dev allows testing to the verified email address
    const { data, error } = await resend.emails.send({
      from: "LiftmyGrade Website <onboarding@resend.dev>",
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text: text || "",
      replyTo: replyTo,
    });

    if (error) {
      console.error("Resend API Error inside mail service:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Internal Error inside mail service:", error);
    return { success: false, error: error?.message || "Unknown error" };
  }
}
