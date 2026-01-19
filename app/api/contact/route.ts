import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, studentGrade, interest, message, inquiryType } = body;

    // Validate required fields
    if (!name || !email || !phone || !studentGrade || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content for academy
    const academyEmailContent = {
      from: process.env.SMTP_EMAIL,
      to: 'Vidvatta.academy@gmail.com',
      subject: `New Inquiry: ${inquiryType} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f1e8;">
          <div style="background-color: #8B0000; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Inquiry Received</h1>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #8B0000; margin-top: 0;">Inquiry Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 40%;">Inquiry Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${inquiryType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Student Grade:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${studentGrade}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Interested In:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${interest}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
              ` : ''}
            </table>
            <div style="margin-top: 30px; padding: 15px; background-color: #f5f1e8; border-radius: 5px;">
              <p style="margin: 0; font-size: 12px; color: #666;">
                This inquiry was submitted through the Vidvatta Academy website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Confirmation email to user
    const userEmailContent = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'Thank you for contacting Vidvatta Academy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f1e8;">
          <div style="background-color: #8B0000; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #333; line-height: 1.6;">
              We have received your inquiry and our team will get back to you within 24 hours.
            </p>
            <div style="margin: 20px 0; padding: 15px; background-color: #FFF8E1; border-left: 4px solid #FFC107; border-radius: 5px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Inquiry Summary:</strong><br>
                Type: ${inquiryType}<br>
                Interest: ${interest}<br>
                Student Grade: ${studentGrade}
              </p>
            </div>
            <p style="color: #333; line-height: 1.6;">
              In the meantime, feel free to reach out to us directly:
            </p>
            <ul style="color: #666; line-height: 1.8;">
              <li><strong>Phone:</strong> +91 78925 05452</li>
              <li><strong>Email:</strong> Vidvatta.academy@gmail.com</li>
              <li><strong>Location:</strong> Arehalli, Uttarahalli, Bangalore</li>
            </ul>
            <p style="color: #333; line-height: 1.6; margin-top: 20px;">
              We look forward to helping your child excel in Abacus and Vedic Mathematics!
            </p>
            <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
              Best regards,<br>
              <strong>Vidvatta Academy Team</strong>
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(academyEmailContent);
    await transporter.sendMail(userEmailContent);

    return NextResponse.json(
      { message: 'Inquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
