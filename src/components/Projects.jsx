function Projects() {
  const projects = [
    {
      title: "BlogMind AI",
      description:
        "AI-powered blog intelligence and engagement platform built with Python and Flask. It performs blog discovery, content preprocessing, sentiment analysis, keyword extraction, topic modeling, summarization, and AI-generated comment creation using local LLMs.",
      tech: ["Python", "Flask", "NLP", "Ollama", "SerpAPI"],
      github: "https://github.com/ashiriqbal18/BlogMind-AI",
    },
    {
      title: "Cancer Prediction System",
      description:
        "Machine learning prediction system that analyzes patient data to predict cancer type, stage, severity score, treatment cost, and survival years using Random Forest models, data preprocessing pipelines, and an interactive Streamlit interface.",
      tech: ["Python", "Scikit-Learn", "Streamlit", "ML"],
      github: "https://github.com/ashiriqbal18/cancer-prediction-system",
    },
    {
      title: "Employee Attendance System",
      description:
        "Role-based employee attendance management system built with ASP.NET Core MVC and SQL Server. It includes authentication, authorization, employee management, attendance tracking, reporting, filtering, dashboards, and optimized database operations.",
      tech: ["ASP.NET Core", "SQL Server", "Dapper", "Bootstrap"],
      github: "https://github.com/ashiriqbal18/Employee-Attendance-system",
    },
    {
      title: "FitPlanner AI",
      description:
        "AI-powered workout planning system that generates personalized workout plans based on user fitness goals, experience level, available equipment, workout duration, and selected training days.",
      tech: ["Python", "Flask", "SQLite", "Algorithms"],
      github: "https://github.com/ashiriqbal18/FitPlanner",
    },
    {
      title: "Explore More Projects",
      description:
        "View my complete GitHub profile featuring Artificial Intelligence, Machine Learning, NLP, Full-Stack Development, database systems, and software engineering projects.",
      tech: ["GitHub", "AI", "ML", "Full-Stack"],
      github: "https://github.com/ashiriqbal18?tab=repositories",
      isGithubCard: true,
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className={`project-card ${
              project.isGithubCard ? "github-card" : ""
            }`}
            key={project.title}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              {project.isGithubCard ? "View GitHub Profile" : "View GitHub Code"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;