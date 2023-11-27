import { agreeTermsOfServices, getTermsOfServices } from '@/actions/auth.actions'
import Download from '@/components/shared/icons/download'
import Logo from '@/components/shared/icons/logo'
import Submit from '@/components/shared/submit'
import Link from 'next/link'
import React from 'react'
import FormTerms from './form-terms'

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className='text-base font-bold'>
      {children}
    </h2>
  )
}

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <p>
      {children}
    </p>
  )
}

export default async function TermsOfServices () {
  const { data, error } = await getTermsOfServices()
  if (!error && Array.isArray(data) && data.length > 0) {
    return null
  }
  if (Array.isArray(data) && data[0]?.isAgree) {
    return null
  }
  return (
    <div className='fixed top-0 left-0 w-full h-screen z-[110] bg-home bg-white flex flex-col justify-start items-center py-20 overflow-auto'>
      <div className='w-full bg-white shadow-md flex flex-col justify-start gap-11 md:max-w-[56rem] p-4 md:p-10 rounded-2xl'>
        <Link href='/'>
          <Logo width='100%' />
        </Link>
        <div className='flex flex-col justify-start gap-4'>
          <div className='flex flex-col justify-start items-center gap-4'>
            <div className='text-center'>
              <h1 className='text-3xl font-bold text-it-blue-1 leading-normal'>Terms and Conditions</h1>
              <p className='text-base leading-[0%]'>Review the terms and conditions to continue.</p>
            </div>
            <div className='divider self-center w-full md:max-w-sm my-0' />
          </div>
          <h2 className='text-base font-bold text-it-blue-1'>A. Software License Agreement</h2>
          <SubTitle>
            1. Introduction
          </SubTitle>
          <Content>
            These Terms and Conditions ("Agreement") govern your use of [Your Company/Website Name] ("Service") provided by [Your Company Name] ("Company," "we," "us," or "our"). By using the Service, you agree to be bound by this Agreement, including any future revisions. If you do not agree to these terms, please do not use the Service.
          </Content>
          <SubTitle>
            2. Eligibility
          </SubTitle>
          <Content>
            You must be at least 18 years old to use this Service. By using the Service, you represent and warrant that you are of legal age.
          </Content>
          <SubTitle>
            3. User Account
          </SubTitle>
          <Content>
            You may be required to create an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account information and password. You are also responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </Content>
          <SubTitle>
            4. Content
          </SubTitle>
          <Content>
            a. You may submit, upload, or post content to the Service. You retain ownership of any intellectual property rights you hold in that content. By submitting, uploading, or posting content, you grant the Company a non-exclusive, worldwide, royalty-free, and transferable license to use, reproduce, distribute, and display such content in connection with the Service.
          </Content>
          <Content>
            b. You agree not to upload or post content that is illegal, infringing on intellectual property rights, harmful, abusive, defamatory, or in violation of any applicable laws.
          </Content>
          <SubTitle>
            5. Privacy
          </SubTitle>
          <Content>
            Our Privacy Policy [link to your privacy policy] governs the collection, use, and sharing of personal information provided by users. By using the Service, you consent to the terms of our Privacy Policy.
          </Content>
          <SubTitle>
            6. Termination
          </SubTitle>
          <Content>
            We reserve the right to suspend or terminate your access to the Service at our discretion, with or without cause and without notice.
          </Content>
          <SubTitle>
            7. Disclaimer of Warranties
          </SubTitle>
          <Content>
            The Service is provided "as is" and "as available." We make no warranties, express or implied, regarding the Service's reliability, availability, or suitability for a particular purpose.
          </Content>
          <div className='flex items-center justify-center gap-2 font-semibold text-base text-it-blue-1'>
            <Download />
            <p>
              Download Terms and Conditions
            </p>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Link className='btn text-white bg-it-gray-2 hover:bg-it-gray-3 rounded-full capitalize' href='/'>
              Decline
            </Link>
            <FormTerms serverAction={agreeTermsOfServices}>
              <Submit
                type='submit'
                label='Accept'
                loading={<span className='loading loading-dots loading-sm' />}
                className='w-full btn bg-black hover:bg-it-black-1 text-white rounded-full capitalize'
              />
            </FormTerms>
          </div>
        </div>
      </div>
    </div>
  )
}
