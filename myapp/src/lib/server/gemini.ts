import { GoogleGenAI, Type } from "@google/genai";
import fs from "node:fs"

// KENNY'S API KEY FOR FREE PLAN
const ai = new GoogleGenAI({apiKey: "AIzaSyA_yIH40hmV07f5BFLTmczZlyYEarjsFLw"});

export async function extract_data_from_syllabi(syllabi: string[]) {

    const prompt = [
        { text: "Extract the important due dates from these class syllabi, and write them into an ics file." },
    ];

    for (let i in syllabi) {
        prompt.push({
            inlineData: {
                mimeType: 'application/pdf',
                data: syllabi[i]
            }
        });
    }

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    icalFile: {
                        type:Type.STRING
                    }
                },
            }
        }
    });
    const resp_content = response.text;
    if (typeof resp_content === "string") {
        const json_resp = JSON.parse(resp_content);
        // return new File([json_resp.icalFile], "important_dates.ical");
        fs.writeFile('user_calendars/test.ical', json_resp.icalFile, (err: any) => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
        });

    }
}
