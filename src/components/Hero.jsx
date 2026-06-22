function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="tag">
          AI Developer • Machine Learning • Full-Stack Development
        </p>

        <h1>
          Muhammad <span>Ashir Iqbal</span>
        </h1>

        <p className="description">
          Computer Science student specializing in Artificial Intelligence,
          focused on building intelligent, data-driven, and full-stack
          applications using Python, Machine Learning, NLP, React, ASP.NET Core,
          and SQL-based technologies.
        </p>

        <div className="buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/Muhammad_Ashir_Iqbal_CV.pdf"
            download="Muhammad_Ashir_Iqbal_CV.pdf"
            className="secondary-btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;