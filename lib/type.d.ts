export declare type RegExpRaw = {
    name?: string;
    required?: boolean;
    reg?: RegExp;
    regs?: RegExp[];
    type?: string;
    min?: number;
    max?: number;
};
export declare type RegExpUnit = RegExpRaw | string;
