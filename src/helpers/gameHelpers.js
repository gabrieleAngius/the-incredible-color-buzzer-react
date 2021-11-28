export const colors = ["#ff0000", "#11D700", "#0044F3", "#FFC700"];

export function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

export function getRandomColor() {
    return colors[getRandomValue(0, 3)];
}
