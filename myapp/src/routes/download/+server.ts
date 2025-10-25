import fs from "node:fs"
export async function GET({ params }){
  //console.log(params.file) -> ABC

  let cal = fs.readFileSync('user_calendars/test.ical');

  const headers = {
        'Content-Disposition': `attachment; filename="test.ical"`,
        'Content-Type': 'text/calendar',
        'Content-Length': cal.length.toString(),
    };
  return new Response(cal, {headers})
}