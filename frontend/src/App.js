import { Box, Image, Center, Heading } from "@chakra-ui/react"
import logo from "./logo.png"
import styles from "./styles/app.module.css"
import Dashboard from "./components/dashboard"

function App() {
  return (
    <Box>
      <Image className={styles.logo} src={logo} alt="logo" />
      <Center color="gray.500" pb="4px">
       <Heading>Crypto Playground</Heading> 
      </Center>
      <Box className={styles.view}>
        <Dashboard />
      </Box>
    </Box>
  )
}

export default App
