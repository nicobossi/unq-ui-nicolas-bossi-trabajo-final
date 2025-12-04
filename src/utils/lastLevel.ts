import type { Level } from "../types/Level";


const last = (levels : Level[], index : number) : Level => levels[index - 1];

export default last;