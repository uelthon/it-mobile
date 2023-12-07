'use client'
import React from 'react'
// import pdfMake from 'pdfmake/build/pdfmake.min'
// import pdfFonts from 'pdfmake/build/vfs_fonts'
import Download from '@/components/shared/icons/download'
import { downloadTermsNodes } from '@/actions/terms.actions'

export default function DownloadPdf () {
  const handleClick = async () => {
    const { data: document } = await downloadTermsNodes()
    const pdfMake = (await import('pdfmake/build/pdfmake.min')).default
    const pdfFonts = (await import('pdfmake/build/vfs_fonts')).default
    pdfMake.vfs = pdfFonts.pdfMake.vfs
    pdfMake.createPdf(document).open()
  }

  return (
    <button onClick={handleClick} className='flex items-center justify-center gap-2 font-semibold text-base text-it-blue-1'>
      <Download />
      <p>
        Download Terms and Conditions
      </p>
    </button>
  )
}
