



// // const List=({name})=>{
// //     const onChange=(e)=>{
// //         return e.target.value
// //     }
// //     return  <input type="text" placeholder="Text" onChange={onChange} />

    
// // }
// let values = ''

// const Button=({ Button})=>{
//     const onChange=(value)=>{
//         values=  value.target.value
//         console.log(values)
//         }
//         const add =()=>{
//             console.log(values)
//         }
//     return( 
//     <div>
        
//         <input type="text" placeholder="Text" onChange={onChange} />
//         <button onClick={()=>add()}> {Button}</button>
        
//     </div>)
// }
// export default Button;

// todo 






import React from "react"

export const Todo = ({ todo , deleteTodo}) => {
    return <div>
        {todo.map((el, index) => {
            return <div key={index} style={{ display:'flex', justifyContent :"center" }} > 
                    <button>✓</button>
                    <h1> Id : {el.id + 1} </h1>
                    <h1> Todo : {el.text} </h1>
                    <button style={{width:'40px'}} onClick={()=>deleteTodo(index)}>x</button>
                 </div>
       } )}
    </div>
    }
