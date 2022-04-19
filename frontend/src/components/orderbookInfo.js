import React from "react"
import { SimpleGrid, Text, Badge, Container } from "@chakra-ui/react"

function OrderBook() {
  const [askData, setAskData] = React.useState(null)
  const [bidData, setBidData] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/orderbook")
      const resultData = await result.json()
      setAskData(JSON.stringify(resultData.result.XXBTZUSD.asks))
    }
    fetchData()
  }, [])

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/orderbook")
      const resultData = await result.json()
      setBidData(JSON.stringify(resultData.result.XXBTZUSD.bids))
    }
    fetchData()
  }, [])

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} align="center" p={2} mb={4}>
      <Text fontSize="xl">OrderBook for XBT/USD</Text>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="10px" align="center">
        <Container
          h="30vh"
          p={2}
          border="2px"
          borderRadius="lg"
          borderColor="grey"
          overflow="hidden"
        >
          <Badge fontWeight="bold" mb={4}>
            Asks Data
          </Badge>
          {!askData ? "Loading..." : askData}
        </Container>
        <Container
          h="30vh"
          p={2}
          border="2px"
          borderRadius="lg"
          borderColor="grey"
          overflow="hidden"
        >
          <Badge fontWeight="bold" mb={4}>
            Bid Data
          </Badge>
          {!bidData ? "Loading..." : bidData}
        </Container>
      </SimpleGrid>
    </SimpleGrid>
  )
}

export default OrderBook
