import Avatar from '@/components/shared/icons/avatar'
import Email from '@/components/shared/icons/email'
import Phone from '@/components/shared/icons/phone'
import Tags from '@/components/shared/icons/tags'
import Whatsapp from '@/components/shared/icons/whatsapp'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-it-black-1 py-4 px-2 md:px-0 w-full flex flex-col justify-center items-center'>
      <ul className='flex items-center justify-evenly w-full md:max-w-[1210px] text-white'>
        <li><Whatsapp /></li>
        <li><Email /></li>
        <li><Phone /></li>
        <li>
          <Link href='/pricing'>
            <Tags />
          </Link>
        </li>
        <li><Avatar /></li>
      </ul>
    </header>
  )
}

export default Header
