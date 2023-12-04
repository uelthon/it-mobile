export interface SubscriptionUser {
  id: string
  user_id: string
  status: string
  metadata: Metadata
  price_id: string
  quantity: null
  cancel_at_period_end: boolean
  created: Date
  current_period_start: Date
  current_period_end: Date
  ended_at: null
  cancel_at: null
  canceled_at: null
  trial_start: null
  trial_end: null
}

export interface Metadata {
  price_metadata: string
}
