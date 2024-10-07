import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const hendleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handelReduse = () => {
        const reduse = count - 1
        setCount(reduse)
    }

    return (
        <div className="border-2 border-sky-500 p-4 rounded-lg">
            <h3>Counter : {count}</h3>
            <br />
            <div className="flex gap-4">
                <button onClick={hendleAdd}>Add</button>
                <button onClick={handelReduse}>Reduce</button>
            </div>

        </div>
    )
}