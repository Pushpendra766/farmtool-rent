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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import Product from "./Screens/Product/Product";
import Cart from "../src/Screens/Cart/Cart";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const handleAuthentication = (status) => {
    if (status == false) {
      localStorage.clear();
      localStorage.removeItem("RLog");
      localStorage.removeItem("RName");
    }

    setAuthenticated(status);
    if (status) {
      navigate("/");
    }
  };
  useEffect(() => {
    // Simulate loading delay
    let val = localStorage.getItem("RLog");
    if (val == "yes") {
      setIsLoading(false);
      setAuthenticated(true);
    } else if (!authenticated) {
      toast.info("New user? Sign Up then!");
    }
    if (isLoading) {
      const myTimeout = setTimeout(() => {
        setIsLoading(false);
        setBgColor("bg-[#ffffff]");
      }, 2000);
    }
  }, []);
  useEffect(() => {
    let val = localStorage.getItem("RLog");
    let afterlog = localStorage.getItem("logged");
    let aftersign = localStorage.getItem("signed");
    if (authenticated && afterlog) {
      toast.success("Successfully logged in...");
      localStorage.removeItem("logged");
      return;
    }
    if (authenticated && aftersign) {
      toast.success("Successfully signed in...");
      localStorage.removeItem("signed");
      return;
    }
    if (val == "yes" && authenticated) {
      toast.success("Welcome back...");
      return;
    }
  }, [authenticated]);

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
        {!isLoading && (
          <Navbar
            logstatus={authenticated}
            handleAuthentication={handleAuthentication}
          />
        )}
        {authenticated && <ToastContainer />}
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
                    {listOfTools.map((e) => {
                      return (
                        <CategorySection
                          name={e.name}
                          product={e.product}
                          url={e.url}
                        />
                      );
                    })}
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
                <Features />
                <Footer />
                <ChatbotButton />
              </>
            }
          />
          <Route
            path="/login"
            element={
              !isLoading && (
                <>
                  {" "}
                  <Login handleAuthentication={handleAuthentication} />
                  <Footer />{" "}
                </>
              )
            }
          />
          <Route
            path="/signup"
            element={
              !isLoading && (
                <>
                  <Signup handleAuthentication={handleAuthentication} />
                  <Footer />
                </>
              )
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
          <Route
            path="/howitworks"
            element={
              <>
                <Navbar />
                <HowItWorks />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:name"
            element={
              <>
                <Navbar />
                <Product />
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
