import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductsCard = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
    const {id,title,category,image} = product;
        return (
            <div key={id}>
                <Link to={`product/${id}`}>
                <img className='w-32' src={image} alt={title} />
                <h1>{title}</h1>
                </Link>
            </div>
        )
    })
    return <>{renderList}</>
  
}

export default ProductsCard;
