import React  , {useState , useEffect} from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router'
import { GetOneNote, UpdateNote } from '../api'

const EditPage = () => {

  const {id} = useParams()
  const navi = useNavigate()
  const [Note , setNote] = useState([])
   const [title , setTitle] = useState()
    const [content , setContent] = useState()
  const [loading , setLoading] = useState(true)

  useEffect(()=>{

      async function NoteDeatil(){
        try {
            let response = await GetOneNote(id)
           
           setNote(response.note)
           setLoading(false)
           setTitle(response.note.title)
           setContent(response.note.content)
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong !")
        }
           
      }

      NoteDeatil()
      
  } , [])

  const HandleSubmit = async (e)=>{
    e.preventDefault()

    try {
        let response = await UpdateNote(title , content , id)
        if(response.Success){
            toast.success("Updated Successfully")
            navi("/")
        }
    } catch (error) {
        toast.error("Failed to Update")
        console.log(error)
    }
  }
  return (
    <>
      
       <form onSubmit={HandleSubmit}>
         <input type="text" placeholder="Title" className="input" defaultValue={Note.title}  onChange={(e)=>setTitle(e.target.value)} />
         <textarea className="textarea" placeholder="Content"  defaultValue={Note.content} onChange={(e)=>setContent(e.target.value)}></textarea>
         <button className='btn' disabled={loading ? true : false}>Update</button>
     </form>
     
    </>
  )
}

export default EditPage