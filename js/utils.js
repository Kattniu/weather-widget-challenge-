export function formatHour(timestamp) {
    return new Date(timestamp * 1000).getHours() + ':00';
}
export function formatDay(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString('it-IT', { weekday: 'short' });
}
export function capitalize(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}