'use server'
import { cookies } from 'next/headers'
import { Cart } from '@/types/cart.types'
import { getManyProducts } from './products.actions'

export const getCart = async () => {
  const cartCookie = cookies().get('cart')
  const cartValue = typeof cartCookie?.value === 'string' ? JSON.parse(cartCookie.value) as Cart : { cart: [] }
  const products = await getManyProducts({ ids: cartValue.cart.map(item => item.product) })
  const cart = cartValue.cart.map(item => {
    const product = products.find(p => p.id === item.product)
    return {
      ...item,
      value: product
    }
  })
  return {
    data: cart,
    total: cart.reduce((prev, curr) => prev + Number(curr.quantity), 0),
    amount: cart.reduce((prev, curr) => prev + (Number(curr.quantity) * (Number(curr.value?.prices[0].unit_amount) / 100)), 0)
  }
}

export const addProductCart = async (formData: FormData) => {
  const product = formData.get('product')
  const quantity = formData.get('quantity')
  if (typeof product !== 'string' || typeof product !== 'string') {
    return
  }
  const cartCookie = cookies().get('cart')
  const cartValue = typeof cartCookie?.value === 'string' ? JSON.parse(cartCookie.value) as Cart : { cart: [] }
  const exist = cartValue.cart.find(item => item.product === product)
  if (exist) {
    const newCart = {
      cart: cartValue.cart.map(item => item.product !== product ? item : { ...item, quantity: Number(quantity) })
    }
    cookies().set('cart', JSON.stringify(newCart))
    return
  }
  const newCart = {
    cart: [...cartValue.cart, { product, quantity: Number(quantity) }]
  }
  cookies().set('cart', JSON.stringify(newCart))
}

export const removeProductCart = async (formData: FormData) => {
  const product = formData.get('product')
  const cartCookie = cookies().get('cart')
  const cartValue = typeof cartCookie?.value === 'string' ? JSON.parse(cartCookie.value) as Cart : { cart: [] }
  const newCart = {
    cart: cartValue.cart.filter(item => item.product !== product)
  }
  cookies().set('cart', JSON.stringify(newCart))
}
