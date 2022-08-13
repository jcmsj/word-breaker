export const CASES = [' ', '-', '—'];
/**
 * @param s The text to be divided into their respective words as spoken by a speech synthesizer.
 * @param WORD_BREAK_CHARS 
 * @returns a word
 */
export function* WordIterator(s:string, WORD_BREAK_CHARS:string[] = CASES) {
    const iter = s[Symbol.iterator]();
    const _CASES = [...WORD_BREAK_CHARS, undefined];
    let c:string|undefined = undefined
    let word = ""
    const next = () => {
        c = iter.next().value
    }

    //Just add leading word break chars.
    while(true) {
        next()
        word += c ?? "";
        if (!_CASES.includes(c)) {
            break;
        }
    }

    do {
        next()
        word += c ?? ""
        if (_CASES.includes(c)) {            
            yield word
            word = ""
        }
    } while(c)

    return;
}