
import Pizzas from '../Assets/Pizzas.json'


const Home = () =>{
    return(
        <div className='h-[90vh] overflow-y-scroll'>
            <h1 className='font-black text-2xl mt-4'>All pizzas</h1>
            <div className=' flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center'>
                {
                    Pizzas.map((pizza)=>{
                        return(
                            <div className='shadow-md shadow-blue-800 bg-black text-white border rounded-md  w-52 h-72 my-5 mx-7'>
                                <img src={pizza.image} alt='image' className='p-3 rounded-lg w-46 h-40'/>

                                <h1 className='text-2xl font-bold m-6'>{pizza.title}</h1>
                                <p className='m-5'>{pizza.price}</p>

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