"use server";

import {NextResponse} from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("HubSpot Portal ID:", process.env.HUBSPOT_PORTAL_ID);
  console.log("HubSpot Form GUID:", process.env.HUBSPOT_FORM_GUID);
  console.log(
    "Zoho Access Token:",
    process.env.ZOHO_ACCESS_TOKEN?.slice(0, 10) + "..."
  );
  console.log("Zoho Form Link Name:", process.env.ZOHO_FORM_LINK_NAME);

  if (!process.env.HUBSPOT_PORTAL_ID || !process.env.HUBSPOT_FORM_GUID) {
    console.error("❌ Missing HubSpot ENV variables");
  }

  if (!process.env.ZOHO_ACCESS_TOKEN || !process.env.ZOHO_FORM_LINK_NAME) {
    console.error("❌ Missing Zoho ENV variables");
  }

  const {firstName, lastName, email, phone, education, experience, motivation} =
    body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !education ||
    !experience ||
    !motivation
  ) {
    return NextResponse.json(
      {success: false, message: "Missing required fields"},
      {status: 400}
    );
  }

  let hubspotError = null;
  let zohoError = null;

  // Send to HubSpot
  try {
    console.log("📤 Submitting to HubSpot with:", {
      portalId: process.env.HUBSPOT_PORTAL_ID,
      formId: process.env.HUBSPOT_FORM_GUID,
      payload: {
        firstname: firstName,
        lastname: lastName,
        email,
        phone,
        education,
        experience,
        motivation,
      },
    });

    const hubspotRes = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_GUID}`,
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          fields: [
            {name: "firstname", value: firstName},
            {name: "lastname", value: lastName},
            {name: "email", value: email},
            {name: "phone", value: phone},
            {name: "education_level", value: education},
            {name: "programming_experience", value: experience},
            {name: "motivation_statement", value: motivation},
          ],
          context: {
            pageUri: "https://unity.londonacademy.om",
            pageName: "Unity Game Development Application",
          },
        }),
      }
    );

    if (!hubspotRes.ok) {
      const error = await hubspotRes.text();
      console.error("HubSpot Error:", error);
      hubspotError = error;
    }
  } catch (error) {
    console.error("HubSpot Submission Error:", error);
    hubspotError = error;
  }

  // Send to Zoho
  try {
    const zohoRes = await fetch(
      `https://recruit.zohoapis.com/recruit/v2/Candidates`,
      {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              First_Name: firstName,
              Last_Name: lastName,
              Email: email,
              Phone: phone,
              Education: education,
              Experience_Level: experience,
              Motivation: motivation,
            },
          ],
        }),
      }
    );

    if (!zohoRes.ok) {
      const error = await zohoRes.text();
      console.error("Zoho Error:", error);
      zohoError = error;
    }
  } catch (error) {
    console.error("Zoho Submission Error:", error);
    zohoError = error;
  }

  // Return appropriate response
  if (!hubspotError && !zohoError) {
    return NextResponse.json({success: true});
  }

  return NextResponse.json(
    {
      success: false,
      message: `Submission completed with partial errors.`,
      hubspotError: hubspotError || null,
      zohoError: zohoError || null,
    },
    {status: 207} // Multi-Status
  );
}
