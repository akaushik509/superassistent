import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categorize from '../Components/Categorize'
import Cloze from '../Components/Cloze'
import Comprehension from '../Components/Comprehension'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Categorize/>}/>
            <Route path="/cloze" element={<Cloze/>}/>
            <Route path="/cloze" element={<Comprehension/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes