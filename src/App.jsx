import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div>
      <Cursor />
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}