import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyA_yIH40hmV07f5BFLTmczZlyYEarjsFLw"});

export async function extract_data_from_syllabi(syllabi: string[]) {

    const prompt = [
        { text: "Extract the important due dates from these class syllabi, and write them into an ics file as a string." },
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
                type: Type.ARRAY,
                items: {
                    type: Type.STRING
                },
            }
        }
    });
    console.log(response.text);
}
