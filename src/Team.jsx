import { useState } from "react"

export default function Player() {
    const [team, setTeam] = useState(11);
    const addButton = () => {
        setTeam(team + 1);
    }
    const removeButton = () => {
        setTeam(team -1);

    }
    return (
        <div>
            <h3>Player: {team} </h3>
            <button onClick={addButton}>Add</button>
            <button onClick={removeButton}>Remove</button>
        </div>
    )
}