import type { Option } from "./Option";


export type OptionsListProperty = {
    options: Array<Option>,
    event: (option: string) => void;
} 