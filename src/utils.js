export function capitalize(str) {
    return str.chartAt(0).toUpperCase() + str.substr(1);
}