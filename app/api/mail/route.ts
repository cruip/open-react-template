import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    
    const { name, email, projectTitle, projectDetails, budget, deadline } =  await req.json()

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
    });

    // Set up email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "qmssnSPM@gmail.com", // Your email address
        cc: "elmssilha.brahim@gmail.com",
        subject: `New Project Request: ${projectTitle}`,
        text: `Name: ${name}\nEmail: ${email}\nProject Details: ${projectDetails}\nBudget: ${budget}\nDeadline: ${deadline}`,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        new Response('Hello, Next.js!')
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.error();
    }
}