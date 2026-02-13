import type { APIRoute } from "astro";

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

    return json({
      ok: true,
      message: "Mensaje recibido (placeholder)."
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
