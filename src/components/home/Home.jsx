import { data } from 'autoprefixer'
import React, { useEffect } from 'react'
import Axios from "axios"
import TypeWriterEffect from "react-typewriter-effect"

const Home = () => {

    const [data, setData] = React.useState([])
    React.useEffect(() => {
            Axios.get('https://api.pujakaitem.com/api/products/').then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
        }, [])

        console.log(data)

  return (
    <div className='flex flex-col px-4 py-2 relative'>
      <div className='flex flex-col w-full justify-center items-center mt-8'>
        <img src="headimg.png" alt="tech-image"  className='mt-4 w-80 sm:w-[30%]'/>

        
          <span className='text-md text-white/80 mt-9 bg-white/10 px-12 py-1 rounded-lg'> <TypeWriterEffect  
                textStyle={{
                  
                }}
  
                startDelay={1000}
                text={
                  "Hey, I'm a"
                }
                multiText = {[
                  " Web developer based in india!",
                  "Indie app developer!"
                ]}
                multiTextDelay={1000}
                typeSpeed={50}
                multiTextLoop
                />
      
          </span>
     
       

    </div>

    <div className='flex flex-col p-8'>
        <div className='flex justify-start items-center'>
          <h1 className='text-3xl font-semibold '>Krish Vishwakarma</h1>
        </div>
        <div>
          <p>Digital Craftsman(Artist, Developer, Designer)</p>
        </div>
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <div>
            <h2>Work</h2>
          </div>
          <div>
            <p>Krish is a freelance and a front-end web developer based in India with a passion for building degital services/stuff he wants.</p>
          </div>
        </div>
      </div>
      {/* <div>
        {
            data.map((items) => (
                <div key={items.id}>
                    <h2>{items.name}</h2>
                </div>
            ))
        }
      </div> */}
      
    </div>
  )
}

export default Home
