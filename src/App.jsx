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
import Profile from "./SubComponents/Profile/Profile";
import FirebaseData from "./FirebaseData/FirebaseData";
import LandTools from "./Screens/LandTool/LandTool";
import LandMap from "./Components/LandMap/LandMap";
import LandLend from "./Screens/LandLend/LandLend";
import RentNow from "./Screens/RentNow/RentNow";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [about, setAbout] = useState({});
  const navigate = useNavigate('');
  const handleAuthentication = (status) => {
    if (status == false) {
      localStorage.clear();
      localStorage.removeItem("RLog");
      localStorage.removeItem("RName");
    }

    setAuthenticated(status);
    
      navigate("/");
   
  };
  useEffect(() => {
    // console.log(about)
    // Simulate loading delay
    let val = localStorage.getItem("RLog");
    let username = localStorage.getItem("RName");
    let useremail = localStorage.getItem("email");

    if (val == "yes") {
      setIsLoading(false);
      setAuthenticated(true);
      setAbout({ "name":username,
      "email":useremail})
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
          <>
            {/* <FirebaseData/> */}
            <Navbar
              logstatus={authenticated}
              handleAuthentication={handleAuthentication}
            />
          </>
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
                    {listOfTools.map((e, id) => {
                      return (
                        <CategorySection
                          key={id}
                          name={e.name}
                          product={e.product}
                          url={e.url}
                        />
                      );
                    })}
                    <LandMap />
                    <Faq />
                    <Testimonials />
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
                  <Login
                    handleAuthentication={handleAuthentication}
                    setAbout={setAbout}
                  />
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
                  <Signup
                    handleAuthentication={handleAuthentication}
                    setAbout={setAbout}
                  />
                  <Footer />
                </>
              )
            }
          />
          <Route
            path="/Category/:name"
            element={
              <>
                <CategoryScreen />
                <Footer />
              </>
            }
          />
          <Route
            path="/Category/:name"
            element={
              <>
                <CategoryScreen />
                <Footer />
              </>
            }
          />
          <Route
            path="/howitworks"
            element={
              <>
                <HowItWorks />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:name"
            element={
              <>
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Profile />
                <Footer />
              </>
            }
          />
           <Route
            path="/profile/landTools"
            element={
              <>
                <LandTools/>
                <Footer />
              </>
            }
          />
          <Route
            path="/profile/rentnow"
            element={
              <>
                <RentNow />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile/lendland"
            element={
              <>
                <LandLend/>
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
