import React, { useState, useEffect } from "react"
import {
  Container,
  SimpleGrid,
  Badge,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react"
import { SunIcon, CalendarIcon } from "@chakra-ui/icons"
import moment from "moment-timezone"

function ExchangeInfo() {
  const [serverTime, setServerTime] = useState(null)
  const [systemStatus, setSystemStatus] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      let rfcTime,
        estTime,
        easternTimeZone = "America/New_York",
        dateFormat = "MM-DD-YYYY h:mm:ss a"
      const result = await fetch("/server")
      const resultData = await result.json()
      rfcTime = JSON.stringify(resultData.serverTime.result.rfc1123)
      estTime = moment(rfcTime).utc().tz(easternTimeZone).format(dateFormat)
      setServerTime(estTime)
      setSystemStatus(JSON.stringify(resultData.systemStatus.result.status))
    }
    fetchData()
  }, [])

  return (
    <SimpleGrid
      border="1px"
      borderColor="green"
      borderRadius="lg"
      align="center"
      columns={{ sm: 1, md: 2 }}
      p={2}
      mb={4}
    >
      <Stat
        align="center"
        borderRadius="lg"
        p={3}
        mb={4}
        bg="whiteAlpha.500"
        w={{ sm: "100%", md: "90%" }}
      >
        <Image
          borderRadius="full"
          w="2rem"
          alt="kraken"
          src="https://bit.ly/3rHWFcs"
        />
        <StatLabel>Kraken Exchange Status</StatLabel>
        <StatNumber>100% uptime</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />3 stablecoins available
        </StatHelpText>
      </Stat>
      <Container
        w="80%"
        h={{ sm: "10vh", md: "10vh" }}
        p={2}
        borderColor="grey"
      >
        <Badge borderRadius="lg" p={1} mt={-4}>
          Kraken
        </Badge>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          p={2}
          border="2px"
          borderRadius="lg"
          borderColor="grey"
          align="center"
          spacing="10px"
        >
          <Text bg="#D3C2B3" fontSize="sm" borderRadius="lg" p={1}>
            <CalendarIcon mt={-1} mr={2} />
            {serverTime}
          </Text>
          <Text bg="#D9E9E0" borderRadius="lg" p={1} fontWeight="bold">
            <SunIcon mt={-0.5} mr={2} />
            {JSON.parse(systemStatus)}
          </Text>
        </SimpleGrid>
      </Container>
    </SimpleGrid>
  )
}

export default ExchangeInfo
