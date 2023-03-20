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

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
      setBgColor("bg-[#ffffff]");
    }, 3000);
  }, []);
  const [bgColor, setBgColor] = useState("bg-[#ffffff]");

  const listOfTools = [
    {
      name: "Hand Held Tools",
      product: "smallTools",
      url: "https://5.imimg.com/data5/UU/MP/LH/SELLER-7374463/agricultural-hand-tools-250x250.jpg",
    },
    {
      name: "Tractor Attachments",
      product: "Tractorattachments",
      url: "https://localbuyx.com/wp-content/uploads/2020/04/tractor-attachments.jpeg",
    },
    {
      name: "Large Tools",
      product: "largeTools",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCxs2EFrOl06GPotfgvtNJR4k2Mn2Wshx_3Hzm2EHVw&usqp=CAU&ec=48600112",
    },
  ];
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
                    {/* <Trending /> */}
                    <HowItWorks />
                    <Testimonials />
                    {listOfTools.map((e) => {
                      return (
                        <CategorySection
                          name={e.name}
                          product={e.product}
                          url={e.url}
                        />
                      );
                    })}
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
