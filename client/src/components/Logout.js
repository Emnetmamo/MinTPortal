import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <h1 style={{marginTop: '100px'}}>You Have Logeed Out! Please <Link to = '/login'>Click here</Link> to Sign in Again</h1>
  )
}

export default Logout