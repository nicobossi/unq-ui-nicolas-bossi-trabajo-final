import axios from "axios";
import { GET_DIFFICULTY } from "../url/difficulty";
import createDifficulties from "../../utils/createDifficulties";
import type { Difficulties } from "../../types/Difficulties";

const getDifficulty = async () : Promise<Difficulties> => {
    try {
        const response = await axios.get(GET_DIFFICULTY);
        return createDifficulties(response.data);
    }
    catch(error) {
        return Promise.reject(error);
    }
}

export default getDifficulty;