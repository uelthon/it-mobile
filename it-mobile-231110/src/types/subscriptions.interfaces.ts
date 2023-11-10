export interface Subscriptions {
  en: {
    [k: string]: Subscription[]
  }
  es: {
    [k: string]: Subscription[]
  }
}
export type Subscription = {
  tag: 'title'
  value: string
} | {
  tag: 'price'
  value: string
} | {
  tag: 'description'
  value: string
} | {
  tag: 'list'
  value: List
} | {
  tag: 'sub-title'
  value: string
} | {
  tag: 'assets'
  value: string[]
}

export interface List {
  checkColor: string
  title?: string
  data: string[]
}
