function Experience() {
  const experiences = [
    {
      title: "IT Intern",
      company: "Karachi Development Authority",
      duration: "February 2026 – March 2026",
      description:
        "Completed a 4-week internship in the Information Technology Department. Gained practical exposure to server infrastructure, data center operations, server maintenance, enterprise IT systems, network infrastructure, and technical support workflows.",
    },
    {
      title: "NLP Intern",
      company: "Elevvo Pathways",
      duration: "August 2025 – September 2025",
      description:
        "Completed a Natural Language Processing internship with hands-on experience in text preprocessing, tokenization, NLP model building, and practical AI/ML workflows for real-world language-based applications.",
    },
    {
      title: "DotNet & Power BI Intern Developer",
      company: "Evincible Solutions",
      duration: "July 2025 – August 2025",
      description:
        "Worked on full-stack development, database design, and cross-platform application development. Built web applications using ASP.NET MVC/Core, SQL Server, Entity Framework, Dapper ORM, AJAX, jQuery, and DataTables.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>

      <div className="experience-container">
        {experiences.map((exp) => (
          <div className="experience-card" key={`${exp.title}-${exp.company}`}>
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;