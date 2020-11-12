import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader/Loader'
import { useParams } from 'react-router-dom';
function Product() {
    const {id} = useParams();
    const url = `https://5facae4a2ec98b001604759c.mockapi.io/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    });

    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then(response=> {
            setProduct({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setProduct({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    if(product.error) {
        content = <p>There was an error. Please refresh or try again later.</p>
    }
    if(product.loading) {
        content = <Loader></Loader>
    }
    if(product.data) {
        content=
        <div>
            <div>
                <h1 className="productName">{product.data.name}
                </h1>
            </div>
            <div>
                <img src={product.data.image[0].imageUrl} alt={product.data.name}></img>
            </div>
            <div className="productPrice">
                ${product.data.price}
            </div>
            <div>
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