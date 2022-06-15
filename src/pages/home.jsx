import './home.css'
import Cards from '../components/Cards'

import data from '../backend/Data'



const Home = () =>{
    return(
            <div className='container-fluid'>
              <h3 className ='text-center mt-5 rounded border border-light border-bottom-0'> Welcome to Josh's E-commerce store </h3>
              <div className = "container py-4">
                <div className='row'>
                    {data.products.map((item,index)=>{
                        return(
                            <Cards img={item.img} title= {item.title}  desc ={item.desc} price={item.price} item={item} key={item.index}/>
                        )
                    }

                    )}
                    
                </div>

              </div>
            </div>


    )
}


export default Home 



