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
        <h2>New Readiness Assessment Submission</h2>
        <hr />
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${dialCode} ${phone}</p>
        
        <h3>Study Plan</h3>
        <p><strong>Study Level:</strong> ${studyLevel}</p>
        <p><strong>Preferred Country:</strong> ${country}</p>
        <p><strong>Subject/Field:</strong> ${subject}</p>
        <p><strong>Primary Goal:</strong> ${goal}</p>

        <h3>Background & Budget</h3>
        ${stream ? `<p><strong>Class 11/12 Stream:</strong> ${stream}</p>` : ""}
        ${scoreType && scoreValue ? `<p><strong>Bachelor's Score:</strong> ${scoreValue} (${scoreType})</p>` : ""}
        ${publications ? `<p><strong>Publications:</strong> ${publications}</p>` : ""}
        <p><strong>Budget Preference:</strong> ${budget}</p>
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
