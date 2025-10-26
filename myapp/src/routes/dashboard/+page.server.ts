export function load({params, cookies}) {
    console.log("get ckies");
    return {cal: cookies.get("ical")}
}