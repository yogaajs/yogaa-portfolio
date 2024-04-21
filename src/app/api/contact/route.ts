//  Imports
// ===========================================================

import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';


//  Constants
// ==========================================================

export async function POST(request: NextRequest) {
  const data = await request.json();

  const transport = nodemailer.createTransport({
    host: "smtp.mail.ovh.net",
    port: 465,
    secure: true,
    auth:{
      user: process.env.YOGAA_EMAIL,
      pass: process.env.YOGAA_EMAIL_PASSWORD,
    }
  });

  const mailOptions: Mail.Options = {
    from: `Yogaa <${process.env.YOGAA_EMAIL}>`,
    to: 'dev.yogaa@gmail.com',
    subject: `Yogaa.dev - contact`,
    html: data.join(""),
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: any) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}