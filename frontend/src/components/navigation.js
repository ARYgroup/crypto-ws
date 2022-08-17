import React from "react"
import { Grid, GridItem, Image, HStack, Heading } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import styles from "../styles/app.module.css"

function Navigation() {
  return (
    <Grid
      h="80px"
      w="100vw"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(8, 1fr)"
      position="fixed"
      bg="rgba(117,117,117,1)"
    >
      <GridItem
        colSpan={1}
        bg="white"
        boxShadow="dark-lg"
        borderBottomRightRadius="full"
      >
        <Image className={styles.logo} src={logo} />
      </GridItem>
      <GridItem colSpan={7} p={4}>
        <Heading textTransform="uppercase" fontSize="2xl" mt={1} color="white">
          Crypto Playground
        </Heading>
      </GridItem>
    </Grid>
  )
}

export default Navigation
