import axios from "axios";
import { GET_DIFFICULTY } from "../urls";

const getDifficulty = async () : Promise<string[]> => {
    
    try {
        const response = await axios.get<string[]>(GET_DIFFICULTY);
        return response.data;
    }
    catch(error) {
        return Promise.reject(error);
    }
}

export default getDifficulty;