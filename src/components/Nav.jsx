import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <>
      <header>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">NotesTrack</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
       <button className='btn btn-soft btn-info'>
          <Link to={'/create'}>
             Add Note
          </Link>
       </button>
    </ul>
  </div>
</div>
      </header>
    </>
  )
}

export default Nav