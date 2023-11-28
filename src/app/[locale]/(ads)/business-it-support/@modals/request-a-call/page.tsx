import { createCall } from '@/actions/zoho.actions'
import Form from './form'
import PhoneInputClient from '@/components/shared/phone-input-client'
import Submit from '@/components/shared/submit'
import { useTranslations } from 'next-intl'
import React from 'react'
import Close from './close'

export default function RequestACall () {
  const t = useTranslations('home')
  return (
    <div className='fixed top-0 left-0 w-full h-screen z-[100] bg-black bg-opacity-50 flex justify-center items-center px-2 py-4 md:px-0'>
      <div className='relative w-full md:max-w-sm'>
        <Close />
        <Form serverAction={createCall} className='w-full p-6 rounded-2xl bg-white shadow-md flex flex-col justify-start'>
          <p className='text-3xl font-bold leading-none [&>span]:text-it-blue-1 text-center'>
            {t('request-call.title.line-one')}<br /> <span>{t('request-call.title.line-two')}</span>
          </p>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                {t('form-contact.fields.company.label')}
              </span>
            </label>
            <input
              type='text'
              placeholder={t('form-contact.fields.company.place')}
              className='input input-bordered w-full rounded-full it-input-border'
              name='businessName'
              required
            />
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                {t('form-contact.fields.phone.label')}
              </span>
            </label>
            <PhoneInputClient />
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-base'>
                {t('form-contact.fields.name.label')}
              </span>
            </label>
            <input
              type='text'
              placeholder={t('form-contact.fields.name.place')}
              className='input input-bordered w-full rounded-full it-input-border'
              name='fullName'
              required
            />
          </div>
          <Submit
            type='submit'
            className='btn btn-active btn-neutral rounded-full mt-4 capitalize'
            label={t('form-contact.submit')}
            loading={<span className='loading loading-dots loading-sm' />}
          />
        </Form>
      </div>
    </div>
  )
}
