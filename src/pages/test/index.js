import React from 'react'
import {useNavigate} from 'react-router-dom'

function Test() {
    const navigate = useNavigate();
  return (
    <>
        <h3>Test Page</h3>
        <div style={{cursor: 'pointer'}} onClick={()=> navigate('/')}>
            Go to page posts
        </div>
    </>
  )
}

export default Test