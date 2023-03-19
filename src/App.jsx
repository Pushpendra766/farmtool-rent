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
import CategorySection from "./Components/CategorySection/CategorySection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const handleAuthentication = (status) => {
    if (status == false) {
      localStorage.clear();
      localStorage.removeItem("RLog")
      localStorage.removeItem("RName")
    }

    setAuthenticated(status);
  }
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
      setBgColor("bg-[#ffffff]");
    }, 3000);
    let val = localStorage.getItem("RLog")
    if (val == "yes")
      setAuthenticated(val);
  }, []);
  const [bgColor, setBgColor] = useState("bg-[#ffffff]");
  return (
    <div className={`App ${bgColor}`}>
      <>
        {!isLoading &&
          <Navbar logstatus={authenticated} handleAuthentication={handleAuthentication} />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {isLoading ? (
                  <LoadingAnimation setBgColor={setBgColor} />
                ) : (
                  <>
                    <Intro />
                    {/* <Trending /> */}
                    <HowItWorks />
                    <Testimonials />
                    {/* <CategoryScreen /> */}
                    <CategorySection />
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

                <Login handleAuthentication={handleAuthentication} />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>

                <Signup handleAuthentication={handleAuthentication} />
                <Footer />
              </>
            }
          />
          <Route
            path="/Category/:name"
            element={
              <>
                <Navbar />
                <CategoryScreen />
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
