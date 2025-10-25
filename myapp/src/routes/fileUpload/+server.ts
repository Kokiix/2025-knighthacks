import { Buffer } from 'node:buffer';
import * as gemini from "$lib/server/gemini.ts";

export async function POST({ request }) {
    const form_data_list = (await request.formData()).getAll("pdfs");
    const files: string[] = [];
    for (const maybe_file of form_data_list) {
        if (maybe_file instanceof File) {
            files.push(Buffer.from(await maybe_file.arrayBuffer()).toString("base64"));
        }
    }

    const result = await gemini.extract_data_from_syllabi(files);

    return new Response(JSON.stringify(result),{
        headers: { "Content-Type": "application/json" }
    });
}