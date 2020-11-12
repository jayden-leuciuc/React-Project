import React from 'react'
import './Views.scss'
import Loader from '../Components/Loader/Loader'
import ProductCard from '../Components/ProductCard/ProductCard'
import { useAxiosGet } from '../Components/Hooks/HttpRequests'

function Home(){
    const url = `https://5facae4a2ec98b001604759c.mockapi.io/products?page=1&limit=10`
    
    let products = useAxiosGet(url)

    let content = null;

    if(products.error) {
        content = <p>There was an error. Please refresh or try again later.</p>
    }
    if(products.loading) {
        content = <Loader></Loader>
    }

    if(products.data) {
        content=
        products.data.map((product, key) => 
            <div key={product.id}>
                <ProductCard 
                product={product}/>
            </div>
        )
    }
    return(
        <div>
            <h1 className="homeHeading">Best Selling Random Items</h1>
            {content}
        </div>
    )

    
}

export default Home