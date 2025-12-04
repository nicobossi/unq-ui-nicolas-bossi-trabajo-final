import type { Option } from "./Option";
import type { Result } from "./Result";


export type OptionsListProperty = {
    options: Array<Option>,
    event: (option: Option) => void;
    result: Result | null
} 