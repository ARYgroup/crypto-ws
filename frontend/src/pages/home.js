// TODO: refactor projcet structure 🌊
// TODO: build out header and footer components 📍
// TODO: refactor navigation component 📍
// TODO: test getServerSideProps 📍

import Head from "next/head"
import Layout from "../components/layout"
import Header from "../components/_home/header"
import Dashboard from "../components/dashboard"
import Footer from "../components/footer"
import { fetchAPI } from "../services/api"

const Home = ({ crypto, exchange, ws }) => {
  return (
    <Layout>
      <Head>
        <title>💳 cav-app</title>
        <meta name="description" content="crypto asset analyzer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Dashboard crypto={crypto} exchange={exchange} ws={ws} />
      <Footer />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { coinData, exchangeData, webSocketData } = await Promise.all([
    fetchAPI("/coin-data"),
    fetchAPI("/exchange-data"),
    fetchAPI("/ws-data"),
  ])
  return {
    props: {
      crypto: coinData,
      exchange: exchangeData,
      ws: webSocketData,
    },
    revalidate: 1,
  }
}

export default Home
