import React from 'react'
import Link from 'next-intl/link'
import Logo from '@/components/shared/icons/logo'
import WhatsappLogo from '@/components/shared/icons/whatsapp-logo'
import PhoneInputClient from '@/components/shared/phone-input-client'
import pc from '@/assets/images/pc.webp'
import Phone from '@/components/shared/icons/phone'
import PlanIncludesList from '@/components/app/home/plan-includes-list'
import Security from '@/components/shared/icons/security'
import Hands from '@/components/shared/icons/hands'
import Repairs from '@/components/shared/icons/repairs'
import PlusCircle from '@/components/shared/icons/plus-circle'
import Support from '@/components/shared/icons/support'
import Language from '@/components/shared/icons/language'
import sun from '@/assets/images/sun.webp'
import sunbg from '@/assets/images/sunbg.webp'
import red from '@/assets/images/red.webp'
import { useTranslations } from 'next-intl'
import { brands } from '@/constants/brands'
import { industries } from '@/constants/home-tab-industries'
import Industry from '../../(home)/(root)/@tags/industries/industry'
import woman from '@/assets/images/woman.webp'

export default function Home () {
  const t = useTranslations('home')
  return (
    <div className='w-full flex flex-col justify-start gap-12 min-h-screen mb-16'>
      {/* hero */}
      <section
        style={{
          background: 'rgb(0,0,0)',
          backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0.05) 100%), url("images/hero.webp")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        className='min-h-[47.625rem] relative py-4 px-2 md:px-0 flex flex-col justify-start gap-8 md:flex-row md:justify-center md:items-center md:gap-36'
      >
        <div className='flex flex-col justify-start gap-7'>
          <header className='flex justify-center md:justify-start'>
            <Link href='/'><Logo width='100%' /></Link>
          </header>
          <h1
            className='text-6xl text-shadow-lg shadow-it-black-opacy font-extrabold text-white leading-[87%] [&>span]:text-it-blue-1 w-[300px] md:w-full'
          >
            Business <span>IT Support</span>
          </h1>
          <p className='text-5xl text-shadow-lg shadow-it-black-opacy font-semibold text-white [&>span]:text-it-blue-1 leading-[87%]'>
            Simplify IT with Our<br />
            Comprehensive<br />
            <span>All-Inclusive</span><br />
            Subscription Plans.
          </p>
          <p className='text-2xl text-shadow-lg shadow-it-black-opacy font-normal leading-none text-white [&>a]:text-it-blue-1 [&>a]:font-bold'>
            Starting at Just $49 per Month per User.<br /> <Link href='/pricing'>View Pricing</Link>
          </p>
        </div>
        <form className='max-w-sm p-6 rounded-2xl bg-white shadow-md flex flex-col justify-start'>
          <p className='text-3xl font-bold leading-none [&>span]:text-it-blue-1 text-center'>
            Get a <span>Free</span><br /> Consultation
          </p>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                Company Name
              </span>
            </label>
            <input
              type='text'
              placeholder='Enter the name of your business'
              className='input input-bordered w-full rounded-full it-input-border'
              name='businessName'
              required
            />
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                Email Address
              </span>
            </label>
            <input
              type='email'
              placeholder='example@mail.com'
              className='input input-bordered w-full rounded-full it-input-border'
              name='email'
              required
            />
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                Phone Number
              </span>
            </label>
            <PhoneInputClient />
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                Website URL
              </span>
            </label>
            <input
              type='text'
              placeholder='Enter your website address'
              className='input input-bordered w-full rounded-full it-input-border'
              name='website'
            />
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                Your Name
              </span>
            </label>
            <input
              type='text'
              placeholder='Enter your Name'
              className='input input-bordered w-full rounded-full it-input-border'
              name='fullName'
              required
            />
          </div>
          <button type='submit' className='btn btn-active btn-neutral rounded-full mt-4 capitalize'>
            Request
          </button>
        </form>
        <div
          className='hidden md:flex flex-col items-center justify-start gap-2 absolute bottom-24 right-12'
        >
          <p
            className='text-xl text-it-green-1 font-extrabold leading-[87%] text-center'
          >
            Ready<br /> to Chat?
          </p>
          <a href='https://wa.me/13052042754' target='_blank' rel='noreferrer'>
            <WhatsappLogo />
          </a>
        </div>
      </section>
      {/* section two */}
      <section className='flex flex-col justify-start gap-6 px-2 md:px-0'>
        <h2 className='text-6xl text-center font-extrabold text-black leading-[87%] [&>span]:text-it-blue-1'>
          <span>IT Services</span> Provider
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 md:items-center gap-6 md:gap-12'>
          <p className='text-5xl font-extrabold leading-[87%] [&>span]:text-it-blue-1 text-left md:text-right'>
            <span>You handle<br /> your business</span><br /> We handle<br /> your IT.
          </p>
          <div className='flex flex-col justify-start items-center gap-4'>
            <img src={pc.src} width={pc.width} height={pc.height} />
            <a
              href='tel:+13052042754'
              className='w-full btn btn-active btn-neutral rounded-full mt-4 capitalize'
              target='_blank' rel='noreferrer'
            >
              <span className='w-6 h-6 flex justify-center items-center bg-white rounded-full text-[#0b0c13]'><Phone width='12' height='13' /></span> Request a Callback
            </a>
          </div>
          <ul className='grid grid-cols-1 justify-start [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:text-[2.375rem] [&>li]:leading-[100%] [&>li]:font-extrabold [&>li>svg]:text-it-blue-1'>
            <PlanIncludesList
              list={[
                'Setup',
                'Onboarding',
                'Backup',
                'Security',
                'Support',
                'Update'
              ]}
            />
          </ul>
        </div>
      </section>
      {/* cards */}
      <section className='flex flex-col justify-start items-center gap-6 relative z-10'>
        <p
          className='text-6xl text-center font-extrabold text-black leading-[87%] [&>span]:text-it-blue-1 z-10'
        >
          What makes us<br /> <span>different?</span>
        </p>
        <img
          className='hidden absolute top-0 left-[7.88rem] z-[5] lg:block'
          src={red.src} width={red.width} height={red.height}
        />
        <div className='px-2 md:px-0 flex gap-8 justify-center max-w-[1210px] flex-wrap z-10'>
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
            <Link href='/new-home' locale={t('cards.language.locale')} className='btn w-56'>{t('cards.language.text-three')}</Link>
          </div>
        </div>
        <img
          className='absolute bottom-0 left-[12.5rem] z-[5]'
          src={sun.src} height={sun.height} width={sun.width}
        />
        <img
          className='absolute bottom-[6.8rem] right-[5.36rem] z-[5]'
          src={sunbg.src} width={sunbg.width} height={sunbg.height}
        />
      </section>
      {/* banner */}
      <section className='bg-banner h-[35.5rem] flex flex-col justify-center items-center gap-10 px-2 md:px-0'>
        <p className='text-7xl md:text-[5.625rem] text-shadow-lg shadow-it-black-opacy font-extrabold leading-[87%] text-white text-center [&>span]:text-it-blue-1'>
          Managed IT<br /> <span>Service Provider</span>
        </p>
        <p className='text-3xl leading-[87%] text-white text-center'>With our Innovative Solutions.</p>
        <div className='w-[19rem]'>
          <a
            href='tel:+13052042754'
            className='w-full btn btn-active rounded-full mt-4 capitalize'
            target='_blank' rel='noreferrer'
          >
            <span className='w-6 h-6 flex justify-center items-center rounded-full bg-black text-white'><Phone width='12' height='13' /></span> Request a Callback
          </a>
        </div>
      </section>
      {/* brands */}
      <section className='flex flex-col justify-start gap-6 items-center'>
        <div className='flex flex-col justify-start gap-2 pl-2 md:pl-0 md:text-center'>
          <h1 className='text-6xl font-extrabold leading-[83%]'>
            {t('tab-services.text-one.line-one')} <span className='text-it-blue-1'>{t('tab-services.text-one.line-two')}</span>
          </h1>
          <p className='text-xl text-it-gray-2'>{t('tab-services.text-two')}</p>
        </div>
        <div className='flex items-center flex-wrap gap-4 px-2 md:px-0 md:gap-x-24 justify-between md:justify-center w-full md:max-w-[1210px]'>
          {brands.map((brand, i) =>
            <img className='object-contain w-[9.125rem] h-[7.5rem]' key={`brands-${i}`} src={brand.src} width={brand.width} height={brand.height} loading='lazy' />
          )}
        </div>
      </section>
      {/* industries */}
      <section className='flex flex-col justify-start gap-8 items-center'>
        <p className='text-[4.375rem] leading-[87%] text-center [&>span]:text-it-blue-1 font-extrabold'>
          <span>Industries</span> We Serve
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-[1210px]'>
          <Industry
            data={industries[t('locale')].none.data}
            title={industries[t('locale')].none.title}
          />
          <Industry
            data={industries[t('locale')].consumers.data}
            title={industries[t('locale')].consumers.title}
          />
          <Industry
            data={industries[t('locale')].energy.data}
            title={industries[t('locale')].energy.title}
          />
          <Industry
            data={industries[t('locale')].manufacturing.data}
            title={industries[t('locale')].manufacturing.title}
          />
          <Industry
            data={industries[t('locale')].healthcare.data}
            title={industries[t('locale')].healthcare.title}
          />
          <Industry
            data={industries[t('locale')].retail.data}
            title={industries[t('locale')].retail.title}
          />
          {/* <Industry
            data={industries[t('locale')].educations.data}
            title={industries[t('locale')].educations.title}
          /> */}
          <Industry
            data={industries[t('locale')].financial.data}
            title={industries[t('locale')].financial.title}
          />
          <Industry
            data={industries[t('locale')].media.data}
            title={industries[t('locale')].media.title}
          />
        </div>
      </section>
      {/* end */}
      <section className='flex flex-col justify-start items-center'>
        <div className='w-full md:max-w-[1210px] flex flex-col justify-start gap-6 md:flex-row md:justify-center md:items-end'>
          <div className='px-2 md:px-0'>
            <p className='text-6xl md:text-[7rem] font-extrabold leading-[87%] [&>span]:text-it-blue-1'>
              Embrace<br /> <span>the Future</span>
            </p>
            <p className='text-lg md:text-2xl text-it-gray-1'>
              Building Tomorrow's Success Today on<br /> the Cloud.
            </p>
            <a
              href='tel:+13052042754'
              className='w-full md:max-w-[18rem] btn btn-active btn-neutral rounded-full mt-4 capitalize'
              target='_blank' rel='noreferrer'
            >
              <span className='w-6 h-6 flex justify-center items-center bg-white rounded-full text-[#0b0c13]'><Phone width='12' height='13' /></span> Request a Callback
            </a>
          </div>
          <div
            style={{
              background: 'linear-gradient(0deg, rgba(0,159,227,1) 0%, rgba(0,159,227,0) 100%)'
            }}
            className='h-96 relative flex justify-center w-full md:justify-start px-4 md:w-1/2 md:max-h-[25.75rem]'
          >
            <div className='h-full relative flex justify-center'>
              <img src={red.src} width={red.width} height={red.height} className='absolute top-[5.76rem] left-0 z-[5]' />
              <img src={sun.src} width={sun.width} height={sun.height} className='absolute left-[2rem] -bottom-[2.77rem] z-[5]' />
              <img className='h-full object-contain z-10' src={woman.src} width={woman.width} height={woman.height} alt='woman' loading='lazy' />
              <img src={sunbg.src} width={sunbg.width} height={sunbg.height} className='absolute top-[4.8rem] right-0' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
