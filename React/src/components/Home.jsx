import { useGetAllProductsQuery } from '../features/productsApi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'
import {useNavigate} from 'react-router-dom'
//import Pizzas from '../Assets/Pizzas.json'
//import { useSelector } from 'react-redux'

const Home = () => {
    /*using asyncThunk
    const {items, status} = useSelector((state)=> state.products)*/
    //using rtk query
    const { data, isLoading, error } = useGetAllProductsQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
        navigate('/cart')
    }

    return (
        <div className='h-[90vh] overflow-y-scroll'>
            <h1 className='font-black text-3xl mt-4'>products</h1>
            <div className=' flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center'>

                    {
                        isLoading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>an error occured</p>
                        ) : (
                            <>
                                {data?.map(product =>
                                    <div key={product.id} className='shadow-md shadow-blue-800
                                      text-black border rounded-md grid grid-cols-1
                                      justify-center text-center w-52 my-1 mx-7'>
                                        <h1 className='text-xl font-black m-2'>{product.name}</h1>
                                        <p className='m-2 text-xl'>{product.desc}</p>
                                        <div className='flex justify-center items-center'>
                                            <img src={product.image} alt='' className='p-5 rounded-lg w-52 h-40' />
                                        </div>

                                        <div className='flex justify-evenly items-start'>
                                            <span>
                                                <p>Quantity</p>
                                                <select id="categories" className='border bg-slate-300 rounded-sm h-8 m-2'>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">4</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </span>

                                            <h3 className='m-5 font-black text-green-600'>${product.price}</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <button className='p-1 bg-blue-700 rounded-lg 
                                            m-2 shadow-lg shadow-blue-300'onClick= {()=> handleAddToCart(product)}>
                                                add to cart
                                            </button>
                                            <button className='p-1 bg-rose-300 rounded-lg m-2 shadow-lg shadow-rose-600'>
                                                buy now
                                            </button>
                                        </div>

                                    </div>)}

                            </>

                        )

                    }

                </div>

            </div>


        </div>

    )
}

export default Home