import Articles from "./Sections/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Hero from "./Sections/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Status from "./components/Stats/Status";
import Testimonials from "./Sections/Testimonials/Testimonials";
import ContactUs from "./Sections/ContactUs/ContactUs";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Testimonials />
      <Status />
      <Articles />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
