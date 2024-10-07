import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    const hendleAdd = () => {
        setTeam(team + 1)
    }

    const hendleRemove = () => {
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }

    return (
        <div style={teamStyle} className="flex flex-col gap-4">
            <h3>Player: {team} </h3>
            <div className="flex gap-2">
                <button onClick={hendleAdd}>Add</button>
                <button onClick={hendleRemove}>Remove</button>
            </div>
        </div>
    )
}

