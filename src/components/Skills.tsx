const skills = [
  "Software Design",
  "Golang",
  "Python",
  "React",
  "Solitidy",
  "Relational Databases",
  "Docker",
]

function Skills() {
  return <>
    <section className="max-w-4xl mx-auto">
      <div>
        <h2 className="border-t-2 pt-2 text-4xl font-normal mb-12">Skills</h2>
      </div>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-5xl font-medium">
              {skill}
            </h3>
            {index < skills.length - 1 && (
              <div className="border-t border-gray-100 m-8"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  </>
}

export default Skills;
