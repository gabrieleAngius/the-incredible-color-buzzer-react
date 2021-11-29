export const colors = ["#ff0000", "#11D700", "#0044F3", "#FFC700"];

export function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

export function getRandomColor() {
    return colors[getRandomValue(0, 3)];
}

export function shuffleArray(array) {
    let result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }