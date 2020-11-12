import React from 'react'
import './Views.scss'
import Loader from '../Components/Loader/Loader'
import { useParams } from 'react-router-dom';
import { useAxiosGet } from '../Components/Hooks/HttpRequests';
function Product() {
    const {id} = useParams();
    const url = `https://5facae4a2ec98b001604759c.mockapi.io/products/${id}`

    let product = useAxiosGet(url)

    let content = null;

    if(product.error) {
        content = <p>There was an error. Please refresh or try again later.</p>
    }
    if(product.loading) {
        content = <Loader></Loader>
    }
    if(product.data) {
        content=
        <div class="productContainer">
            <div >
                <h1 className="productName">{product.data.name}
                </h1>
            </div>
            <div className="productImg">
                <img src={product.data.image[0].imageUrl} alt={product.data.name}></img>
            </div>
            <div className="productPrice">
                ${product.data.price}
            </div>
            <div className="productDesc">
                {product.data.description}
            </div>
        
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
    
}

export default Product