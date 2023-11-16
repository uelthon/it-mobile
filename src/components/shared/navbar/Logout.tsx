import React from 'react'
import { logOut } from '@/actions/auth.actions'

const Logout = () => {
  return (
    <form action={logOut}>
      <button
        className='btn btn-link btn-xs no-underline'
      >
        Logout
      </button>
    </form>
  )
}

export default Logout
