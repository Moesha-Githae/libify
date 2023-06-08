import {createContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const ReviewContext = createContext()

export function ReviewProvider({children}) 
{
  const nav = useNavigate()
  const [onchange, setonchange] = useState(false)
  const [reviews, setreviews] = useState()

   // Addreview
   const AddReview = (bookid, review, userid) =>{
    fetch("/reviews/addreview", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({book_id:bookid, review: review, user_id:userid})
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
            nav("/")
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
  const deleteReview = (id) =>{
    fetch(`/reviews/delete/${id}`, {
        method: "DELETE",
    })
    .then((res)=>res.json())
    .then((response)=>{
      setonchange(!onchange)
        console.log(response)
        nav("/")
        Swal.fire(
          'Success',
          "Delete success",
          'success'
        )
        nav("/")

    })

}

  // Fetch posts
  useEffect(()=>{
    fetch("/reviews", {
        method: "GET",
        headers: {"Content-Type":"application/json"}
    })
    .then((res)=>res.json())
    .then((response)=>{
     setreviews(response)
        
    })
}, [onchange])


   const contextData = {
     reviews,
     deleteReview,
     AddReview
    }
  return (
    < ReviewContext.Provider value={contextData}>
       {children}
    </ReviewContext.Provider>
  )
}