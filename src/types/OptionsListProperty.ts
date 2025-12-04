import type { Option } from "./Option";
import type { Result } from "./Result";


export type OptionsListProperty = {
    options: Array<Option>,
    event: (option: string) => void;
    result: Result | null
} 