import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectProduct,removeSelectProduct } from '../../actions/ProductAction'

const ProductDetailPage = () => {
    const product = useSelector((state)=>state.product)
    const {productId} = useParams();
    const {id,image,title,description,price} = product;
    const dispatch = useDispatch();
    console.log(product)
    const fetchApi = async() => {
        const response = await Axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>console.log(err))
       // console.log(response.data)
    dispatch(selectProduct(response.data))
    }
    useEffect(()=>{
       if(productId && productId !== "") fetchApi();
       return()=>{
        dispatch(removeSelectProduct());
       }
    },[productId])
    console.log(productId)
  return (
    <div className='pt-24'>
        {
            Object.keys(product).length === 0 ? (
                <div>Loading..</div>
            ) : (
                <div className='flex p-4 m-4 gap-4 justify-center items-start'>
                    <div className='w-80'>
                        <img className='w-full object-cover rounded-md' src={image} alt={title} />
                    </div>
                    <div className='w-80 overflow-hidden'>
                        <h1 className='text-2xl font-semibold'>{title}</h1>
                        <p className='text-sm'>{description}</p>
                        <p className='font-semibold text-teal-400'>${price}</p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ProductDetailPage
