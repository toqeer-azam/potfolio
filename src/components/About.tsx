import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software Engineering student with hands-on experience in frontend development, Android apps, Python projects, and game development using Unreal Engine 5. Skilled in building responsive websites, reviewing content, and completing technical projects with strong analytical, communication, and mentoring abilities.
        </p>
        <div style={{ marginTop: "20px", fontSize: "1.2rem", fontWeight: "bold" }}>
          <p>Location: Quetta, Pakistan</p>
          <p>Languages: Urdu, English</p>
        </div>
      </div>
    </div>
  );
};

export default About;
