import React from 'react'
import { useLocation } from 'react-router-dom'

function TestPage() {

    const location = useLocation();
    const sport = location.state.sport;
  return (
    <div>
      <h1>{sport}</h1>
    </div>
  )
}

export default TestPage
