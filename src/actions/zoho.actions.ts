'use server'
import {
  ZOHO_BASE_URL,
  ZOHO_CLIENT_ID,
  ZOHO_SECRET_ID,
  ZOHO_REFRESH_TOKEN,
  ZOHO_ACCOUNTS_URL
} from '@/constants/zoho'
import { stringDivider } from '@/libs/stringDivider'
import { ZohoAccessToken, ZohoContactResponse } from '@/types/zoho.types'

export const getAccessToken = async () => {
  const url = `${ZOHO_ACCOUNTS_URL}/oauth/v2/token?client_id=${ZOHO_CLIENT_ID}&client_secret=${ZOHO_SECRET_ID}&refresh_token=${ZOHO_REFRESH_TOKEN}&grant_type=refresh_token`
  const res = await fetch(url, {
    method: 'POST'
  })
  if (!res.ok) {
    return {
      data: null,
      error: 'Zoho refresh token error'
    }
  }
  const data = await res.json() as ZohoAccessToken
  return {
    data,
    error: null
  }
}

interface BodyCreateContact {
  businessName: string
  email: string
  phone: string
  website: string
  fullName: string
}

export const createContact = async (currentState = { error: null, data: null }, formData: FormData) => {
  try {
    const { data: dataToken, error: errorToken } = await getAccessToken()
    if (errorToken || !dataToken) {
      console.log(errorToken)
      return {
        error: errorToken || 'Zoho refresh token error',
        data: null
      }
    }
    const contact = Object.fromEntries(formData) as unknown as BodyCreateContact
    const [firstName, lastName] = stringDivider(contact.fullName, 2)
    const companyBody = {
      data: [
        {
          Account_Name: contact.businessName,
          Phone: contact.phone,
          Website: contact.website
        }
      ]
    }
    const resCompany = await fetch(`${ZOHO_BASE_URL}/bigin/v2/Accounts`, {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${dataToken.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(companyBody)
    })
    if (!resCompany.ok) {
      return {
        error: 'create company failed',
        data: null
      }
    }
    const dataCompany = await resCompany.json() as ZohoContactResponse

    const body = {
      data: [
        {
          Account_Name: {
            id: dataCompany.data[0].details.id
          },
          First_Name: firstName,
          Last_Name: lastName,
          Email: contact.email,
          Mobile: contact.phone,
          Phone: contact.phone,
          Website_URL: contact.website,
          Email_Opt_Out: false
        }
      ]
    }
    const res = await fetch(`${ZOHO_BASE_URL}/bigin/v2/Contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${dataToken.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (!res.ok) {
      const data = await res.json()
      console.log(JSON.stringify(data))
      console.log('create contact failed')
      return {
        data: null,
        error: 'create contact failed'
      }
    }
    const data = await res.json() as ZohoContactResponse
    return {
      data,
      error: null
    }
  } catch (error) {
    console.log(error)
    return {
      error: 'server error',
      data: null
    }
  }
}
