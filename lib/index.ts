export function* WordIterator(s:string, WORD_BREAK_CHARS:string[]) {
    const iter = s[Symbol.iterator]();
    const CASES = [...WORD_BREAK_CHARS, undefined];
    let c:string|undefined = undefined
    let word = ""
    const next = () => {
        c = iter.next().value
    }

    //Just add leading word break chars.
    while(true) {
        next()
        word += c ?? "";
        if (!CASES.includes(c)) {
            break;
        }
    }

    do {
        next()
        word += c ?? ""
        if (CASES.includes(c)) {            
            yield word
            word = ""
        }
    } while(c)

    return;
}