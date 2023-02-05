import React from 'react'

const Card = ({post}) => {
    const {id,title,urlToImage,description} = post;
  return (
    <div className='flex flex-col sm:max-h-80 m-4 bg-slate-700 rounded-lg drop-shadow-lg p-2'>
        <div className='min-h-[60%] w-full flex justify-center items-center overflow-hidden top-0'>
             <img className='w-full h-full object-cover top-0 rounded-md' src={urlToImage} alt={title} />
        </div>
        <div className='overflow-hidden h-[70%]'>
            <h1 className=''>{title}</h1>
        </div>

        <div className='pt-2'>
            <button className='bg-teal-800 px-3 py-1 rounded-md'>Read more {">"}</button>
        </div>
    </div>
  )
}

export default Card
