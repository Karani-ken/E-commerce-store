import { Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { removeFromCart } from '../features/cartSlice'
function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemoveCartItem = (cartItem) =>{
    dispatch(removeFromCart(cartItem))
  }
  return (
    <div className='w-full min-h-[60vh] bg-white'>
      <h1 className='font-black text-3xl  text-black'>Welcome to your Shopping Cart</h1>
      {cart.cartItems.length === 0 ? (
        <>
          <p className='text-2xl p-3 text-rose-700'>Your cart is currently empty!!!</p>

          <Link to="/" className='bg-blue-600 p-1 border-2 border-red-700 rounded-md hover:text-purple-50'>Start shopping</Link>
        </>) : (
        <div className='m-4'>
          <table className='w-full m-3'>
            <thead className='border-b-[1px] border-black'>
              <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Product</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Quantity</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems?.map(cartItem => (
                <tr key={cartItem.id}>
                  <td className='p-3 text-sm'>
                    <div className='flex justify-start'>
                      <img src={cartItem.image} alt="" className='w-16 h-16' />
                      <span className='p-3'>
                        <h3 className='font-black'>{cartItem.name}</h3>
                        <p>{cartItem.desc}</p>
                        <button className='text-rose-400 underline' onClick={()=> handleRemoveCartItem(cartItem)}>remove</button>
                      </span>

                    </div>
                  </td>
                  <td className='text-left font-bold text-green-600 '>${cartItem.price}</td>
                  <td>
                    <div className='flex justify-start items-center  border-[1px] w-24 rounded-lg shadow-md shadow-black'>
                      <button className=' text-rose-400 font-black m-2 '>-</button>
                      <p className='p-3 m-2'>{cartItem.cartQuantity}</p>
                      <button className=' text-blue-500 font-black m-2 '>+</button>
                    </div>
                  </td>
                  <td>
                    <div className='text-center justify-start items-center'>
                      <p className='font-black text-orange-500'>${cartItem.price * cartItem.cartQuantity}</p>
                    </div>
                  </td>
                </tr>

              ))}

            </tbody>
          </table>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center p-5 m-3 border-t-[1px] border-black'>

              <button className='border-[1px] text-sm p-3 rounded-lg w-52'>Clear Cart</button>
              <div className='shadow-sm shadow-black rounded-lg p-1 '>
                <div className="flex justify-center items-start">
                  <span className="font-bold mx-10 text-2xl">Subtotal:</span>
                  <span className="text-rose-500 font-bold mx-10 p-1">
                    ${cart.cartTotalAmount}
                  </span>
                </div>
                <div>

                  <p className='text-sm m-3'>Taxes and Shippings Calculated at Checkout</p>
                </div>

                <button className='bg-blue-700 text-white w-full p-1 rounded-md my-2'>Check Out</button>
                <button className=' p-1 border-2 border-black rounded-md w-full  shadow-md hover:text-rose-400 my-2'> <Link to="/" >Continue shopping</Link> </button>
              </div>

            </div>

          </div>





        </div>



      )
      }





    </div>
  )
}

export default Cart