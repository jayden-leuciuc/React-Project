import React from 'react'
import './productcard.scss'
import {Link} from 'react-router-dom'
function ProductCard(props) {
    return(
        <div className="parent">
        <div className="productCard">
            <Link to={`/products/${props.product.id}`}>
            <div style={{'backgroundImage' : `url('${props.product.image[0].imageUrl}')`}}
            className="imageCard">
            </div>
            
            </Link>
            <div className="productContent">
                <h3 className="productNameLink">
                <Link to={`/products/${props.product.id}`}></Link>
                {props.product.name}
                </h3>
                <h3 className="productPrice">
                ${props.product.price}
                </h3>
                <h3 className="productDesc">
                {props.product.description}
                </h3>
                <Link to={`/products/${props.product.id}`}
                className="viewButton"
                >View</Link>

            </div>
        </div>
    </div>
    )
}

export default ProductCard