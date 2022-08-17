import { ChakraProvider } from "@chakra-ui/react"
import { appTheme } from "../styles/appTheme"
import reportWebVitals from "./monitor/reportWebVitals"
import "../styles/app.module.css"

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={appTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App

// For measuring and reporting:
// (example: reportWebVitals(console.log))
reportWebVitals(console.log)
