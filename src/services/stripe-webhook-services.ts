/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-throw-literal */
import stripe from '@/libs/stripe'
import supabaseAdmin from '@/libs/supabase/supabase-admin'

export const createOrRetrieveCustomer = async ({
  email,
  uuid
}: {
  email: string
  uuid: string
}) => {
  const { data, error } = await supabaseAdmin
    .from('customers')
    .select('stripe_customer_id')
    .eq('id', uuid)
    .single()
  if (error || !data?.stripe_customer_id) {
    // No customer record found, let's create one.
    const customerData: { metadata: { supabaseUUID: string }, email?: string } =
      {
        metadata: {
          supabaseUUID: uuid
        }
      }
    if (email) customerData.email = email
    const customer = await stripe.customers.create(customerData)
    // Now insert the customer ID into our Supabase mapping table.
    const { error: supabaseError } = await supabaseAdmin
      .from('customers')
      .insert([{ id: uuid, stripe_customer_id: customer.id }])
    if (supabaseError) throw supabaseError
    console.log(`New customer created and inserted for ${uuid}.`)
    return customer.id
  }
  return data.stripe_customer_id
}
