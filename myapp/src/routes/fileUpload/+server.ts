import { Buffer } from 'node:buffer';
import * as gemini from "$lib/server/gemini.ts";
import { json } from '@sveltejs/kit';

export async function POST({ cookies, request }) {
    console.log("processing files at endpoint");
    const form_data_list = (await request.formData()).getAll("pdfs");
    const files = [];
    for (let i = 0; i < form_data_list.length; i++) {
        const maybe_file = form_data_list[i];
        if (maybe_file instanceof File) {
            files[i] = Buffer.from(await maybe_file.arrayBuffer()).toString("base64");
        }
    }

    const info_json = await gemini.extract_data_from_syllabi(files);
    // console.log(JSON.stringify(info_json));
    cookies.set("ical", JSON.stringify(info_json.icalFile), { path: "/dashboard" });
    // return json({ status: 'ok', message: 'Success' });
    return json({
         status: 'success', 
         message: 'Success',
         originalData: info_json.courseInfo,
        });
}