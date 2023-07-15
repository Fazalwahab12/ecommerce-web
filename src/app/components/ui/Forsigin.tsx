import { UserButton, useUser,  } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Forsigin = () => {
    const { user } = useUser();
  return (
    <div className='flex items-center text-white'>
    {!user && (
      <>
        <Link
          href='sign-in'
          className='text-gray-300 hover:text-white mr-4'
        >
          Sign In
        </Link>
        <Link
          href='sign-up'
          className='text-gray-300 hover:text-white mr-4'
        >
          Sign Up
        </Link>
      </>
    )}
   
    <div className='ml-auto'>
      <UserButton afterSignOutUrl='/' />
    </div>
    </div>
  )
}

export default Forsigin