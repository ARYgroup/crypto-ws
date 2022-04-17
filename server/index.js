const express = require("express")
const { request } = require("express")
const axios = require("axios")

const PORT = process.env.PORT || 3001

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/ohlc", (req, res) => {
  axios
    .get("https://api.kraken.com/0/public/Depth?pair=XBTUSD")
    .then((result) => res.send(result.data))
})

app.get("/api", (req, res) => {
  res.json({ message: "WebSocket event stream data here!" })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
