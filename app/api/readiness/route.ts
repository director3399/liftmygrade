import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      dialCode,
      phone,
      studyLevel,
      country,
      subject,
      goal,
      stream,
      scoreType,
      scoreValue,
      publications,
      budget,
    } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    const { success, data, error } = await sendEmail({
      to: "naitikkumar2408@gmail.com",
      subject: `New Readiness Report Request from ${fullName}`,
      html: `
        <div style="font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: 6px solid #2563eb; border-bottom: 6px solid #2563eb; padding: 0;">
          
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 30px 40px 20px; border-bottom: 1px solid #f3f4f6;">
            <tr>
              <td align="left" valign="middle">
                <img src="https://raw.githubusercontent.com/Naitik2408/liftmygrade/main/public/logo-3.png" alt="LiftmyGrade" width="140" style="display: block; max-width: 140px; height: auto;" />
              </td>
              <td align="right" valign="middle" style="font-size: 12px; color: #6b7280; line-height: 1.6;">
                <strong style="color: #111827;">www.liftmygrade.com</strong><br />
                Automated Notification
              </td>
            </tr>
          </table>

          <div style="padding: 40px;">
            <h1 style="margin: 0 0 25px; font-size: 22px; color: #111827; letter-spacing: -0.5px;">New Readiness Assessment Submission</h1>
            
            <p style="margin: 0 0 30px; font-size: 15px; color: #4b5563; line-height: 1.6;">
              A new readiness assessment has been submitted by <strong>${fullName}</strong>. Please review the profile details below.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 40px;">
              <tr>
                <td align="left">
                  <a href="tel:${dialCode}${phone.replace(/\D/g, '')}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; margin-right: 10px;">📞 Call Lead</a>
                  <a href="mailto:${email}" style="display: inline-block; background-color: #f3f4f6; color: #111827; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600;">✉️ Email Lead</a>
                </td>
              </tr>
            </table>

            <h3 style="margin: 0 0 15px; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Personal Details</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; font-size: 15px;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px;"><strong>Full Name</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${fullName}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Email</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Phone</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${dialCode} ${phone}</td></tr>
            </table>

            <h3 style="margin: 0 0 15px; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Study Plan</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; font-size: 15px;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px;"><strong>Study Level</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${studyLevel}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Target Country</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${country}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Subject/Field</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${subject}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Primary Goal</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${goal}</td></tr>
            </table>

            <h3 style="margin: 0 0 15px; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Background & Budget</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 15px;">
              ${stream ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px;"><strong>Class 11/12 Stream</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${stream}</td></tr>` : ""}
              ${scoreType && scoreValue ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px;"><strong>Bachelor's Score</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${scoreValue} (${scoreType})</td></tr>` : ""}
              ${publications ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px;"><strong>Publications</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${publications}</td></tr>` : ""}
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px;"><strong>Budget Preference</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${budget}</td></tr>
            </table>

            <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #f3f4f6;">
              <p style="margin: 0; font-size: 14px; color: #4b5563;">Best regards,</p>
              <img src="https://raw.githubusercontent.com/Naitik2408/liftmygrade/main/public/logo-3.png" alt="LiftmyGrade Signature" width="100" style="display: block; margin: 15px 0 5px;" />
              <p style="margin: 0; font-size: 12px; color: #9ca3af; font-weight: 500;">Automated Dispatch System</p>
            </div>
          </div>
        </div>
      `,
    });

    if (!success) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Readiness API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
