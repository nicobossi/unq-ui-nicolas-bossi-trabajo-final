import type { Difficulties } from "../types/Difficulties";


const createDifficulties = (data : Array<string>) : Difficulties => {
    return {
        option1: data[0],
        option2: data[1],
        option3: data[2],
        option4: data[3],
    }
}

export default createDifficulties;