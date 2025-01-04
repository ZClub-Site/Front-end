import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import JoinBank from "../../components/JoinBank";
import Navbar from "../../components/Navbar";
import Operations from "../../components/Operations";
import Testimonial from "../../components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Operations />
      <Testimonial />
      <JoinBank />
      <Footer />
    </>
  );
};

export default Home;
