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
      to: "naitikkumar2408@gmail.com",
      subject: `New Career Consultation from ${fullName}`,
      html: `
        <h2>New Career Consultation Request</h2>
        <hr />
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${dialCode} ${phone}</p>
        
        <h3>About The Client</h3>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Industry:</strong> ${industry || "Not provided"}</p>
        
        <h3>Requested Services</h3>
        <p><strong>Selected:</strong> ${services.join(", ")}</p>
        
        ${services.includes("Résumé & CV") ? `
          <h4>Résumé Details</h4>
          <p><strong>Type:</strong> ${resumeType || "N/A"}</p>
          <p><strong>Target Role:</strong> ${resumeTarget || "N/A"}</p>
        ` : ""}
        
        ${services.includes("LinkedIn Profile") ? `
          <h4>LinkedIn Details</h4>
          <p><strong>URL:</strong> ${liUrl || "N/A"}</p>
          <p><strong>Goal:</strong> ${liGoal || "N/A"}</p>
        ` : ""}
        
        ${services.includes("Company SOP") ? `
          <h4>SOP Details</h4>
          <p><strong>Organization:</strong> ${sopOrg || "N/A"}</p>
          <p><strong>Purpose:</strong> ${sopPurpose || "N/A"}</p>
        ` : ""}
        
        ${services.includes("Grant Writing") ? `
          <h4>Grant Details</h4>
          <p><strong>Funding Body:</strong> ${grantBody || "N/A"}</p>
          <p><strong>Applying As:</strong> ${grantOrg || "N/A"}</p>
        ` : ""}
        
        ${services.includes("PR Writing") ? `
          <h4>PR Deliverables</h4>
          <p>${prDeliverables?.length > 0 ? prDeliverables.join(", ") : "None selected"}</p>
        ` : ""}

        <h3>Project Goal & Timeline</h3>
        <p><strong>Goal:</strong> ${brief}</p>
        <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
      `,
    });

    if (!success) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
