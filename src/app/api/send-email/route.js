import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Function to generate a professional email template for the user
const generateUserEmailTemplate = (firstName, lastName, companyName, membershipTier) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="background-color: #002147; color: #ffffff; text-align: center; padding: 15px; font-size: 20px; font-weight: bold;">
                    BNG Membership Confirmation
                </td>
            </tr>
        </table>

        <p style="font-size: 16px; color: #333;">Dear ${firstName} ${lastName},</p>
        <p style="font-size: 16px; color: #555;">
            We are delighted to inform you that we have received your application for a <strong>${membershipTier.toUpperCase()}</strong> membership at BNG. 
        </p>

        <h3 style="color: #002147; border-bottom: 2px solid #002147; padding-bottom: 5px;">Application Details:</h3>
        <table style="width: 100%; background: #f9f9f9; padding: 15px; border-radius: 8px;">
            <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
            <tr><td><strong>Company:</strong></td><td>${companyName}</td></tr>
            <tr><td><strong>Membership Tier:</strong></td><td>${membershipTier.toUpperCase()}</td></tr>
        </table>

        <p style="font-size: 16px; color: #555;">
            Our team is reviewing your application, and we will get back to you shortly with further details.
        </p>

        <p style="text-align: center; font-size: 16px; color: #333;">
            <strong>Thank you for choosing BNG.</strong><br>
            <em>Best Regards,<br>BNG Membership Team</em>
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
                <td style="background-color: #002147; color: #ffffff; text-align: center; padding: 10px; font-size: 14px;">
                    &copy; ${new Date().getFullYear()} BNG. All rights reserved.
                </td>
            </tr>
        </table>
    </div>
  `;
};

// Function to generate an email template for the admin with user details
const generateAdminEmailTemplate = (firstName, lastName, companyName, companyEmail, mobileNumber, membershipTier) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #002147;">New Membership Application Received</h2>
        <p style="font-size: 16px; color: #555;">A new membership application has been submitted:</p>

        <h3 style="color: #002147; border-bottom: 2px solid #002147; padding-bottom: 5px;">User Details:</h3>
        <table style="width: 100%; background: #f9f9f9; padding: 15px; border-radius: 8px;">
            <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
            <tr><td><strong>Company:</strong></td><td>${companyName}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${companyEmail}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${mobileNumber}</td></tr>
            <tr><td><strong>Membership Tier:</strong></td><td>${membershipTier.toUpperCase()}</td></tr>
        </table>

        <p style="font-size: 16px; color: #555;">
            Please review the application and take necessary actions.
        </p>

        <p style="text-align: center; font-size: 16px; color: #333;">
            <strong>Best Regards,</strong><br>
            <em>BNG Admin Team</em>
        </p>
    </div>
  `;
};

export async function OPTIONS() {
  return NextResponse.json({}, {
      status: 200,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
  });
}

export async function POST(req) {
  try {
    const { firstName, lastName, companyName, companyEmail, mobileNumber, membershipTier } = await req.json();

    if (!firstName || !lastName || !companyName || !companyEmail || !mobileNumber || !membershipTier) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "connect@bnglogisticsnetwork.com", // Your Gmail email
        pass: "azknterazqwcqvpc", // Your Gmail App Password
      },
    });

    // Send confirmation email to the user
    const userMailOptions = {
      from: `"BNG Membership" <${process.env.EMAIL_USER}>`,
      to: companyEmail,
      subject: 'Membership Application Received',
      html: generateUserEmailTemplate(firstName, lastName, companyName, membershipTier),
    };

    // Send application details to the admin
    const adminMailOptions = {
      from: `"BNG Membership" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Admin Email
      subject: 'New Membership Application',
      html: generateAdminEmailTemplate(firstName, lastName, companyName, companyEmail, mobileNumber, membershipTier),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json({ status: 'success', message: 'Emails sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
