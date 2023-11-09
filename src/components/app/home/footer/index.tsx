import React from 'react'
import Link from 'next/link'
import Location from '@/components/shared/icons/location'
import LogoWhite from '@/components/shared/icons/logo-white'
import Phone from '@/components/shared/icons/phone'
import Email from '@/components/shared/icons/email'
import Appcoders from '@/components/shared/icons/appcoders'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('home')
  return (
    <footer className='w-full flex flex-col justify-start items-center bg-it-black-1 text-white py-8'>
      <div className='w-full md:max-w-[1210px] flex flex-col justify-start gap-7'>
        <div className='w-full flex flex-col justify-start gap-7 md:flex-row md:justify-between'>
          <section className='flex flex-col gap-8 px-4 md:px-0'>
            <Link href='/'>
              <LogoWhite width='320' />
            </Link>
            <ul className='flex flex-col gap-4 text-xl font-bold leading-normal [&>li]:flex [&>li]:items-center [&>li]:gap-4'>
              <li>
                <span>
                  <Location />
                </span>
                <a className='w-full' href='https://maps.app.goo.gl/eXjDo7wkjSS2HHrt9' target='_blank' rel='noreferrer'>
                  {t('footer.address.text-one')}<br /> {t('footer.address.text-two')}
                </a>
              </li>
              <li>
                <span className='text-white'>
                  <Phone />
                </span>
                <a href='tel:+13052042754' target='_blank' rel='noreferrer'>
                  {t('footer.phone')}
                </a>
              </li>
              <li>
                <span className='text-white'>
                  <Email />
                </span>
                <a href='mailto:sales@lordsofit.com' target='_blank' rel='noreferrer'>
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </section>
          <div className='border-b-2 border-solid border-it-gray-sky md:hidden' />
          <section className='px-4 text-3xl font-bold md:px-0'>
            <ul className='flex flex-col items-start gap-4'>
              <li>
                <a>{t('footer.services')}</a>
              </li>
              <li>
                <a>{t('footer.solutions')}</a>
              </li>
              <li>
                <a>{t('footer.industries')}</a>
              </li>
            </ul>
          </section>
          <div className='border-b-2 border-solid border-it-gray-sky md:hidden' />
          <section className='px-4 text-3xl font-bold md:px-0'>
            <ul className='flex flex-col items-start gap-4'>
              <li>
                <a>{t('footer.company')}</a>
              </li>
              <li>
                <a>{t('footer.leadership')}</a>
              </li>
              <li>
                <a>{t('footer.about-us')}</a>
              </li>
              <li>
                <a>{t('footer.careers')}</a>
              </li>
            </ul>
          </section>
          <div className='border-b-2 border-solid border-it-gray-sky md:hidden' />
          <section className='px-4 text-3xl font-bold md:px-0'>
            <ul className='flex flex-col items-start gap-4'>
              <li>
                <Link href='/faq'>{t('footer.support')}</Link>
              </li>
              <li>
                <Link href='/privacy-policy'>{t('footer.privacy-policy')}</Link>
              </li>
              <li>
                <Link href='/terms-of-service'>{t('footer.terms-of-services')}</Link>
              </li>
            </ul>
          </section>
        </div>
        <div className='border-b-2 border-solid border-it-gray-sky md:hidden' />
        <section className='flex flex-col items-center gap-4'>
          <p className='text-center text-2xl font-medium' dangerouslySetInnerHTML={{ __html: t('footer.rights') }} />
          <div className='flex items-center gap-2'>
            <p>{t('footer.prefix')}</p>
            <Appcoders />
          </div>
        </section>
      </div>

    </footer>
  )
}

export default Footer
