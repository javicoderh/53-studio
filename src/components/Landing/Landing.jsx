import React from "react";
import "./Landing.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <h1>Studio 53</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="content-section">
          <h2>Elite Digital Samples</h2>
          <p>
            Discover high-quality samples crafted by the best, exclusively for you.
          </p>
          
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Studio 53. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
