import React from 'react'
import Link from 'next/link'
import Location from '@/components/shared/icons/location'
import LogoWhite from '@/components/shared/icons/logo-white'
import Phone from '@/components/shared/icons/phone'
import Email from '@/components/shared/icons/email'
import appcoders from '@/assets/images/appcoders.png'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col justify-start items-center bg-it-black-1 text-white py-8'>
      <div className='w-full md:w-4/5 2xl:max-w-[1440px] flex flex-col justify-start gap-7'>
        <section className='flex items-center justify-between flex-wrap gap-8 px-4 md:px-0'>
          <Link href='/'>
            <LogoWhite />
          </Link>
          <ul className='flex items-center gap-4 flex-wrap text-xl font-bold leading-normal [&>li]:flex [&>li]:items-center [&>li]:flex-wrap [&>li]:gap-4'>
            <li>
              <span>
                <Location />
              </span>
              <a className='max-w-[17rem]' href='https://maps.app.goo.gl/eXjDo7wkjSS2HHrt9' target='_blank' rel='noreferrer'>
                323 Sunny Isles Blvd Suite 727, Sunny Isles Beach, Fl. 33160.
              </a>
            </li>
            <li>
              <span className='text-white'>
                <Phone />
              </span>
              <a href='tel:+13052042754' target='_blank' rel='noreferrer'>
                (305) 204-2754
              </a>
            </li>
            <li>
              <span className='text-white'>
                <Email />
              </span>
              <a href='mailto:sales@lordsofit.com' target='_blank' rel='noreferrer'>
                sales@lordsofit.com
              </a>
            </li>
          </ul>
        </section>
        <div className='border-b-2 border-solid border-it-gray-sky' />
        <section className='px-4 text-3xl font-bold md:px-0'>
          <ul className='flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between'>
            <li>
              <a>SERVICES</a>
            </li>
            <li>
              <a>SOLUTIONS</a>
            </li>
            <li>
              <a>INDUSTRIES</a>
            </li>
          </ul>
        </section>
        <div className='border-b-2 border-solid border-it-gray-sky' />
        <section className='px-4 text-3xl font-bold md:px-0'>
          <ul className='flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between'>
            <li>
              <a>COMPANY</a>
            </li>
            <li>
              <a>LEADERSHIP</a>
            </li>
            <li>
              <a>ABOUT US</a>
            </li>
            <li>
              <a>CAREERS</a>
            </li>
          </ul>
        </section>
        <div className='border-b-2 border-solid border-it-gray-sky' />
        <section className='px-4 text-3xl font-bold md:px-0'>
          <ul className='flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between'>
            <li>
              <Link href='/faq'>SUPPORT</Link>
            </li>
            <li>
              <Link href='/privacy-policy'>PRIVACY POLICY</Link>
            </li>
            <li>
              <Link href='/terms-of-service'>TERMS OF SERVICE</Link>
            </li>
          </ul>
        </section>
        <div className='border-b-2 border-solid border-it-gray-sky' />
        <section className='flex flex-col items-center gap-4 md:flex-row md:justify-between'>
          <p className='text-center text-2xl font-medium'>© 2023 Appcoders LLC. All rights reserved.</p>
          <img src={appcoders.src} width={appcoders.width} height={appcoders.height} />
        </section>
      </div>
    </footer>
  )
}

export default Footer
