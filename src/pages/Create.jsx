import React, { useState } from 'react'
import { AddNote } from '../api'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

const Create = () => {
  const [title , setTitle] = useState()
  const [content , setContent] = useState()
  const [loading , setLoading] = useState(false)

  const navi = useNavigate()
  const HandleSubmit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    let response = await AddNote(title , content)
    if(response.Success){
        setLoading(false)
        toast.success("Note Added !")
        navi("/")
    }
    else{
      toast.error(response.msg)
      setLoading(false)
    }
  }
  return (

    <>
     <h1>Share Your Notes </h1>

     <form onSubmit={HandleSubmit}>
         <input type="text" placeholder="Title" className="input" onChange={(e)=>setTitle(e.target.value)} />
         <textarea className="textarea" placeholder="Content" onChange={(e)=>setContent(e.target.value)}></textarea>
         <button className='btn' disabled={loading ? true : false}>Save</button>
     </form>
    </>
  )
}

export default Create