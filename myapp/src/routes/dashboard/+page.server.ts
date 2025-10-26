export function load({params, cookies}) {
    return {cal: cookies.get("ical")}
}