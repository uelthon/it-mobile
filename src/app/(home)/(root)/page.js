import React from 'react'
import Check from '@/components/shared/icons/check'
import illustrations from '@/assets/images/image-1.webp'
import pc from '@/assets/images/pc.webp'
import Security from '@/components/shared/icons/security'
import Hands from '@/components/shared/icons/hands'
import Repairs from '@/components/shared/icons/repairs'
import PlusCircle from '@/components/shared/icons/plus-circle'
import Support from '@/components/shared/icons/support'
import Language from '@/components/shared/icons/language'
import Tabs from '@/components/app/home/tabs'
import { tabConstrols } from '@/constants/home-tab-control'

export default function Home () {
  return (
    <>
      <section className='flex flex-col justify-start gap-3 px-3 md:p-0'>
        <h1 className='text-[2.375rem] font-extrabold leading-[87%] max-w-md md:text-5xl'>
          Simplify IT with Our Comprehensive<br /> <span className='text-it-blue-1'>All-Inclusive</span><br /> Subscription Plans.
        </h1>
        <p className='text-2xl text-it-gray-2 leading-normal max-w-md'>
          Starting at Just $49 per Month per User. <span className='text-it-blue-1 [1.375rem] font-bold'>View Pricing</span>
        </p>
      </section>
      <section className='pl-3 relative overflow-hidden pb-8 w-full'>
        <p className='text-lg text-it-gray-2 leading-normal md:text-center'>Every plan includes:</p>
        <div className='flex md:justify-center'>
          <ul className='grid grid-cols-1 justify-start [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:text-[2.375rem] [&>li]:leading-[100%] [&>li]:font-extrabold md:grid-cols-3 md:gap-x-20 md:gap-y-2'>
            <li className='text-it-blue-1'><Check /> Setup</li>
            <li><Check /> Onboarding</li>
            <li><Check /> Backup</li>
            <li><Check /> Security</li>
            <li><Check /> Support</li>
            <li><Check /> Update</li>
          </ul>
        </div>
        <img
          className='absolute -right-1/4 -bottom-4 w-72 md:w-1/2 md:h-full md:-right-4 md:top-1/2 md:-translate-y-1/2  object-contain -z-10 md:hidden'
          src={illustrations.src}
          width={illustrations.width}
          height={illustrations.height}
        />
      </section>
      <section className='px-3 flex justify-center items-center gap-4 flex-wrap'>
        <img src={pc.src} width={pc.width} height={pc.height} />
        <h1 className='text-5xl font-extrabold leading-[87%] text-center max-w-xs'>
          <span className='text-it-blue-1'>You handle your business</span><br /> We handle your IT.
        </h1>
      </section>
      <section className='px-2 md:px-0 flex gap-4 justify-center flex-wrap'>
        <div className='it-card bg-it-gray-4'>
          <Security />
          <p>Device Security <span className='text-it-blue-1'>for All.</span></p>
          <p>Privacy for <span className='text-it-blue-1'>Everyone.</span></p>
        </div>
        <div className='it-card bg-it-blue-1'>
          <Hands />
          <p>Onboarding as Simple as<br /><span className='text-white'>Receiving an Email</span></p>
        </div>
        <div className='it-card bg-it-black-1'>
          <Repairs />
          <p className='text-white'>
            <span className='text-it-blue-1'>On-Site Repairs</span><br /> No Waiting,<br /> No Delays.
          </p>
          <div className='text-white flex items-center gap-2 text-sm'>
            <p>Proudly Serving Miami and Nearby Areas</p>
            <PlusCircle />
          </div>
        </div>
        <div className='it-card bg-it-red'>
          <Support />
          <p>Remote Support <span className='text-white'>No Waiting,<br /> No Delays.<br /> (Worldwide)</span></p>
        </div>
        <div className='it-card bg-it-purple'>
          <Language />
          <p>Hablamos <span className='text-white'>Español.</span></p>
          <button className='btn w-56'>Cambiar a Español</button>
        </div>
      </section>
      <h1 className='pl-4 text-it-blue-1 text-5xl font-extrabold md:text-center'>Explore</h1>
      <section className='flex justify-center'>
        <Tabs>
          {tabConstrols.map(tabControl =>
            <Tabs.Tab
              key={`tab-${tabControl.id}`}
              value={tabControl.value}
              className='tab-md md:text-2xl md:tab-lg'
              label={tabControl.label}
            >
              {tabControl.label}
            </Tabs.Tab>
          )}
        </Tabs>
      </section>
    </>
  )
}
