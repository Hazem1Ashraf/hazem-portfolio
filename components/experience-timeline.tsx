export function ExperienceTimeline() {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Startup",
      period: "2023 - Present",
      description:
        "Leading frontend architecture and building scalable React applications with TypeScript. Mentoring junior developers and establishing best practices.",
      skills: ["React", "TypeScript", "Next.js", "Leadership"],
    },
    { 
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2021 - 2023",
      description:
        "Developed responsive web applications using modern React patterns. Collaborated with designers and backend teams to deliver pixel-perfect implementations.",
      skills: ["React", "JavaScript", "CSS", "REST APIs"],
    },
    {
      role: "Junior Developer",
      company: "Software Company",
      period: "2020 - 2021",
      description:
        "Started web development journey building static websites and learning modern frameworks. Contributed to various projects and gained hands-on experience.",
      skills: ["HTML", "CSS", "JavaScript", "Learning"],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative pl-8 pb-8">
          {/* Timeline line */}
          {idx !== experiences.length - 1 && (
            <div className="absolute left-2 top-8 w-0.5 h-20 bg-gradient-to-b from-primary to-transparent" />
          )}

          {/* Timeline dot */}
          <div className="absolute left-0 top-0 w-5 h-5 bg-primary rounded-full border-4 border-background" />

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
            <p className="text-sm text-accent">
              {exp.company} • {exp.period}
            </p>
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
