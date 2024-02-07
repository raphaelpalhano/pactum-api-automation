export function dateYMD() {
    const date = new Date().toISOString().split('T')[0];
    return date;
}