'use server'
import { cookies } from 'next/headers'
import supabaseServer from '@/libs/supabase/supabase-server'
import { Product } from '@/types/products.types'

export const getAllProducts = async () => {
  const supabase = supabaseServer({ cookies })
  const { data, error } = await supabase.from('products')
    .select('*,prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' })
  const products = data ? data as Product[] : []
  return {
    data: products,
    error
  }
}

interface GetManyProducts {
  ids: string[]
}

export const getManyProducts = async ({ ids }: GetManyProducts) => {
  const supabase = supabaseServer({ cookies })
  const { data, error } = await supabase.from('products')
    .select('*,prices(*)')
    .in('id', ids)
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' })
  if (error) {
    console.log(error.message)
  }
  const products = data ? data as Product[] : []
  return products
}
