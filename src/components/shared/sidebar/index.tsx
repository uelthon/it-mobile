import React from 'react'
import Logo from '../icons/logo'
import Link from 'next/link'
import ContainerSidebar from './container-sidebar'

export default function Sidebar () {
  return (
    <ContainerSidebar>
      <aside className='w-full h-full px-8 py-6 bg-white'>
        <div className='w-full flex flex-col justify-start items-center gap-4'>
          <header>
            <Link href='/dashboard/customer-admin'>
              <Logo width='100%' />
            </Link>
          </header>
          <select defaultValue='' className='select select-bordered w-full rounded-lg py-2 text-it-black-1 border-it-black-1 text-xs' placeholder='All Appcoders Apps'>
            <option value=''>All Appcoders Apps</option>
          </select>
        </div>
      </aside>
    </ContainerSidebar>
  )
}
