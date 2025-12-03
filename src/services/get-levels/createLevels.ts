import type { Level } from "../../types/Level";
import type { LevelResponse } from "./LevelResponse";


const createLevels = (levels: LevelResponse[]) : Level[] => {
    const levels1 = levels.map((level: LevelResponse) => {
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
    return levels1;
}

export default createLevels;