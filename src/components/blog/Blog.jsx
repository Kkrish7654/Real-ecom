import React from 'react'
import Axios from 'axios';
import { useState,useEffect } from 'react';
import Card from './Card';

const Loading = () => {
  return(
    <div className='flex justify-center items-center w-screen'>
        <span className='text-xl'>Loading...</span>
      </div>
  )
}

const Blog = () => {
  const [state, setState] = useState(null);

  const Posts = async() => {
     await Axios.get("https://newsapi.org/v2/everything?q=news&apiKey=9b97b1488fb3416fb971ec110fcba041")
    .then(res=>{
      setState(res.data.articles);
      console.log(res.data.articles)
    })
    .catch(err => console.log(err))
  }

 useEffect(() => {
   Posts();
  
 },[])

  return (
    <div className='sm:pt-24 pt-12'>
      <section className='grid sm:grid-cols-4'>
        {
          !state ? <Loading/> : state.map((post)=>{
            return <Card key={post.id} post={post}/>
          })
        }
      </section>
    </div>
  )
}

export default Blog;
