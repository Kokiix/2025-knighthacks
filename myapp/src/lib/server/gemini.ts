import { GoogleGenAI, Type } from "@google/genai";
import fs from "node:fs"

const ai = new GoogleGenAI({apiKey: "AIzaSyA_yIH40hmV07f5BFLTmczZlyYEarjsFLw"});

export async function extract_data_from_syllabi(syllabi: string[]) {

    const prompt = [
        { text: "These are course syllabi. Extract needed information from each course into courseInfo, and due dates into an .ics file in icalFile." },
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
        // return new File([json_resp.icalFile], "important_dates.ical");
        fs.writeFile('user_calendars/test.ical', json_resp.icalFile, (err: any) => {
        if (err) {
            console.error(err);
        }});


        console.log(json_resp.courseInfo);
        fs.writeFile('user_calendars/data.json', JSON.stringify(json_resp.courseInfo), (err: any) => {
        if (err) {
            console.error(err);
        }});

    }
}
