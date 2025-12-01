import type { Level } from "../types/Level"
import type { LevelAPI } from "../types/LevelAPI";


const createLevels = (levels: LevelAPI[]) : Level[] => {
    const levelas = levels.map((level: LevelAPI) => {
        return { 
            id: level.id,
            question: level.question, 
            options: [
                {
                    answer: level.option1, 
                    answerNumber: "option1"
                },
                {
                    answer: level.option2, 
                    answerNumber: "option2"
                }, 
                {
                    answer: level.option3, 
                    answerNumber: "option3"
                },
                {
                    answer: level.option4, 
                    answerNumber: "option4"
                }
            ]
        };
    });
    return levelas;
}

export default createLevels;