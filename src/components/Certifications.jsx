function Certifications() {
  const certificates = [
    {
      title: "Machine Learning",
      platform: "Professional Certification",
      description:
        "Covered core machine learning concepts, supervised learning, model evaluation, predictive modeling, and practical ML workflows.",
    },
    {
      title: "AI Fundamentals",
      platform: "Professional Certification",
      description:
        "Learned foundational concepts of Artificial Intelligence, including AI use cases, automation, data analysis, and productivity-focused AI applications.",
    },
    {
      title: "Data Engineering Mastery Workshop",
      platform: "Workshop Certification",
      description:
        "Gained exposure to data engineering concepts, data preprocessing, cleaning, transformation, and structured data handling for analytics workflows.",
    },
    {
      title: "AI for App Building",
      platform: "Professional Certification",
      description:
        "Explored the use of AI tools and modern development workflows for building application features, automation systems, and intelligent user experiences.",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>

      <div className="cert-container">
        {certificates.map((cert) => (
          <div className="cert-card" key={cert.title}>
            <h3>{cert.title}</h3>
            <h4>{cert.platform}</h4>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;