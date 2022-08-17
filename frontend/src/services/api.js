import axios from "axios"

export const getPathURL = (param) => {
  const BASE_URL = "https://api.kraken.com/0/public"
  return (endpoint = `${BASE_URL}/${param}`)
}

export async function fetchAPI(path) {
  // data fetching ticker info, orderbook, and ohlc
  if (path === "/coin-data") {
    const ticketData = axios.get(`${getPathURL("Ticker?pair=XBTUSD")}`)
    const orderBookData = axios.get(`${getPathURL("Depth?pair=XBTUSD")}`)
    const ohlcData = axios.get(`${getPathURL("OHLC?pair=XBTUSD")}`)
    const coinData = {}

    axios.all([ticketData, orderBookData, ohlcData]).then(
      axios.spread((ticketDataRes, orderBookDataRes, ohlcDataRes) => {
        coinData = {
          ticket: ticketDataRes.data,
          orderBook: orderBookDataRes.data,
          ohlc: ohlcDataRes.data,
        }
      })
    )

    return coinData
  }

  if (path === "/exchange-data") return console.log("exchange-data fetched 🚀")
  if (path === "/ws-data") return console.log("ws-data fetched 🚀")
  return console.log(
    "⚠️  can't return data probably a path error, the passed url param is: ",
    path
  )
}
