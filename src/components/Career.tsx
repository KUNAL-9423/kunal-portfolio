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
          <div className="career-info-box career-card">
            <div className="career-card-left">
              <div className="career-badge">Current</div>
              <h3>Jan 2025 — NOW</h3>
              <h4>.NET Developer</h4>
              <h5>Moon Technolabs</h5>
              <div className="career-tags">
                <span>.NET Core</span>
                <span>WPF</span>
                <span>SQL</span>
                <span>SignalR</span>
                <span>.NET MAUI</span>
                <span>C#</span>
              </div>
            </div>
            <div className="career-card-right">
              <p>
                Building production-ready .NET Core REST APIs, WPF desktop
                applications, and AI-integrated solutions at Moon Technolabs.
              </p>
              <ul className="career-projects">
                <li>
                  <span className="career-proj-name">YourMap</span> — Event
                  management &amp; place guider platform
                </li>
                <li>
                  <span className="career-proj-name">Bepco</span> — Inventory
                  management system with AI camera integration
                </li>
                <li>
                  <span className="career-proj-name">SOS Network Installer</span>{" "}
                  — WPF tool for remote multi-PC software deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
