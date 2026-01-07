import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { DeleteNote, GetOneNote } from '../api'
import toast from 'react-hot-toast'

const NoteDeatils = () => {
  const {id} = useParams()
  const [Note , setNote] = useState([])
  const [loading , setLoading] = useState(true)
  const navi = useNavigate()

  useEffect(()=>{

      async function NoteDeatil(){
           let response = await GetOneNote(id)
           setNote(response.note)
           setLoading(false)
      }

      NoteDeatil()
      
  } , [])
  
  const HandleDelete = async ()=>{
         try {
            let response = await DeleteNote(id)
            if(response.Success){
              toast.success("Deleted Successfully..")
               navi("/")
            }
         } catch (error) {
             toast.error("Error on Deleting...")
         }
  }
  return (
    <>
      {loading && <p>Loading.....</p>}

      {!loading && (
        <>
        <div className="card bg-primary text-primary-content w-96">
          <div className="card-body">
              <h2 className="card-title">{Note.title}</h2>
              <p>{Note.content}</p>
              <div className="card-actions justify-end">
                <button className="btn" onClick={HandleDelete}>Delete</button>
              </div>
              <div className="card-actions justify-end">

                <button className="btn btn-danger">
                  <Link to={`/edit/${id}`}>
                    Edit
                  </Link>
                </button>
              </div>
          </div>
        </div>
        </>
      )}
    </>
  )
}

export default NoteDeatils