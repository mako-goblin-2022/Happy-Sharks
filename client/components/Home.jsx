import React, { useState, useEffect } from 'react'

import { getWelcome, getShark } from '../apiClient'

function Home() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  const [sharks, setSharks] = useState([])

  useEffect(() => {
    getShark()
      .then((res) => {
        // console.log('Res', res)
        setSharks(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
  <div>
    {/* <p>{shark[2]}</p> */}
    {console.log('Return:', sharks[2])}
  {/* {sharks.map((shark, i) => {
    return (
      <p key={i}>{shark.location}</p>
    )
  })} */}
</div>
)}


export default Home