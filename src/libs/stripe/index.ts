import Stripe from 'stripe'

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? '',
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2023-10-16',
    // Register this as an official Stripe plugin.
    // https://stripe.com/docs/building-plugins#setappinfo
    appInfo: {
      name: 'IT Lords -Subscription',
      version: '0.1.0'
    }
  }
)

export default stripe
