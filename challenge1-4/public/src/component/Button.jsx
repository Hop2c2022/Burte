import React from "react"

export const Button = ({ input, todo, setTodo, setInput }) => {

    const Adder = (arrayLength) => {
        setTodo( [ ...todo, { id: arrayLength, text: input } ] )
        setInput("")
    }

    return <div>
        <button onClick={() => Adder(todo.length)} >Add to do</button>
    </div>
}