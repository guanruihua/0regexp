import { RegExpRaw } from '../type';
export * from './keyboard';
export * from './number';
export * from './letter';
export * from './special';
export declare function _length_(str: string, rule: RegExpRaw): boolean;
export declare function charCount(str: string, rule: RegExpRaw): boolean;
export declare function typeCount(str: string, rule: RegExpRaw): boolean;
export declare function phone(str: string): boolean;
