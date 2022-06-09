import { NextPage } from "next";
import Head from "next/head";
import Header from '../Components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Profissional Ewerton Ribeiro</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home;
