export * from './type';
import { RegExpUnit } from './type';
export declare function RegExps(regExpUnits: RegExpUnit[] | RegExpUnit, charCodeReg?: RegExp): (str: string) => boolean;
export declare function RegExpCount(regExpUnits: RegExpUnit[] | RegExpUnit, flag?: boolean, charCodeReg?: RegExp): (str: string) => RegExpUnit[];
