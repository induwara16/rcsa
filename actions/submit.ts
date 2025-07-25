"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";

import { attributes } from "@/content/config/form.md";
import { JWT } from "google-auth-library";

export async function submitForm(formData: FormData) {
  const sheet_id = formData.get("sheet_id")!.toString();
  const { private_key, service_acc_email } = attributes as FormConfigAttributes;

  const values: string[] = [];

  for (const [name, value] of formData.entries()) {
    if (name !== "sheet_id") values.push(String(value));
  }

  try {
    const serviceAccountAuth = new JWT({
      email: service_acc_email,
      key: private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(sheet_id, serviceAccountAuth);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(values);

    return { success: true };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return { success: false };
  }
}
