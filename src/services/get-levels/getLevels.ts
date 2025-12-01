import axios from "axios";
import { GET_LEVELS } from "../urls";
import type { Level } from "../../types/Level";
import createLevels from "../../utils/createLevels";
import type { LevelAPI } from "../../types/LevelAPI";

const getLevels = async (difficulty: string | undefined) : Promise<Array<Level>> => {
    try {
        const response = await axios.get<LevelAPI[]>(GET_LEVELS, {params: { difficulty } });
        return createLevels(response.data);
    }
    catch(error) {
        return Promise.reject(error);
    }
}

export default getLevels;