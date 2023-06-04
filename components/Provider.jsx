"use client"

import React from 'react'

// import {SessionProvider} from 'next-auth/react'

const Provider = ({ children, session }) => {
  return (
    <div >
      { children }
    </div>
  )
}

export default Provider