"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";

import { attributes } from "@/content/form_config.md";
import { JWT } from "google-auth-library";

export async function submitForm(formData: FormData) {
  const sheet_id = formData.get("sheet_id")!.toString();
  const { private_key, service_acc_email } = attributes as FormConfigAttributes;

  const values: string[] = [];

  for (const [name, value] of formData.entries()) {
    if (name !== "sheet_id") values.push(String(value));
  }

  const serviceAccountAuth = new JWT({
    email: service_acc_email,
    key: private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(sheet_id, serviceAccountAuth);
  console.log(private_key, service_acc_email);

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow(values);

  return { success: true };
}
