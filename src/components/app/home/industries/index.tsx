'use client'
import React, { lazy } from 'react'
// import Industry from './industry'
// import { industries } from '@/constants/home-tab-industries'
// import { useTranslations } from 'next-intl'
import Await from '@/components/shared/await'

const IndustriesClient = lazy(async () => await import('./industries-client'))

// const Nodes = () => {
//   const t = useTranslations('home')
//   return (
//     <>
//       <Industry
//         data={industries[t('locale')].none.data}
//         title={industries[t('locale')].none.title}
//       />
//       <Industry
//         data={industries[t('locale')].consumers.data}
//         title={industries[t('locale')].consumers.title}
//       />
//       <Industry
//         data={industries[t('locale')].energy.data}
//         title={industries[t('locale')].energy.title}
//       />
//       <Industry
//         data={industries[t('locale')].manufacturing.data}
//         title={industries[t('locale')].manufacturing.title}
//       />
//       <Industry
//         data={industries[t('locale')].healthcare.data}
//         title={industries[t('locale')].healthcare.title}
//       />
//       <Industry
//         data={industries[t('locale')].retail.data}
//         title={industries[t('locale')].retail.title}
//       />
//       <Industry
//         data={industries[t('locale')].financial.data}
//         title={industries[t('locale')].financial.title}
//       />
//       <Industry
//         data={industries[t('locale')].media.data}
//         title={industries[t('locale')].media.title}
//       />
//     </>
//   )
// }

interface Props {
  locale: string
}

export default function Industries ({ locale }: Props) {
  return (
    <section className='flex flex-col justify-start gap-8 items-center'>
      <p className='text-[4.375rem] leading-[87%] text-center [&>span]:text-it-blue-1 font-extrabold'>
        <span>Industries</span> We Serve
      </p>
      <Await.Visible>
        <Await.Suspense fallback={
          <div className='w-full flex justify-center items-center'>
            <span className='loading loading-spinner loading-lg text-neutral' />
          </div>
        }
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-[1210px]'>
            <IndustriesClient
              locale={locale}
            />
          </div>
        </Await.Suspense>
      </Await.Visible>
    </section>
  )
}
