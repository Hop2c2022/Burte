import axios from "axios"
import { useEffect, useState } from "react"
import "../contact.css"

export const Contact = () => {

    const [loading, setLoading] = useState(true)
    const [ users, setUsers ] = useState("")
    useEffect( () => {

        const dataRetriever = async () => {
            const result = await axios.get(`https://dummyapi.io/data/v1/user/` , {
    
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "app-id": "63104c3120f6e665ecf628ba",
              }
    
            })
            setUsers(result.data)
            setLoading(false)
        }
        dataRetriever()
    
      }, [])


      console.log(users.data);



    return(
        loading ? <div> Loading </div>  : <>
        <div className="Contcontainer">
            <div className="im"></div>
            <h1 className="abbb">About Us</h1>
        </div>
    {
      
      users?.data?.map(el => {
        return( 
            <div className="AboutUsBorder">
                <img className="AboutUsFace" src={el.picture} />
                <div> {el.title}. {el.firstName} {el.lastName} </div>
            </div>
            
         )
      })

    }
    </>
    )
}
