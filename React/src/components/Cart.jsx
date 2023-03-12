import {Link} from 'react-router-dom'
function Cart() {
  return (
    <div className='w-full min-h-[60vh] bg-slate-400'>
        <h1 className='font-black text-3xl  text-white'>Welcome to your shopping cart</h1>
        <p className='text-2xl p-3 text-rose-700'>Your cart is currently empty!!!</p>
        <Link to="/" className='bg-blue-600 p-1 border-2 border-red-700 rounded-md hover:text-purple-50'>Continue shopping</Link>
    </div>
  )
}

export default Cart