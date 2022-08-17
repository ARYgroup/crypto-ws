import React, { useState } from "react"
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
import { SmallAddIcon } from "@chakra-ui/react"

function OHLC() {
  const [ohlcData, setOhlcData] = useState([])

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
        <Text>OHLC Data Here</Text>
      </Container>
    </SimpleGrid>
  )
}

export default OHLC
