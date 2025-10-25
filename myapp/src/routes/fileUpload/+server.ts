import { Buffer } from 'node:buffer';
import * as gemini from "$lib/server/gemini.ts";

export async function POST({ request }) {
    const form_data_list = (await request.formData()).getAll("pdfs");
    const files = [];
    for (let i = 0; i < form_data_list.length; i++) {
        const maybe_file = form_data_list[i];
        if (maybe_file instanceof File) {
            files[i] = Buffer.from(await maybe_file.arrayBuffer()).toString("base64");
        }
    }

    const result = gemini.extract_data_from_syllabi(files);

    // return new Response(JSON.stringify(result),{
    //     headers: { "Content-Type": "application/json" }
    // });
}