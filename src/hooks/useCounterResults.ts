import { useState } from "react";
import type { Result } from "../types/Result";

const useCounterResults = () => {

    const [totalCounter, setTotalCounter] = useState<number>(0);
    const [assertsCounter, setAssertsCounter] = useState<number>(0);

    function handleCounters(result : Result, end : (asserts : number, total : number) => void, reset : () => void) : void {
        setTimeout(() => {
            if (result.assert) setAssertsCounter(previo => previo + 1);
            if (result.isLastQuestion) end(lastAssert(result), totalCounter + 1);
            setTotalCounter(previo => previo + 1);
            reset();
        }, 1500);
    }

    const lastAssert = (result : Result) => result.assert ? assertsCounter + 1 : assertsCounter;

    return {totalCounter, assertsCounter, handleCounters}
}

export default useCounterResults;
