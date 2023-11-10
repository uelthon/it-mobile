import React from 'react'
import pc from '@/assets/images/pc.webp'
import Security from '@/components/shared/icons/security'
import Hands from '@/components/shared/icons/hands'
import Repairs from '@/components/shared/icons/repairs'
import PlusCircle from '@/components/shared/icons/plus-circle'
import Support from '@/components/shared/icons/support'
import Language from '@/components/shared/icons/language'
import Tabs from '@/components/app/home/tabs-v2'
import { tabConstrols } from '@/constants/home-tab-control'
import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
// import hero from '@/assets/images/hero-section/hero-section.gif'
import PlanIncludesList from '@/components/app/home/plan-includes-list'

export default function Home () {
  const t = useTranslations('home')
  return (
    <>
      <section className='flex justify-start items-center md:justify-end gap-8'>
        <div className='flex flex-col justify-start gap-3 px-3 md:p-0 md:flex-shrink-0'>
          <h1 className='text-[2.375rem] font-extrabold leading-[87%] max-w-md md:text-5xl'>
            {t('title.line1')}<br /> <span className='text-it-blue-1'>{t('title.line2')}</span><br /> {t('title.line3')}
          </h1>
          <p className='text-2xl text-it-gray-2 leading-[87%] max-w-md'>
            {t('price.line1')}<br /><Link href='/pricing' className='text-it-blue-1 [1.375rem] font-bold'>{t('price.line2')}</Link>
          </p>
        </div>
        <video className='hidden w-1/2 h-[280px] object-contain  md:block' autoPlay loop controls={false} muted playsInline width={373} height={252}>
          <source src='/images/hero-section.webm' type='video/webm' />
        </video>
        {/* <img
          className='hidden w-1/2 h-[280px] object-contain  md:block'
          src={hero.src}
          width={hero.width}
          height={hero.height}
        /> */}
      </section>
      <section className='pl-3 relative overflow-hidden pb-8 w-full'>
        <p className='text-lg text-it-gray-2 leading-normal md:text-center'>{t('title-plan-includes')}</p>
        <div className='flex md:justify-center'>
          <ul className='grid grid-cols-1 justify-start [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:text-[2.375rem] [&>li]:leading-[100%] [&>li]:font-extrabold md:grid-cols-3 md:gap-x-20 md:gap-y-2 [&>li>svg]:text-it-blue-1'>
            <PlanIncludesList
              list={[
                t('plan-includes.item-zero'),
                t('plan-includes.item-one'),
                t('plan-includes.item-two'),
                t('plan-includes.item-three'),
                t('plan-includes.item-four'),
                t('plan-includes.item-five')
              ]}
            />
          </ul>
        </div>
        <video className='absolute -right-1/4 -bottom-4 w-72 md:w-1/2 md:h-full md:-right-4 md:top-1/2 md:-translate-y-1/2  object-contain -z-10 md:hidden' autoPlay loop controls={false} muted playsInline width={373} height={252}>
          <source src='/images/hero-section.webm' type='video/webm' />
        </video>
        {/* <img
          className='absolute -right-1/4 -bottom-4 w-72 md:w-1/2 md:h-full md:-right-4 md:top-1/2 md:-translate-y-1/2  object-contain -z-10 md:hidden'
          src={hero.src}
          width={hero.width}
          height={hero.height}
        /> */}
      </section>
      <section className='px-3 flex justify-center items-center gap-4 flex-wrap'>
        <img src={pc.src} width={pc.width} height={pc.height} />
        <h1 className='text-5xl font-extrabold leading-[87%] text-center max-w-xs'>
          <span className='text-it-blue-1'>{t('pc.line-one')}</span><br /> {t('pc.line-two')}
        </h1>
      </section>
      <section className='px-2 md:px-0 flex gap-8 justify-center flex-wrap'>
        <div className='it-card bg-it-gray-4'>
          <Security />
          <p>
            {t('cards.security.text-one')}<br />
            <span className='text-it-blue-1'>
              {t('cards.security.text-two')}
            </span>
          </p>
          <p>
            {t('cards.security.text-three')}<br />
            <span className='text-it-blue-1'>
              {t('cards.security.text-four')}
            </span>
          </p>
        </div>
        <div className='it-card bg-it-blue-1'>
          <Hands />
          <p>
            {t('cards.hands.text-one')}<br />
            <span className='text-white'>
              {t('cards.hands.text-two')}
            </span>
          </p>
        </div>
        <div className='it-card bg-it-black-1'>
          <Repairs />
          <p className='text-white'>
            <span className='text-it-blue-1'>
              {t('cards.repairs.text-one')}
            </span><br /> {t('cards.repairs.text-two')}<br /> {t('cards.repairs.text-three')}
          </p>
          <div className='text-white flex items-center gap-2 text-sm'>
            <p>{t('cards.repairs.text-four')}</p>
            <PlusCircle />
          </div>
        </div>
        <div className='it-card bg-it-red'>
          <Support />
          <p>
            {t('cards.support.text-one')}<br />
            <span className='text-white'>
              {t('cards.support.text-two')}<br /> {t('cards.support.text-three')}<br /> {t('cards.support.text-four')}
            </span>
          </p>
        </div>
        <div className='it-card bg-it-purple'>
          <Language />
          <p>{t('cards.language.text-one')} <span className='text-white'>{t('cards.language.text-two')}</span></p>
          <Link href='/' locale={t('cards.language.locale')} className='btn w-56'>{t('cards.language.text-three')}</Link>
        </div>
      </section>
      <h1 className='pl-4 text-it-blue-1 text-6xl font-extrabold md:text-center' id='tabs'>
        {t('explore')}
      </h1>
      <section className='flex justify-center'>
        <Tabs>
          {tabConstrols[t('locale') as 'en' | 'es'].map(tabControl =>
            <Tabs.Tab
              key={`tab-${tabControl.id}`}
              value={tabControl.value}
              className='tab-md md:text-2xl md:tab-lg'
              label={tabControl.label}
              includes={tabControl.includes}
            >
              {tabControl.label}
            </Tabs.Tab>
          )}
        </Tabs>
      </section>
    </>
  )
}
