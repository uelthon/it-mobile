export interface ZohoAccessToken {
  access_token: string
  api_domain: string
  token_type: string
  expires_in: number
}

export interface ZohoContactResponse {
  data: Datum[]
}

export interface Datum {
  code: string
  details: Details
  message: string
  status: string
}

export interface Details {
  Modified_Time: Date
  Modified_By: EdBy
  Created_Time: Date
  id: string
  Created_By: EdBy
  $approval_state: string
}

export interface EdBy {
  name: string
  id: string
}
