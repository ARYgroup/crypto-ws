import React, { useState, useEffect } from "react"
import {
  SimpleGrid,
  Container,
  Badge,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react"
import { SmallAddIcon } from "@chakra-ui/icons"

function TickerInfo() {
  const [tickerVolume, setTickerVolume] = useState([])
  const [tickerWPrice, setTickerWPrice] = useState([])
  const [tradeAmount, setTradeAmount] = useState([])
  let usdFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  })
  let numberFormat = new Intl.NumberFormat("en-us")

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/tickerInfo")
      const resultData = await result.json()
      setTickerVolume(resultData.result.XXBTZUSD.v)
      setTickerWPrice(resultData.result.XXBTZUSD.p)
      setTradeAmount(resultData.result.XXBTZUSD.t)
    }
    fetchData()
  }, [])

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} align="center" p={2} mb={4}>
      <Stat
        borderRadius="lg"
        p={3}
        mb={4}
        mt={6}
        bg="whiteAlpha.500"
        w={{ sm: "100%", md: "90%" }}
        h={{ sm: "auto", md: "38%" }}
      >
        <Image
          borderRadius="full"
          w="2rem"
          alt="kraken"
          src="https://bit.ly/3rHWFcs"
        />
        <StatLabel>Ticker Data</StatLabel>
        <StatNumber>name of stable</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          BTC/USD
        </StatHelpText>
      </Stat>
      <Container h={{ sm: "40vh", md: "45vh" }} p={2}>
        <Badge fontSize="xs" fontWeight="bold" borderRadius="lg" p={1} mb={2}>
          VOLUME
        </Badge>
        <SimpleGrid
          maxW={{ sm: "100%", md: "90%" }}
          columns={{ sm: 1, md: 2 }}
          p={2}
          mb={3}
          border="2px"
          borderColor="grey"
          borderRadius="lg"
          align="center"
          fontSize="sm"
        >
          <Text p={1} fontWeight="bold">
            <SmallAddIcon fontSize="xs" mt={-1} />
            today
          </Text>
          <Text
            align="center"
            maxW={{ sm: "100%", md: "80%" }}
            bg="#B0DDE4"
            p={1}
            borderRadius="lg"
            fontWeight="semibold"
          >
            {numberFormat.format(tickerVolume[0])}
          </Text>
          <Text fontWeight="bold">
            <SmallAddIcon fontSize="xs" mt={-1} />
            last 24 hours
          </Text>
          <Text
            fontWeight="semibold"
            align="center"
            maxW={{ sm: "100%", md: "80%" }}
          >
            {numberFormat.format(tickerVolume[1])}
          </Text>
        </SimpleGrid>

        <Badge borderRadius="lg" p={1} fontWeight="bold" fontSize="xs" mb={2}>
          volume weighted average price
        </Badge>
        <SimpleGrid
          maxW={{ sm: "100%", md: "90%" }}
          columns={{ sm: 1, md: 2 }}
          p={2}
          mb={3}
          align="center"
          border="2px"
          borderColor="grey"
          borderRadius="lg"
          fontSize="sm"
        >
          <Text fontWeight="bold" p={1}>
            <SmallAddIcon fontSize="xs" mt={-1} />
            today
          </Text>
          <Text
            maxW={{ sm: "100%", md: "80%" }}
            bg="#B0DDE4"
            p={1}
            borderRadius="lg"
            fontWeight="semibold"
          >
            {usdFormat.format(tickerWPrice[0])}
          </Text>
          <Text fontWeight="bold">
            <SmallAddIcon fontSize="xs" mt={-1} />
            last 24 hours
          </Text>
          <Text fontWeight="semibold" maxW={{ sm: "100%", md: "80%" }}>
            {usdFormat.format(tickerWPrice[1])}
          </Text>
        </SimpleGrid>

        <Badge borderRadius="lg" p={1} fontSize="xs" fontWeight="bold" mb={2}>
          number of trades
        </Badge>
        <SimpleGrid
          maxW={{ sm: "100%", md: "90%" }}
          columns={{ sm: 1, md: 2 }}
          p={2}
          mb={3}
          align="center"
          border="2px"
          borderColor="grey"
          borderRadius="lg"
          fontSize="sm"
        >
          <Text p={1} fontWeight="bold">
            <SmallAddIcon fontSize="xs" mt={-1} />
            today
          </Text>
          <Text
            maxW={{ sm: "100%", md: "80%" }}
            bg="#B0DDE4"
            p={1}
            borderRadius="lg"
            fontWeight="semibold"
          >
            {numberFormat.format(tradeAmount[0])}
          </Text>
          <Text fontWeight="bold">
            <SmallAddIcon fontSize="xs" mt={-1} />
            last 24 hours
          </Text>
          <Text fontWeight="semibold" maxW={{ sm: "100%", md: "80%" }}>
            {numberFormat.format(tradeAmount[1])}
          </Text>
        </SimpleGrid>
      </Container>
    </SimpleGrid>
  )
}

export default TickerInfo
