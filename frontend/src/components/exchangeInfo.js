import React from "react"
import { Container, SimpleGrid, Spacer, Badge, Text } from "@chakra-ui/react"

function ExchangeInfo() {
  const [serverTime, setServerTime] = React.useState(null)
  const [systemStatus, setSystemStatus] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/server")
      const resultData = await result.json()
      setServerTime(JSON.stringify(resultData.serverTime.result.rfc1123))
      setSystemStatus(JSON.stringify(resultData.systemStatus.result.status))
    }
    fetchData()
  }, [])

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} align="center" p={2} mb={4}>
      <Text fontSize="xl">Exchange Status</Text>
      <Container
        h="10vh"
        p={2}
        border="2px"
        borderRadius="lg"
        borderColor="grey"
      >
        <Badge>{JSON.parse(serverTime)}</Badge>
        <Spacer />
        <Badge>⭕{JSON.parse(systemStatus)}</Badge>
      </Container>
    </SimpleGrid>
  )
}

export default ExchangeInfo
