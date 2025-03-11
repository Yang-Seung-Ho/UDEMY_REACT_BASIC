import { useState } from "react"




export default function Player({initialName, symbol}){
    const [ playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing] = useState(false);

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>
    }
    function handleEditClick() {
        setIsEditing((editing) => !editing);
        // setIsEditing(isEditing => !isEditing);
        
        // 이거 별로래 setIsEditing(!isEditing);
        // setIsEditing(isEditing ? false : true);
        // if (isEditing) {
        //     setIsEditing(false);
        // } else{
        //     setIsEditing(true);
        // }
    }
    function handleChange(event) {
        setPlayerName(event.target.value)
    }
    return(
        <>
            <li>
                <span className="player">
                    {editablePlayerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
        </>
    )
}