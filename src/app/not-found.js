import Link from 'next/link'
import React from 'react'

const custom404 = () => {
  return (
    <main className='min-h-screen flex flex-col'>
      <div className='m-auto flex flex-col gap-4 items-center'>
        <span className='text-2xl'>404 Page not found</span>
        <Link href={'/'}>&larr;&nbsp;Go Back Home</Link>
      </div>
    </main>
  )
}

export default custom404
