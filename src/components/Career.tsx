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
                <h4>Web Developer & Designer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Working on web development since 2024. Developed full-stack applications and responsive websites using HTML, CSS, JavaScript, React, Node.js, SQLite, Python, and C++. Handled deployments for Rehman Medical Complex & TRA Center Pharmacy, alongside designing social media posts and branding materials.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chart & Crypto Trader</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Analyzed market charts using technical indicators including RSI, MACD, EMA, and Volume. Executed manual and automated trades with risk-managed strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.S. Software Engineering</h4>
                <h5>BUITEMS, Quetta, Pakistan</h5>
              </div>
              <h3>Expected 2026</h3>
            </div>
            <p>
              Currently studying Software Engineering, focusing on practical skills through game development (Unreal Engine 5), AI development, and full-stack web technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
