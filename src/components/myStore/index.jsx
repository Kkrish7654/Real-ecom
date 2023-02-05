import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { setProducts } from '../../actions/ProductAction'
import { useDispatch } from 'react-redux'
import ProductsCard from './ProductsCard'

const AllProducts = () => {
   const products = useSelector((state) => state.allProducts.products)
   const dispatch = useDispatch();
    const ProductApi = async() => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>console.log(err))
        dispatch(setProducts(response.data))
       
    }
    useEffect(()=>{
        ProductApi();
    },[])
  return (
   
    <div className='pt-24'>
    <ProductsCard key={products.id}/>
    </div>
  )
}

export default AllProducts;
