import { useState } from "react";



const useDataResult = () => {

    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoader] = useState<boolean>(true);

    const handleResult = (setData : () => void) => {
        setData();
        setIsLoader(false);
    } 

    const handleError = () => {
        setIsError(true);
        setIsLoader(false);
    }

    return {isError, setIsError, isLoading, handleResult, handleError}
}

export default useDataResult