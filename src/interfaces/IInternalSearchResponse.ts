// Generated by https://quicktype.io
// /api/items?search=string

import { Author } from './IAuthor'

export interface IInternalSearchResponse {
  author: Author
  categories: ICategory[]
  items: IItem[]
}

export interface ICategory {
  id: string
  name: string
}

export interface IItem {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
  seller_address: string // add
}

export interface Price {
  currency: string
  amount: number
  decimals: number
}
