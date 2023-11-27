import React from 'react'
import Logo from '../icons/logo'
import Link from 'next/link'
import ContainerSidebar from './container-sidebar'
import { customerAdminSidebar } from '@/constants/customer-admin-sidebar'
import LinkSidebar from './link-sidebar'
import { logOut } from '@/actions/auth.actions'

export default function Sidebar () {
  return (
    <ContainerSidebar>
      <aside className='w-full h-full px-8 py-6 bg-white overflow-auto'>
        <div className='w-full flex flex-col justify-start items-center gap-4'>
          <header>
            <Link href='/dashboard/customer-admin'>
              <Logo width='100%' />
            </Link>
          </header>
          <select defaultValue='' className='select select-bordered w-full rounded-lg py-2 text-it-black-1 border-it-black-1 text-xs mb-8' placeholder='All Appcoders Apps'>
            <option value=''>All Appcoders Apps</option>
          </select>
          <nav className='w-full flex flex-col justify-start gap-14'>
            {Object.values(customerAdminSidebar).map((links, i) => {
              return (
                <ul
                  className='flex flex-col justify-start items-start gap-6'
                  key={`nav-group-${i}`}
                >
                  {links.map((link, j) => {
                    if (link.type === 'link') {
                      return (
                        <LinkSidebar
                          key={`nav-item-${j}`}
                          href={link.href}
                          icon={link.icon}
                          label={link.label}
                          paths={link.paths}
                        />
                      )
                    }
                    if (link.type === 'action') {
                      return (
                        <li
                          className='flex items-center justify-start text-base text-it-gray-5 leading-[150%]'
                          key={`nav-item-${j}`}
                        >
                          <span className='w-8 flex items-center justify-start'>
                            {link.icon}
                          </span>
                          <form action={logOut}>
                            <button type='submit'>
                              {link.label}
                            </button>
                          </form>
                        </li>
                      )
                    }
                    return null
                  })}
                </ul>
              )
            })}
          </nav>
        </div>
      </aside>
    </ContainerSidebar>
  )
}
