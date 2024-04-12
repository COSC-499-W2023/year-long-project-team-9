export function getUTCDate(date: Date = new Date()): Date {
    return new Date(date.getTime() - new Date().getTimezoneOffset() * 60000);
}
