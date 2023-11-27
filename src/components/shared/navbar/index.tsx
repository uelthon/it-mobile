import React from 'react'
import Notification from '@/components/shared/icons/notification'
import Logout from './Logout'
import MenuToggle from './menu-toggle'
import { getUser } from '@/actions/auth.actions'

export default async function Navbar () {
  const { data } = await getUser()
  const name = data?.user_metadata?.full_name as string || ''
  const bussiness = data?.user_metadata?.business_name as string
  return (
    <nav className='sticky top-0 left-0 p-4 bg-it-white-smoke z-10'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center'>
          <MenuToggle />
          <div className='hidden sm:block'>
            <p className='text-xl font-semibold'>
              Hola, {name.split(' ')[0]}
            </p>
            <p className='text-sm font-normal text-it-gray-5'>Have a nice day</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Notification />
          <div className='divider divider-horizontal mx-0' />
          <ul className='menu menu-horizontal py-0 px-0 -ml-4'>
            <li>
              <details>
                <summary className=''>
                  <div className='avatar [&>div]:flex'>
                    <div className='w-11 h-11 bg-it-gray-6 justify-center items-center rounded-full'>
                      <p className='text-it-black-2 text-center capitalize text-base font-bold'>
                        CS
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className='font-semibold text-base'>
                      {name}
                    </p>
                    <p className='text-xs font-normal'>
                      {bussiness}
                    </p>
                  </div>
                </summary>
                <ul className='p-2 bg-base-100'>
                  <li><Logout /></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
