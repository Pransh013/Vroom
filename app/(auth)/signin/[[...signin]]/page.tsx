import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SigninPage = () => {
  return (
    <div className='flex h-screen w-full justify-center items-center bg-foreground'>
      <SignIn/>
    </div>
  )
}

export default SigninPage