import {createContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const BookContext = createContext()

export function BookProvider({children}) 
{
  const nav = useNavigate()
  const [onchange, setonchange] = useState(false)
  const [books, setbooks] = useState()

   // Addbook
   const AddBook = (name, description, imageurl) =>{
    fetch("/books/addbook", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({name: name, description: description, imageurl: imageurl})
    })
    .then((res)=>res.json())
    .then((response)=>{
        console.log(response)
        if(response.error)
        {
            Swal.fire(
                'Error',
                response.error,
                'error'
              )
        }
        else if(response.success)
        { 
            nav("/books")
            Swal.fire(
                'Success',
                response.success,
                'success'
              )
              setonchange(!onchange)
        }
        else{
            Swal.fire(
                'Error',
                "Something went wrong",
                'error'
              )
        }

    })
}
  // Delete review
  const deleteBook = (id) =>{
    fetch(`/books/delete/${id}`, {
        method: "DELETE",
    })
    .then((res)=>res.json())
    .then((response)=>{
      setonchange(!onchange)
        console.log(response)
        nav("/books")
        Swal.fire(
          'Success',
          "Delete success",
          'success'
        )
        nav("/books")

    })

}

  // Fetch books
  useEffect(()=>{
    fetch("/books", {
        method: "GET",
        headers: {"Content-Type":"application/json"}
    })
    .then((res)=>res.json())
    .then((response)=>{
     setbooks(response)
        
    })
}, [onchange])


   const contextData = {
     books,
     deleteBook,
     AddBook
    }
  return (
    < BookContext.Provider value={contextData}>
       {children}
    </BookContext.Provider>
  )
}