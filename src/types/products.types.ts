export interface Product {
  id: string
  active: boolean
  name: string
  description: string
  image: null
  metadata: ProductMetadata
  prices: Price[]
}

export interface ProductMetadata {
  index: string
  benefits: string
  it_lords: string
  assets: string
}

export interface Price {
  id: string
  product_id: string
  active: boolean
  description: null
  unit_amount: number
  currency: string
  type: string
  interval: string
  interval_count: number
  trial_period_days: null
  metadata: PriceMetadata
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PriceMetadata {
}
