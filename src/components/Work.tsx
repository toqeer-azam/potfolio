import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { name: "Hospital/Pharmacy POS System", category: "Web Apps", tools: "React, Node.js, SQLite", img: ["/images/pharmacy1.png", "/images/pharmacy2.png", "/images/pharmacy3.png", "/images/pharmacy4.png"], link: "https://github.com/toqeer-azam" },
            { name: "Hack-and-Slash RPG (FYP)", category: "Game Dev", tools: "C++, Unreal Engine 5, Blueprints", img: "/images/ue5.png", link: "https://github.com/toqeer-azam" },
            { name: "3D Café Ordering App", category: "3D Web App", tools: "React, Three.js", img: "/images/2dgame.png", link: "https://github.com/toqeer-azam" },
            { name: "E-Commerce Website", category: "Web Store", tools: "WordPress, WooCommerce, PHP", img: "/images/ecom.png", link: "https://github.com/toqeer-azam" },
            { name: "Automated Email System", category: "Python & AI", tools: "Python, SMTP", img: "/images/email.jfif", link: "https://github.com/toqeer-azam" },
            { name: "Certificate Sender", category: "Python Tool", tools: "Python, Streamlit", img: "/images/placeholder.webp", link: "https://github.com/toqeer-azam" },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.img} alt="" link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
