// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './content.css'
import mock from './mock.json'


export const Content = () => {

    const [data, setData] = useState([]);



    // eslint-disable-next-line no-unused-vars
    const handleGetData = () => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then ((response => {
            console.log(response)
            setData(response.data.photos)
        }))
        .catch((error) => {
            console.log(error)
        }) 
    }

    useEffect(()=>{
        //handleGetData()
        setData(mock)
        console.log(data)
    },[])

  return (
    <>
    <div className="container_content">
        {
            data.map((elemento)=>{
                // eslint-disable-next-line react/jsx-key
                return <div className='content_img'>
                        <img src={elemento.img_src}/>
                        </div>
            })
        }
    </div>
    </>
  )
}
