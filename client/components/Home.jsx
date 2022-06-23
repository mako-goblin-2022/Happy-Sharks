import React, { useState, useEffect } from 'react'

import { getShark } from '../apiClient'

function Home() {
 
  // randomShark = Math.floor(Math.random() * sharks.length)

  const [sharks, setSharks] = useState([])

  useEffect(() => {
    getShark()
      .then((sharkData) => {
        console.log(sharkData)
        const onlySharks = sharkData.filter((shark) => shark["Physical Description"].includes("fin") )
        //?.filter shark data to contain only sharks where shark["Species Name"] contains "shark then set to state?? 
        setSharks(onlySharks)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
  <div>
  <ul>
        {sharks.map((shark, index) => (
          <li key={index}>
            {shark["Species Name"]}
            <img src={shark["Species Illustration Photo"].src} alt= {shark["Species Name"]} />
            {shark["Physical Description"]}
            
          </li>
        ))}
      </ul>



    {/* <p>{shark[2]}</p> */}
  {/* {sharks.map((shark, i) => {
    return (
      <p key={i}>{shark.location}</p>
    )
  })} */}
</div>
)}


export default Home