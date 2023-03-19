import "./App.css";
import "./styles/styles.css";
import { Route, Routes } from "react-router";
import CategoryScreen from "./Screens/Category/CategoryScreen";
import Home from "./Screens/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Itemsbar from "./Components/Itemsbar/Itemsbar";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Testimonials from "./Sections/Testimonials/Testimonials";
import Faq from "./Sections/Faq/Faq";
import Trending from "./Sections/Trending/Trending";
import TractorAnimation from "./Components/TractorAnimation/TractorAnimation";
import Features from "./Components/Features/Features";
import { useEffect, useState } from "react";
import LoadingAnimation from "./Components/LoadingAnimation/LoadingAnimation";
import ChatbotButton from "./Components/ChatBot/ChatBot";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
      setBgColor("bg-[#ffffff]");
    }, 3000);
  }, []);
  const [bgColor, setBgColor] = useState("bg-[#ffffff]");
  return (
    <div className={`App ${bgColor}`}>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {isLoading ? (
                  <LoadingAnimation setBgColor={setBgColor} />
                ) : (
                  <>
                    <Navbar />
                    <Intro />
                    <Trending />
                    <HowItWorks />
                    <Testimonials />
                    <Faq />
                    <Footer />
                    <ChatbotButton />
                  </>
                )}
              </>
            }
          />
          <Route
            path="/features"
            element={
              <>
                <Navbar />
                <Features />
                <Footer />
                <ChatbotButton />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <Signup />
                <Footer />
              </>
            }
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
