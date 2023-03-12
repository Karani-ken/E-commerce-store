
import Pizzas from '../Assets/Pizzas.json'


const Home = () =>{
    return(
        <div className='h-[90vh] overflow-y-scroll'>
            <h1 className='font-black text-3xl mt-4'>products</h1>
            <div className=' flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center'>
                {
                    Pizzas.map((pizza)=>{
                        return(
                            <div className='shadow-md shadow-blue-800 bg-gray-200 text-black border rounded-md  w-52 my-5 mx-7'>
                                <img src={pizza.image} alt='' className='p-3 rounded-lg w-46 h-40'/>

                                <h1 className='text-2xl font-bold m-6'>{pizza.title}</h1>
                                <p className='m-5'>price:{pizza.price}</p>
                                <div className='flex justify-center items-center'>
                                    <button className='p-1 bg-green-300 rounded-lg m-2 shadow-lg shadow-black'>
                                        add to cart
                                    </button>
                                    <button className='p-1 bg-green-300 rounded-lg m-2 shadow-lg shadow-black'>
                                        buy now
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

            </div>
           
            
        </div>
    )
}

export default Home