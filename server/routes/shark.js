const express = require('express')
const request = require('superagent')
const router = express.Router()

const sharkURL = 'https://www.fishwatch.gov/api/species'

router.get('/', (req, res) => {
  request
    .get(`${sharkURL}`)
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
