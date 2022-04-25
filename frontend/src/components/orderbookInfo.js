import React, { useState, useEffect } from "react"
import {
  SimpleGrid,
  Image,
  Badge,
  Container,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react"
import { SmallAddIcon } from "@chakra-ui/icons"

function OrderBook() {
  const [askData, setAskData] = useState([])
  const [bidData, setBidData] = useState([])
  const [loading, setLoading] = useState(false)
  let askTable = []
  let bidTable = []
  let usdFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  })
  let numberFormat = new Intl.NumberFormat("en-us")

  useEffect(() => {
    setLoading(true)
    fetch("/orderbook")
      .then((res) => res.json())
      .then((data) => {
        setAskData(data.result.XXBTZUSD.asks)
        setBidData(data.result.XXBTZUSD.bids)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  for (let i in bidData) {
    bidTable.push(bidData[i])
  }
  bidTable = [["price", "volume", "timestamp"], ...bidTable]
  bidTable.length = 10

  for (let i in askData) {
    askTable.push(askData[i])
  }
  askTable = [["price", "volume", "timestamp"], ...askTable]
  askTable.length = 10

  if (loading) {
    return <p> Data is loading </p>
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} align="center" p={2} mb={4}>
      <Stat
        borderRadius="lg"
        p={3}
        mb={4}
        mt={6}
        bg="whiteAlpha.500"
        w={{ sm: "100%", md: "90%" }}
        h={{ sm: "auto", md: "25%" }}
      >
        <Image
          borderRadius="full"
          w="2rem"
          alt="kraken"
          src="https://bit.ly/3rHWFcs"
        />
        <StatLabel>Orderbook Data</StatLabel>
        <StatNumber>Bids and Ask Prices</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          BTC/USD
        </StatHelpText>
      </Stat>
      <SimpleGrid columns={{ sm: 1, md: 1 }} spacing="10px" align="center">
        <Container h={{ sm: "100vh", md: "80vh" }} p={2} overflow="hidden">
          <Badge borderRadius="lg" p={1} fontWeight="bold" mb={4}>
            Asks Data
          </Badge>
          <TableContainer
            maxW={{ sm: "100%", md: "90%" }}
            border="2px"
            p={3}
            borderColor="grey"
            borderRadius="lg"
          >
            <Table variant="unstyled" size="xs" fontSize="xs" justifyContent="center">
              <Thead>
                <Tr>
                  {askData &&
                    askTable[0].map((item, index) => {
                      return <Th>{item}</Th>
                    })}
                </Tr>
              </Thead>
              <Tbody>
                {askData &&
                  askTable.slice(1, askTable.length).map((item, index) => {
                    return (
                      <Tr>
                        <Td>{usdFormat.format(item[0])}</Td>
                        <Td>
                          <SmallAddIcon mt={-1} mr={2} />
                          {numberFormat.format(item[1])}
                        </Td>
                        <Td>{item[2]}</Td>
                      </Tr>
                    )
                  })}
              </Tbody>
            </Table>
          </TableContainer>

          <Badge borderRadius="lg" p={1} fontWeight="bold" mt={4} mb={4}>
            Bids Data
          </Badge>
          <TableContainer
            maxW={{ sm: "100%", md: "90%" }}
            p={2}
            border="2px"
            borderColor="grey"
            borderRadius="lg"
          >
            <Table variant="unstyled" size="xs" fontSize="xs">
              <Thead>
                <Tr>
                  {bidData &&
                    bidTable[0].map((item, index) => {
                      return <Th>{item}</Th>
                    })}
                </Tr>
              </Thead>
              <Tbody>
                {bidData &&
                  bidTable.slice(1, bidTable.length).map((item, index) => {
                    return (
                      <Tr>
                        <Td>{usdFormat.format(item[0])}</Td>
                        <Td>
                          <SmallAddIcon mt={-1} mr={2} />
                          {numberFormat.format(item[1])}
                        </Td>
                        <Td>{item[2]}</Td>
                      </Tr>
                    )
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </SimpleGrid>
    </SimpleGrid>
  )
}

export default OrderBook
