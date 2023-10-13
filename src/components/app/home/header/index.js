import Avatar from '@/components/shared/icons/avatar'
import Email from '@/components/shared/icons/email'
import Phone from '@/components/shared/icons/phone'
import Tags from '@/components/shared/icons/tags'
import Whatsapp from '@/components/shared/icons/whatsapp'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-it-black-1 py-4 px-2 md:px-0 w-full flex flex-col justify-center items-center'>
      <ul className='flex items-center justify-evenly w-full md:w-4/5 2xl:max-w-[1440px] text-white'>
        <li><Whatsapp /></li>
        <li><Email /></li>
        <li><Phone /></li>
        <li><Tags /></li>
        <li><Avatar /></li>
      </ul>
    </header>
  )
}

export default Header
