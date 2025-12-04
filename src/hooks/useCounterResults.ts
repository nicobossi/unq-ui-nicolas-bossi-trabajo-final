import { useState } from "react";
import type { Result } from "../types/Result";

const useCounterResults = () => {

    const [totalCounter, setTotalCounter] = useState<number>(0);
    const [assertsCounter, setAssertsCounter] = useState<number>(0);

    function handleResults(result : Result, end : () => void, reset : () => void) : void {
        setTimeout(() => {
            if (result.isLastQuestion) end();
            else handleNext(result, reset);
        }, 1500);
    }

    function handleNext(result : Result, reset : () => void) {
        if (result.assert) setAssertsCounter(previo => previo + 1);
        setTotalCounter(previo => previo + 1);
        reset();
    }

    return {totalCounter, assertsCounter, handleResults}
}

export default useCounterResults;
