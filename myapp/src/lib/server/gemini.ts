import { GoogleGenAI, Type } from "@google/genai";
import fs from "node:fs"

const ai = new GoogleGenAI({apiKey: "AIzaSyA_yIH40hmV07f5BFLTmczZlyYEarjsFLw"});

export async function extract_data_from_syllabi(syllabi: string[]) {

    const prompt = [
        // { text: "These are course syllabi. Extract needed information from each course into courseInfo, and due dates into an .ics file in icalFile. Insert undefined values if you cannot find or cannot read a field." },
        { text: `
You are an expert data extraction assistant.
Your task is to process the provided course syllabi (PDF files) and extract key information into a structured JSON format. You must also compile all due dates into a single iCalendar (.ics) file format.

For each syllabus, populate the fields in the 'courseInfo' object.
- For the attendance policy and office hours fields, ensure the responses are no longer than two sentences.
- When generating the grading breakdown, sort them in order of weight -- from highest to lowest.
- If a piece of information for a specific field cannot be found or read, you MUST insert an empty string instead of making up information; for example: attendancePolicy: ""

For the 'icalFile' field, generate a single string in valid iCalendar format containing only the most THE MOST important dates (midterms, finals, projects, etc) from ALL provided syllabi.
` },
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
                        type: Type.STRING
                    },
                    courseInfo: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                num: {type: Type.STRING},
                                name: {type: Type.STRING},
                                prof: {type: Type.STRING},
                                profEmail: {type: Type.STRING},
                                gradingWeights: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            gradeType: {type: Type.STRING},
                                            gradeWeight: {type: Type.STRING}
                                        }
                                    }
                                },
                                exams: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            name: {type: Type.STRING},
                                            date: {type: Type.STRING},
                                        }
                                    }
                                },

                                assignments: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            name: {type: Type.STRING},
                                            date: {type: Type.STRING},
                                        }
                                    }
                                },
                                attendancePolicy: {type: Type.STRING},
                                officeHours: {type: Type.STRING},
                            }
                        }
                    }
                },
            }
        }
    });
    const resp_content = response.text;
    if (typeof resp_content === "string") {
        const json_resp = JSON.parse(resp_content);
        // fs.writeFile('user_calendars/test.ical', json_resp.icalFile, (err: any) => {
        // if (err) {
        //     console.error(err);
        // }});

        // console.log(json_resp);

        return json_resp;
        // console.log(json_resp.courseInfo);
        // fs.writeFile('user_calendars/data.json', JSON.stringify(json_resp.courseInfo), (err: any) => {
        // if (err) {
        //     console.error(err);
        // }});

    }
}
