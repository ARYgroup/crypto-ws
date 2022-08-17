// TODO: separate the sections of the dashboard into separate components and pull them in here
import React from "react"
import { Container, SimpleGrid, Text } from "@chakra-ui/react"
import ExchangeInfo from "./exchangeInfo"
import OrderBook from "./orderbookInfo"
import TickerInfo from "./tickerInfo"
import OHLC from "./ohlcInfo"

function Dashboard() {
  const [wsData, setWsData] = React.useState(null)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((wsData) => setWsData(wsData.message))
  }, [])

  return (
    <Container maxW="80vw" p={2} mt={20}>
      <ExchangeInfo />
      <TickerInfo />
      <OrderBook />
      <OHLC />

      <SimpleGrid columns={{ sm: 1, md: 2 }} align="center" p={2} mb={4}>
        <Text fontSize="xl">WebSocket</Text>
        <Container
          h="30vh"
          p={2}
          border="2px"
          borderRadius="lg"
          borderColor="grey"
        >
          {!wsData ? "Loading..." : wsData}
        </Container>
      </SimpleGrid>
    </Container>
  )
}

export default Dashboard
