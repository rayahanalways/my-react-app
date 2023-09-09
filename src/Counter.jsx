import { useState } from "react"

export default function Counter() {
    const [count , setCount] = useState(0);
    const addButton = () => {
        const newCount = count + 1;
        setCount (newCount);
    }

    const reduceButton = () => {
        const newCount = count - 1;
        setCount (newCount);
    }
    return (
        <div>
            <h3>Counter: {count} </h3>
            <button onClick={addButton}>Add</button>
            <button onClick={reduceButton}>Reduce</button>
        </div>
    )
}