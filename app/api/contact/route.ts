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
      status,
      industry,
      services,
      resumeType,
      resumeTarget,
      liUrl,
      liGoal,
      sopOrg,
      sopPurpose,
      grantBody,
      grantOrg,
      prDeliverables,
      brief,
      timeline
    } = body;

    if (!fullName || !phone || !services || services.length === 0 || !brief) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const { success, data, error } = await sendEmail({
      to: "info@liftmygrade.com",
      subject: `New Career Consultation from ${fullName}`,
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
            <h1 style="margin: 0 0 25px; font-size: 22px; color: #111827; letter-spacing: -0.5px;">New Career Consultation Request</h1>
            
            <p style="margin: 0 0 30px; font-size: 15px; color: #4b5563; line-height: 1.6;">
              A new career consultation request has been submitted by <strong>${fullName}</strong>. Please review the details below.
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

            <h3 style="margin: 0 0 15px; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Client Background</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; font-size: 15px;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px;"><strong>Status</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${status}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Industry</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${industry || "Not provided"}</td></tr>
            </table>

            <h3 style="margin: 0 0 15px; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Requested Services</h3>
            <div style="background-color: #f8fafc; padding: 16px 20px; border-radius: 8px; margin-bottom: 25px; color: #111827; font-size: 15px; border: 1px solid #e2e8f0; font-weight: 500;">
              ${services.join(", ")}
            </div>

            ${services.includes("Résumé & CV") ? `
              <div style="margin-bottom: 20px;">
                <strong style="color: #111827; font-size: 15px; display: block; margin-bottom: 6px;">Résumé Details</strong>
                <p style="margin: 0 0 4px; font-size: 14px; color: #4b5563;">Type: <span style="color: #111827;">${resumeType || "N/A"}</span></p>
                <p style="margin: 0; font-size: 14px; color: #4b5563;">Target Role: <span style="color: #111827;">${resumeTarget || "N/A"}</span></p>
              </div>
            ` : ""}

            ${services.includes("LinkedIn Profile") ? `
              <div style="margin-bottom: 20px;">
                <strong style="color: #111827; font-size: 15px; display: block; margin-bottom: 6px;">LinkedIn Details</strong>
                <p style="margin: 0 0 4px; font-size: 14px; color: #4b5563;">URL: <span style="color: #111827;">${liUrl || "N/A"}</span></p>
                <p style="margin: 0; font-size: 14px; color: #4b5563;">Goal: <span style="color: #111827;">${liGoal || "N/A"}</span></p>
              </div>
            ` : ""}

            ${services.includes("Company SOP") ? `
              <div style="margin-bottom: 20px;">
                <strong style="color: #111827; font-size: 15px; display: block; margin-bottom: 6px;">SOP Details</strong>
                <p style="margin: 0 0 4px; font-size: 14px; color: #4b5563;">Organization: <span style="color: #111827;">${sopOrg || "N/A"}</span></p>
                <p style="margin: 0; font-size: 14px; color: #4b5563;">Purpose: <span style="color: #111827;">${sopPurpose || "N/A"}</span></p>
              </div>
            ` : ""}

            ${services.includes("Grant Writing") ? `
              <div style="margin-bottom: 20px;">
                <strong style="color: #111827; font-size: 15px; display: block; margin-bottom: 6px;">Grant Details</strong>
                <p style="margin: 0 0 4px; font-size: 14px; color: #4b5563;">Funding Body: <span style="color: #111827;">${grantBody || "N/A"}</span></p>
                <p style="margin: 0; font-size: 14px; color: #4b5563;">Applying As: <span style="color: #111827;">${grantOrg || "N/A"}</span></p>
              </div>
            ` : ""}

            ${services.includes("PR Writing") ? `
              <div style="margin-bottom: 20px;">
                <strong style="color: #111827; font-size: 15px; display: block; margin-bottom: 6px;">PR Deliverables</strong>
                <p style="margin: 0; font-size: 14px; color: #111827;">${prDeliverables?.length > 0 ? prDeliverables.join(", ") : "None selected"}</p>
              </div>
            ` : ""}

            <h3 style="margin: 30px 0 15px; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Project Goal & Timeline</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 15px;">
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 140px; vertical-align: top;"><strong>Goal</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${brief}</td></tr>
              <tr><td style="padding: 12px 0; color: #6b7280; vertical-align: top;"><strong>Timeline</strong></td><td style="padding: 12px 0; color: #111827;">${timeline || "Not specified"}</td></tr>
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

    // Send confirmation email to the user
    await sendEmail({
      to: email,
      subject: "Application Received - LiftmyGrade",
      html: `
        <div style="font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
          <img src="https://raw.githubusercontent.com/Naitik2408/liftmygrade/main/public/logo-3.png" alt="LiftmyGrade" width="150" style="display: block; margin-bottom: 30px;" />
          <h2 style="color: #111827; font-size: 24px; margin-bottom: 20px;">We've received your application!</h2>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Hi ${fullName.split(" ")[0]},
          </p>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to LiftmyGrade. We have successfully received your career consultation request.
          </p>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Our expert mentors are reviewing your profile and will get back to you within <strong>48 hours</strong> with personalized guidance and next steps.
          </p>
          <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 5px;">Best regards,</p>
            <p style="color: #111827; font-size: 16px; font-weight: 600; margin: 0;">The LiftmyGrade Team</p>
            <p style="color: #2563eb; font-size: 14px; margin-top: 5px;"><a href="https://www.liftmygrade.com" style="color: #2563eb; text-decoration: none;">www.liftmygrade.com</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
