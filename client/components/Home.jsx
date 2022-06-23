import React, { useState, useEffect } from 'react'

import { getShark } from '../apiClient'

function Home() {
 

  const [sharks, setSharks] = useState([])

  useEffect(() => {
    getShark()
      .then((sharkData) => {
        //?.filter shark data to contain only sharks where shark["Species Name"] contains "shark then set to state?? 
        setSharks(sharkData)
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