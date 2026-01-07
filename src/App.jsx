import React from 'react'
import Home from './pages/Home'
import Create from './pages/Create'
import NoteDeatils from './pages/NoteDeatils'
import { Route, Routes } from 'react-router'
import EditPage from './pages/EditPage'

const App = () => {

  return (
    <>
    
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/create' element={<Create/>}/>
       <Route path='/:id' element={<NoteDeatils/>}/>
       <Route path='/edit/:id' element={<EditPage/>}/>
     </Routes>
    </>
  )
}

export default App