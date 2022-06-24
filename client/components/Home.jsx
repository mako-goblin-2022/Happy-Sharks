import React, { useState, useEffect } from 'react'

import { getShark } from '../apiClient'

function Home() {

  const [sharks, setSharks] = useState([])

  let randomShark = Math.floor(Math.random() * sharks.length)

  useEffect(() => {
    getShark()
      .then((sharkData) => {
        // console.log(sharkData)
        const onlyFish = sharkData.filter((shark) => shark["Physical Description"].includes("fin") )
        //?.filter shark data to contain only sharks where shark["Species Name"] contains "shark then set to state?? 
        setSharks(onlyFish)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  const refreshPage = () => {
    window.location.reload()
  }

  let displayShark = sharks.find((shark, index) => index == randomShark)

  return (
 
    <div className = 'main'>
      <div className = 'title'><h1>Sharkquarium</h1></div>
      
     {/* {displayShark&& <div
      dangerouslySetInnerHTML={{__html: displayShark["Physical Description"]}}
    />} */}
 
   
      {displayShark &&
      <>

      <div className="card">
      
      <div className ="img-container">
     
      <img src={displayShark["Species Illustration Photo"].src} alt= {displayShark["Species Name"]} />
      </div>
      <h2 className='name'>{displayShark["Species Name"]}</h2>
      <div className='text-field'

      <p>{displayShark["Species Name"]}</p>
      <img onClick={refreshPage}src={displayShark["Species Illustration Photo"].src} alt= {displayShark["Species Name"]} />
      <div

      dangerouslySetInnerHTML={{__html: displayShark["Physical Description"]}}
      />
      
      </div>
    </>}

  

{/* // {let displayShark = sharks.find((shark) => shark == randomShark)} */}



  {/* <ul>
        {sharks.map((shark, index) => (
          <li key={index}>
            {shark["Species Name"]}
            <img src={shark["Species Illustration Photo"].src} alt= {shark["Species Name"]} />
            {shark["Physical Description"]}
            
          </li>
        ))}
      </ul> */}



    {/* <p>{shark[2]}</p> */}
  {/* {sharks.map((shark, i) => {
    return (
      <p key={i}>{shark.location}</p>
    )
  })} */}
</div>
)}


export default Home