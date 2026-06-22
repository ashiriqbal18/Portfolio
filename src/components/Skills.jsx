function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C++", "C#", "JavaScript", "HTML5", "CSS3", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "NLP",
        "Predictive Analytics",
        "LLMs",
        "Sentiment Analysis",
        "Topic Modeling",
      ],
    },
    {
      title: "Frameworks",
      skills: ["Flask", "FastAPI", "ASP.NET Core", "Streamlit", "React"],
    },
    {
      title: "Databases",
      skills: ["SQL Server", "Oracle SQL", "SQLite"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Power BI", "REST APIs", "DSA", "OOP"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-badges">
              {category.skills.map((skill) => (
                <span className="skill-badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;