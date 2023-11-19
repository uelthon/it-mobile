'use client'
import React from 'react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

export default function PhoneInputClient () {
  return (
    <PhoneInput
      defaultCountry='us'
      forceDialCode
      inputStyle={{
        borderRadius: '0 9999px 9999px 0',
        paddingRight: '1rem',
        width: '100%',
        height: '3rem',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: '#161616',
        borderLeft: 'none'
      }}
      countrySelectorStyleProps={{
        buttonStyle: {
          borderRadius: '9999px 0 0 9999px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          height: '3rem',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          borderColor: '#161616',
          borderRight: 'none'
        }
      }}
      inputProps={{
        name: 'phone',
        required: true
      }}
      countries={[
        ['United States', 'us', '1', '(...) ...-....', 0],
        ['Nicaragua', 'ni', '505']
      ]}
    />
  )
}
