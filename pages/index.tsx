import { NextPage } from "next";
import Header from '../Components/Header'
import Hero from "../Components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default Home;
