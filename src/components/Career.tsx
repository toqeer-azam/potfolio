import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Optima Solutions</h5>
              </div>
              <h3>Sep 2025 - Aug 2026</h3>
            </div>
            <p>
              Worked as a Full Stack Developer from September 2025 to August 2026. Built multiple websites as part of the development team across the full stack with React and Node.js, collaborating on feature development, fixes, and client delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web & POS Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Built and delivered full-stack POS and web systems for 4+ freelance clients covering sales, billing, inventory, and user management. Developed responsive, user-friendly websites using WordPress, React, Node.js, HTML, CSS, JavaScript, and PHP.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Graphic Designer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Designed social media posts, banners, thumbnails, and branding materials for freelance clients. Created promotional design assets for events, companies, and marketing campaigns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS, Software Engineering</h4>
                <h5>BUITEMS, Quetta, Pakistan</h5>
              </div>
              <h3>Graduated</h3>
            </div>
            <p>
              Studied Software Engineering with focus on full-stack web applications, game development (Unreal Engine 5 / C++), AI & data tooling in Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
