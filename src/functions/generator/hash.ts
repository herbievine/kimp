const hash = (str: string) => {
    let hash = 0,
        i: number,
        chr: number;

    for (i = 0; i < str.length; ++i) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }

    return hash as number;
}

export { hash }