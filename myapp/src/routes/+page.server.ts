import { Buffer } from 'node:buffer';
import * as gemini from "$lib/server/gemini.ts";

export const actions = {
    // ({property}) is js destructuring syntax
    default: async ({request}) => {
        const form_file_input_name = "file";
        const form_data_list = (await request.formData()).getAll(form_file_input_name);
        const files = [];
        for (let i = 0; i < form_data_list.length; i++) {
            const maybe_file = form_data_list[i];
            if (maybe_file instanceof File) {
                files[i] = Buffer.from(await maybe_file.arrayBuffer()).toString("base64");
                
            }
        }

        gemini.extract_data_from_syllabi(files);
        // const ical_file = await gemini.extract_data_from_syllabi(files);
        // return new Response(ical_file,  { status: 200, headers: {} });
    }
}