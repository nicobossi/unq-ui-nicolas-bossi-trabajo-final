import { useState } from "react";
import type { Result } from "../types/Result";

const useCounterResults = () => {

    const [totalCounter, setTotalCounter] = useState<number>(0);
    const [assertsCounter, setAssertsCounter] = useState<number>(0);

    function handleCounters(result : Result, end : (asserts : number) => void, reset : () => void) : void {
        setTimeout(() => {
            if (result.assert) setAssertsCounter(previo => previo + 1);
            if (result.isLastQuestion) end(result.assert ? assertsCounter + 1 : assertsCounter);
            if (!result.isLastQuestion) setTotalCounter(previo => previo + 1);
            reset();
        }, 1500);
    }

    return {totalCounter, assertsCounter, handleCounters}
}

export default useCounterResults;
