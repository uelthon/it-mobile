import Avatar from '@/components/shared/icons/avatar'
import Email from '@/components/shared/icons/email'
import Phone from '@/components/shared/icons/phone'
import Tags from '@/components/shared/icons/tags'
import Whatsapp from '@/components/shared/icons/whatsapp'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 left-0 bg-it-black-1 py-4 px-2 md:px-0 w-full flex flex-col justify-center items-center z-50 shadow-lg'>
      <ul className='flex items-center justify-evenly w-full md:max-w-[1210px] text-white'>
        <li>
          <a href='https://wa.me/13052042754' target='_blank' rel='noreferrer'>
            <Whatsapp />
          </a>
        </li>
        <li>
          <a href='mailto:sales@lordsofit.com' target='_blank' rel='noreferrer'>
            <Email />
          </a>
        </li>
        <li>
          <a href='tel:+13052042754' target='_blank' rel='noreferrer'>
            <Phone />
          </a>
        </li>
        <li>
          <Link href='/pricing'>
            <Tags />
          </Link>
        </li>
        <li>
          <a href='/'>
            <Avatar />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
