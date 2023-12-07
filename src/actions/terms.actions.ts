'use server'

import { TDocumentDefinitions } from 'pdfmake/interfaces'

export const downloadTermsNodes = async () => {
  const document: TDocumentDefinitions = {
    content: [
      {
        text: 'Terms and Conditions',
        style: 'header'
      },
      {
        text: 'Review the terms and conditions to continue.\n\n',
        style: 'subheader'
      },
      {
        text: 'A. Software License Agreement\n\n',
        style: 'title'
      },
      {
        text: '1. Introduction',
        style: 'subtitle'
      },
      {
        text: 'These Terms and Conditions ("Agreement") govern your use of [Your Company/Website Name] ("Service") provided by [Your Company Name] ("Company," "we," "us," or "our"). By using the Service, you agree to be bound by this Agreement, including any future revisions. If you do not agree to these terms, please do not use the Service.',
        style: 'content'
      },
      {
        text: '2. Eligibility',
        style: 'subtitle'
      },
      {
        text: 'You must be at least 18 years old to use this Service. By using the Service, you represent and warrant that you are of legal age.',
        style: 'content'
      },
      {
        text: '3. User Account',
        style: 'subtitle'
      },
      {
        text: 'You may be required to create an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account information and password. You are also responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.',
        style: 'content'
      },
      {
        text: '4. Content',
        style: 'subtitle'
      },
      {
        text: 'a. You may submit, upload, or post content to the Service. You retain ownership of any intellectual property rights you hold in that content. By submitting, uploading, or posting content, you grant the Company a non-exclusive, worldwide, royalty-free, and transferable license to use, reproduce, distribute, and display such content in connection with the Service.\n\nb. You agree not to upload or post content that is illegal, infringing on intellectual property rights, harmful, abusive, defamatory, or in violation of any applicable laws.',
        style: 'content'
      },
      {
        text: '5. Privacy',
        style: 'subtitle'
      },
      {
        text: 'Our Privacy Policy [link to your privacy policy] governs the collection, use, and sharing of personal information provided by users. By using the Service, you consent to the terms of our Privacy Policy.',
        style: 'content'
      },
      {
        text: '6. Termination',
        style: 'subtitle'
      },
      {
        text: 'We reserve the right to suspend or terminate your access to the Service at our discretion, with or without cause and without notice.',
        style: 'content'
      },
      {
        text: '7. Disclaimer of Warranties',
        style: 'subtitle'
      },
      {
        text: 'The Service is provided "as is" and "as available." We make no warranties, express or implied, regarding the Service\'s reliability, availability, or suitability for a particular purpose.',
        style: 'content'
      }
    ],
    styles: {
      header: {
        fontSize: 24,
        bold: true,
        color: '#009FE3',
        alignment: 'center'
      },
      subheader: {
        fontSize: 12,
        alignment: 'center'
      },
      title: {
        fontSize: 12,
        bold: true,
        color: '#009FE3'
      },
      subtitle: {
        fontSize: 12,
        bold: true,
        margin: [0, 0, 0, 16]
      },
      content: {
        fontSize: 12,
        margin: [0, 0, 0, 16]
      }
    }
  }
  return {
    data: document
  }
}
