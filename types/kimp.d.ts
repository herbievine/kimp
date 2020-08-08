declare const kimp: {
    v4: () => string;
    classic: (options?: {
        start?: string;
        end?: string;
    }) => string;
    characters: (limit?: number) => string;
    digits: (limit?: number) => string;
    hash: (str: string) => number;
    symbols: (limit?: Number) => string;
};
export { kimp };
