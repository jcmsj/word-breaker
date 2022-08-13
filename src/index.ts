import { WordIterator } from "../lib";

const iter = WordIterator(" Hello, my world!");
for (const word of iter) {
    console.log(word);
}