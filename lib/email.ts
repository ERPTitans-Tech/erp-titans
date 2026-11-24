import nodemailer from 'nodemailer';

// Cache the transporter so it's not recreated on every request
type Transporter = ReturnType<typeof nodemailer.createTransport>;
let transporter: Transporter | null = null;

const getTransporter = () => {
  if (transporter) return transporter;

  const user = process.env.OUTLOOK_EMAIL;
  const pass = process.env.OUTLOOK_PASSWORD;

  if (!user || !pass) {
    throw new Error("Missing OUTLOOK_EMAIL or OUTLOOK_PASSWORD in environment variables.");
  }

  transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: user,
      pass: pass
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  return transporter;
};

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
  attachments
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: { name: string; contentBytes: string; contentType: string }[];
}) {
  const user = process.env.OUTLOOK_EMAIL;

  if (!user) {
    throw new Error("Missing OUTLOOK_EMAIL in environment variables.");
  }

  const transporter = getTransporter();

  const mailOptions: Parameters<Transporter["sendMail"]>[0] = {
    from: `"ERP Titans" <${user}>`,
    to: to,
    subject: subject,
    html: html,
    ...(replyTo ? { replyTo } : {}),
  };

  if (attachments && attachments.length > 0) {
    mailOptions.attachments = attachments.map(att => ({
      filename: att.name,
      content: Buffer.from(att.contentBytes, 'base64'),
      contentType: att.contentType,
    }));
  }

  try {
    await transporter.sendMail(mailOptions);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    throw new Error(`Failed to send email via Outlook SMTP: ${message}`);
  }
}
