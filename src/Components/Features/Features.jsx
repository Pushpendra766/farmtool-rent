import React, { useEffect, useRef } from "react";
import "./Features.css";
const Features = () => {
  useEffect(() => {
    init();
  }, []);
  return (
    <div id="body">
    <div id="viewport"> 
    <div id="scroll" >Scroll down</div>
    <div id="world"> 
    
     <svg id="svg" viewBox="0 0 3000 3000"> <path id="path" d="M4000,0C1000,882.5,1000,882.5,0,0"></path> 
     </svg> 
     <div className="features"> 
      <div className="f1 ">
        
        <img src="src\assets\f1.png" />
      </div> 
      <div className="f2 ">
      <img src="src\assets\f2.png" />
      </div> 
      <div className="f3 ">
      <img src="src\assets\f3.png" />
      </div> 
      <div className="f4 ">
      <img src="src\assets\f4.png" />
      </div> 
      <div className="f5">
      Searching equipment through location is also available
      </div> 
     </div> 
     <div id="tractor"> 
      <div className="body"> 
       <div className="exhaust"></div> 
       <div className="ventilation"></div> 
       <div className="window"></div> 
       <div className="wheel"></div> 
       <div className="wheel-inner"></div> 
       <div className="wheel-small"></div> 
       <div className="wheel-small-inner"></div> 
      </div> 
     </div> 
    </div> 
   </div> 
   </div>
  );
};

export default Features;

function init() {
  const viewport = document.querySelector("#viewport");
  const world = document.querySelector("#world");

  function drawBore() {
    var worldw = document.getElementById("world").offsetWidth;
    var worldwhalf = worldw / 4;
    var vieww = window.innerWidth / 4;
    var worldh = window.innerHeight / 2;
    var pathd =
      "M" +
      worldw +
      ",0C" +
      worldwhalf +
      "," +
      worldh / 0.8 +
      "," +
      worldwhalf / 3 +
      "," +
      worldh / 3 +
      ",0,0";
    console.log(pathd);
    $("#path").attr("d", pathd);
  }
  drawBore();
  window.addEventListener("resize", drawBore);

  const pilot = document.querySelector("#tractor");

  const worldWidth = world.offsetWidth;
  const worldHeight = world.offsetHeight;
  const features = document.querySelectorAll(".features div");
  const setX = gsap.quickSetter(world, "x", "px");
  const setY = gsap.quickSetter(world, "y", "px");
  const setOrigin = gsap.quickSetter(world, "transformOrigin");
  const beeProps = gsap.getProperty(pilot);

  let vw, vh, clampX, clampY;
  onResize();

  gsap.set("#svg", {
    width: 5000,
    height: 5000,
  });

  gsap.set(pilot, {
    xPercent: -50,
    yPercent: -50,
    x: path[0],
    y: path[1],
  });

  gsap.from(pilot, {
    motionPath: {
      path: "#path",
      autoRotate: 180,
    },
    ease: "none",
    scrollTrigger: {
      scrub: 1,
    },
  });

  /** DrawSVG  path animation **/
  TweenLite.set("#path", { scaleX: 1, transformOrigin: "center center" });

  var action = gsap.from("#path", {
    duration: 1,
    ease: "none",
    matrix: { a: 3, b: 0, c: 0, d: 2, e: 0, f: 0 },

    type: "cubic",
    scrollTrigger: {
      scrub: 1,
      start: "top",
      end: "bottom 100%",
      onUpdate: (self) => {
        // document.getElementsByClassNameName('st0')[0].style.strokeWidth="15px"
      },
    },
    drawSVG: 1,
  });

  gsap.ticker.add(update);

  function update() {
    const x = beeProps("x");
    const y = beeProps("y");
    if (x > 100 && x < 700) {
      features[0].style.opacity = 1;
      features[0].style.transform = "translateX(" + 300 + "px)";
    } else if (x > 800 && x < 1400) {
      features[1].style.opacity = 1;
      features[1].style.transform = "translateX(" + 800 + "px)";
    } else if (x > 1600 && x < 2100) {
      features[2].style.opacity = 1;
      features[2].style.transform = "translateX(" + 1400 + "px)";
    } else if (x > 2100 && x < 3000) {
      features[3].style.opacity = 1;
      features[3].style.transform = "translateX(" + 2500 + "px)";
    } else if (x > 2900 && x < 4000) {
      features[4].style.opacity = 1;
      features[4].style.transform = "translateX(" + 3000 + "px)";
    } else {
      for (let i = 0; i < features.length; i++) features[i].style.opacity = 0;
    }

    setX(-clampX(x - vw / 2));
    setY(-clampY(y - vh / 2));
  }

  window.addEventListener("resize", onResize);

  function onResize() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    clampX = gsap.utils.clamp(0, worldWidth - vw);
    clampY = gsap.utils.clamp(0, worldHeight - vh);
  }
}
