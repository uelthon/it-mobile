import React from 'react'
import { services } from '@/constants/home-tab-services'
import Card from '@/components/shared/ui/card'
import { brands } from '@/constants/brands'
import woman from '@/assets/images/woman.webp'
import Sun from '@/components/shared/icons/sun'
import LayerRed from '@/components/shared/icons/layer-red'
import LayerPurple from '@/components/shared/icons/layer-purple'
import Email from '@/components/shared/icons/email'
import Phone from '@/components/shared/icons/phone'
import Whatsapp from '@/components/shared/icons/whatsapp'
import { useTranslations } from 'next-intl'

export default function Services () {
  const t = useTranslations('home')
  return (
    <section className='flex flex-col justify-start gap-7 md:gap-12'>
      <section className='px-2 md:px-0 flex gap-4 justify-center md:justify-between flex-wrap'>
        {services[t('locale') as 'en' | 'es'].map(service =>
          <Card
            key={`service-${service.id.toString()}`}
            content={service.content}
            image={service.img}
            title={service.title}
          />
        )}
      </section>
      <section className='flex flex-col justify-start gap-2'>
        <div className='flex flex-col justify-start gap-2 pl-2 md:pl-0 md:text-center'>
          <h1 className='text-6xl font-extrabold leading-[83%]'>Expanded Portfolio</h1>
          <p className='text-xl text-it-gray-2'>Unlocking the Full Potential of Your Business.</p>
        </div>
        <section className='grid grid-cols-[repeat(auto-fill,9.125rem)] gap-4 px-2 md:px-0 md:gap-x-8 justify-between md:justify-center'>
          {brands.map((brand, i) =>
            <img className='object-contain' key={`brands-${i}`} src={brand.src} width={brand.width} height={brand.height} />
          )}
        </section>
        <div className='flex justify-center'>
          <button className='btn w-56'>View All</button>
        </div>
      </section>
      <section className='flex flex-col justify-start gap-2'>
        <div className='flex flex-col justify-start gap-2 px-2 md:pl-0 md:text-center'>
          <h1 className='text-6xl font-extrabold leading-[83%]'>
            Embrace <span className='text-it-blue-1'>the Future</span>
          </h1>
          <p className='text-xl text-it-gray-2'>Building Tomorrow's Success Today on the Cloud.</p>
        </div>
        <section className='w-full flex flex-col gap-8 md:flex-row md:justify-center'>
          <section
            style={{
              background: 'linear-gradient(0deg, rgba(0,159,227,1) 0%, rgba(0,159,227,0) 100%)'
            }}
            className='h-96 relative flex justify-center md:max-w-[24.5rem] md:max-h-[25.75rem]'
          >
            <div className='h-full relative flex justify-center'>
              <div className='absolute top-[5.76rem] left-0 z-[5]'>
                <LayerRed />
              </div>
              <div className='absolute left-[2rem] -bottom-[2.77rem] z-[5]'>
                <Sun />
              </div>
              <img className='h-full object-contain z-10' src={woman.src} width={woman.width} height={woman.height} alt='woman' />
              <div className='absolute top-[4.8rem] right-0'>
                <LayerPurple />
              </div>
            </div>
          </section>
          <section className='flex flex-col justify-start md:items-start gap-4 text-it-gray-1 mt-4'>
            <h1 className='text-center text-4xl font-bold'>Contact Sales</h1>
            <ul className='flex flex-col justify-start gap-4 md:items-start [&>li]:flex [&>li]:flex-col [&>li]:justify-start [&>li]:items-center [&>li]:md:items-start [&>li]:gap-2 [&>li>a]:text-3xl [&>li>a]:font-bold'>
              <li>
                <span className='text-it-blue-1'>
                  <Email />
                </span>
                <a href='mailto:sales@lordsofit.com' target='_blank' rel='noreferrer'>sales@lordsofit.com</a>
              </li>
              <li>
                <span className='text-it-blue-1'>
                  <Phone />
                </span>
                <a href='tel:+13052042754' target='_blank' rel='noreferrer'>(305) 204-2754</a>
              </li>
              <li>
                <span className='text-it-blue-1'>
                  <Whatsapp />
                </span>
                <a href='tel:+13052042754' target='_blank' rel='noreferrer'>(305) 204-2754</a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  )
}
