import axios from "axios";
import { GET_LEVELS } from "../urls";
import type { Level } from "../../types/Level";
import createLevels from "./createLevels";
import type { LevelResponse } from "./LevelResponse";

const getLevels = async (difficulty: string | undefined) : Promise<Level[]> => {
    try {
        const response = await axios.get<LevelResponse[]>(GET_LEVELS, {params: { difficulty } });
        return createLevels(response.data);
    }
    catch(error) {
        return Promise.reject(error);
    }
}

export default getLevels;