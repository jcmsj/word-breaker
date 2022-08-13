import { WordIterator } from "../lib";

const wbc = [' ', '-', '—']
const iter = WordIterator(" Hello, my world!",  wbc);
for (const word of iter) {
    console.log(word);
}