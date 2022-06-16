import { NextPage } from "next";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProjectsSection from "../Components/Projects-Section";
import Separator from "../Components/Separator";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Separator />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Home;
