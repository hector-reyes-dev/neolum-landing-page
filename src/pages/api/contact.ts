import type { APIRoute } from "astro";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      Allow: "POST"
    }
  });

const methodNotAllowed = () =>
  json(
    {
      ok: false,
      message: "Metodo no permitido. Usa POST para enviar el formulario."
    },
    405
  );

export const GET: APIRoute = async () => methodNotAllowed();
export const PUT: APIRoute = async () => methodNotAllowed();
export const PATCH: APIRoute = async () => methodNotAllowed();
export const DELETE: APIRoute = async () => methodNotAllowed();

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get("content-type") ?? "";
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const contactToEmail = import.meta.env.CONTACT_TO_EMAIL;
  const contactFromEmail = import.meta.env.CONTACT_FROM_EMAIL;

  try {
    let payload: Record<string, string> = {};

    if (contentType.includes("application/json")) {
      const raw = (await request.json()) as Record<string, unknown>;

      payload = Object.fromEntries(
        Object.entries(raw).map(([key, value]) => [key, typeof value === "string" ? value : ""])
      );
    } else {
      const formData = await request.formData();
      payload = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
      );
    }

    const requiredFields = ["firstName", "lastName", "email", "phone", "message"];

    const hasMissingRequired = requiredFields.some((field) => {
      const value = payload[field]?.trim();
      return !value;
    });

    if (hasMissingRequired) {
      return json(
        {
          ok: false,
          message: "Datos incompletos o invalidos."
        },
        400
      );
    }

    if (!emailPattern.test(payload.email.trim())) {
      return json(
        {
          ok: false,
          message: "El correo no tiene un formato valido."
        },
        400
      );
    }

    if (!resendApiKey || !contactToEmail || !contactFromEmail) {
      console.error("Missing email env vars for contact form.");

      return json(
        {
          ok: false,
          message: "El formulario no esta disponible temporalmente. Intenta nuevamente mas tarde."
        },
        500
      );
    }

    const resend = new Resend(resendApiKey);
    const fullName = `${payload.firstName.trim()} ${payload.lastName.trim()}`.trim();
    const phone = `${payload.countryCode?.trim() ?? "+52"} ${payload.phone.trim()}`.trim();
    const company = payload.company?.trim() || "No especificada";

    const { error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: payload.email.trim(),
      subject: `Nuevo lead desde neolum.com.mx: ${fullName}`,
      text: [
        "Nuevo mensaje desde el formulario de contacto de NEO LUM.",
        "",
        `Nombre: ${fullName}`,
        `Correo: ${payload.email.trim()}`,
        `Empresa: ${company}`,
        `Telefono: ${phone}`,
        "",
        "Mensaje:",
        payload.message.trim()
      ].join("\n"),
      html: `
        <h2>Nuevo mensaje desde el formulario de NEO LUM</h2>
        <p><strong>Nombre:</strong> ${fullName}</p>
        <p><strong>Correo:</strong> ${payload.email.trim()}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${payload.message.trim().replace(/\n/g, "<br />")}</p>
      `
    });

    if (error) {
      console.error("Resend error", error);

      return json(
        {
          ok: false,
          message: "No fue posible enviar el mensaje. Intenta nuevamente."
        },
        502
      );
    }

    return json({
      ok: true,
      message: "Mensaje enviado. Te responderemos pronto."
    });
  } catch {
    return json(
      {
        ok: false,
        message: "No fue posible procesar la solicitud."
      },
      400
    );
  }
};
