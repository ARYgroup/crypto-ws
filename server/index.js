const express = require("express")
const { request } = require("express")
const axios = require("axios")
const PORT = process.env.PORT || 3001
const app = express()

// CORS policy for local dev environment
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

// api endpoint: server
app.get("/server", (req, res) => {
  const requestOne = axios.get("https://api.kraken.com/0/public/Time")
  const requestTwo = axios.get("https://api.kraken.com/0/public/SystemStatus")
  let serverTime, systemStatus

  axios.all([requestOne, requestTwo]).then(
    axios.spread((responseOne, responseTwo) => {
      serverTime = responseOne.data
      systemStatus = responseTwo.data
      res.json({ serverTime, systemStatus })
    })
  )
})

// api endpoint: tickerInfo
app.get("/tickerInfo", (req, res) => {
  axios
    .get("https://api.kraken.com/0/public/Ticker?pair=XBTUSD")
    .then((result) => res.send(result.data))
})

// api endpoint: orderbook
app.get("/orderbook", (req, res) => {
  axios
    .get("https://api.kraken.com/0/public/Depth?pair=XBTUSD")
    .then((result) => res.send(result.data))
})

// api endpoints: ohlc
app.get("/ohlc", (req, res) => {
  axios
    .get("https://api.kraken.com/0/public/OHLC?pair=XBTUSD")
    .then((result) => res.send(result.data))
})

// add api endpoint for handling websocket data below
app.get("/api", (req, res) => {
  res.json({ message: "WebSocket event stream data here!" })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
