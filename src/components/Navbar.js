import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex flex-row px-8 py-4 justify-between bg-white' >
      <span className='text-2xl text-[#161A30]'>PassGen</span>
      <Link href={'https://github.com/hakeemsalman'} target='_blank'>
        <Image
          alt='github-icon'
          src={'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg'}
          width={30}
          height={30} />
      </Link>
    </div>
  )
}
