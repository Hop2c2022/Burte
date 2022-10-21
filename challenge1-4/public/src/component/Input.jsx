import React from "react"

export const Input = ({ setInput, input }) => {

    const inputChangerListener = ( event ) => {
        setInput(event.target.value)
    }

    return <div>
        <input value={input} onChange={inputChangerListener} style={{ width: "20vw", height: "3vh" }} />
    </div>
}