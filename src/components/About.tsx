import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Full stack developer and Software Engineering graduate with hands-on experience building production-style POS, inventory, and e-commerce systems using React and Node.js. Delivered freelance web and POS solutions for 4+ clients, and independently built a C++ RPG in Unreal Engine 5. Comfortable across the stack: React/JS frontends, Node.js backends, WordPress/PHP builds, and basic data/ML tooling in Python.
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
