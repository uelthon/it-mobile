import { addProductCart, getCart, removeProductCart } from '@/actions/cart.actions'
import Minus from '@/components/shared/icons/minus'
import Plus from '@/components/shared/icons/plus'
import Trash from '@/components/shared/icons/trash'
import Submit from '@/components/shared/submit'

export default async function CartProducts () {
  const cart = await getCart()
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th className='font-normal'>Service</th>
            <th className='font-normal'>Users</th>
            <th className='font-normal'>SubTotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.data.map(item =>
            <tr key={item.product}>
              <td className='text-lg font-bold capitalize'>{item.value?.name}</td>
              <td>
                <div className='flex items-center gap-2'>
                  <form action={addProductCart} className='flex items-center justify-center'>
                    <input type='hidden' readOnly value={item.product} name='product' />
                    <input type='hidden' readOnly value={Number(item.quantity) <= 1 ? 1 : Number(item.quantity) - 1} name='quantity' />
                    <Submit type='submit' label={<Minus />} />
                  </form>
                  <p>
                    {item.quantity}
                  </p>
                  <form className='flex items-center justify-center' action={addProductCart}>
                    <input type='hidden' readOnly value={item.product} name='product' />
                    <input type='hidden' readOnly value={Number(item.quantity) + 1} name='quantity' />
                    <Submit
                      type='submit'
                      label={<Plus />}
                    />
                  </form>
                </div>
              </td>
              <td className='text-lg font-bold'>
                ${(Number(item.quantity) * (Number(item.value?.prices[0].unit_amount) / 100)).toFixed(2)}
              </td>
              <td>
                <form action={removeProductCart}>
                  <input type='hidden' readOnly value={item.product} name='product' />
                  <Submit type='submit' label={<Trash />} />
                </form>
              </td>
            </tr>
          )}
          <tr>
            <td />
            <td />
            <td>
              <p>
                Monthly plan
              </p>
              <p className='text-lg font-bold'>
                ${Number(cart.amount).toFixed(2)}
              </p>
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  )
}
