import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Nav from '../components/Nav'
import { FetchNotes } from '../api'
import { Link } from 'react-router'

const Home = () => {
  const [Notes, setNotes] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const GetNotes = async () => {
      const data = await FetchNotes()
      setNotes(data.notes)
      setLoading(false)
    }

    GetNotes()
  }, [])
  
  return (
    <div data-theme="sunset">
      <Nav />

      {loading && <p>Loading...</p>}

      {!loading && Notes.length > 0 && (
        <div>
          <h1 className='text-center font-mono'>All Notes</h1>
          {Notes.map(note => (
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' key={note._id}>
                <div className="card card-dash bg-base-100 w-96">
                    <div className="card-body">
                      <h2 className="card-title">{note.title}</h2>
                      <p>{note.content}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                          <Link to={`/${note._id}`}>
                            View More
                          </Link>
                        </button>
                      </div>
                    </div>
                 </div>
              </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
