import { useState } from "react";
import CounterBtn from "./CounterBtn";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    const numberColor = count > 0 ? 'text-green-600' : count < 0 ? 'text-red-600' : 'text-gray-700';

    return (
        <div className="flex flex-col items-center gap-6 p-10 bg-white rounded-2xl shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">Counter</h1>

            <span className={`text-7xl font-mono font-bold" ${numberColor}`}>{count}</span>

            {count !== 0 &&
                <p className="text-sm text-gray-400">{count > 0 ? 'Positive Number' : 'Negative Number'}</p>
            }

            <div className="flex gap-3">
                <CounterBtn label='-' onClick={decrement} color='bg-red-500 hover:bg-red-600' />
                <CounterBtn label='Reset' onClick={reset} color='bg-gray-400 hover:bg-gray-500' />
                <CounterBtn label='+' onClick={increment} color='bg-green-600 hover:bg-green-700' />
            </div>
        </div>
    );
}