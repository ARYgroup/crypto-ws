import React from "react"
import { Container, SimpleGrid, Badge, Text } from "@chakra-ui/react"

function Dashboard() {
  const [wsData, setWsData] = React.useState(null)
  const [askData, setAskData] = React.useState(null)
  const [bidData, setBidData] = React.useState(null)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((wsData) => setWsData(wsData.message))
  }, [])

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/ohlc")
      const resultData = await result.json()
      setAskData(JSON.stringify(resultData.result.XXBTZUSD.asks))
    }
    fetchData()
  }, [])
  
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/ohlc")
      const resultData = await result.json()
      setBidData(JSON.stringify(resultData.result.XXBTZUSD.bids))
    }
    fetchData()
  }, [])

  return (
    <Container maxW="80vw" p={2}>
      <SimpleGrid columns={{ sm: 1, md: 2 }} align="center" p={2} mb={4}>
        <Text fontSize="xl">OrderBook for XBT/USD</Text>
        <SimpleGrid columns={{sm: 1, md: 2}} spacing="10px" align="center">
          <Container
            h="30vh"
            p={2}
            border="2px"
            borderRadius="lg"
            borderColor="grey"
            overflow="hidden"
          >
            <Badge fontWeight="bold" mb={4}>Asks Data</Badge>
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
            <Badge fontWeight="bold" mb={4}>Bid Data</Badge>
            {!bidData ? "Loading..." : bidData}
          </Container>
        </SimpleGrid>
      </SimpleGrid>
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
