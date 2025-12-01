import type { Level } from "../types/Level"
import type { LevelAPI } from "../types/LevelAPI";


const createLevels = (levels: LevelAPI[]) : Level[] => {
    const levelas = levels.map((level: LevelAPI) => {
        return { 
            id: level.id,
            question: level.question, 
            options: [level.option1, level.option2, level.option3, level.option4]
        };
    });
    return levelas;
}

export default createLevels;