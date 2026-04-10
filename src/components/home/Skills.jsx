import Reveal from "../shared/Reveal";

const coreSkills = [
  "Kotlin",
  "Java",
  "Jetpack Compose",
  "Android SDK",
  "Clean Architecture",
  "MVVM / MVI",
  "Room",
  "Retrofit",
  "Hilt",
  "Coroutines / Flow",
  "WorkManager",
  "Firebase",
  "Unit Testing",
  "UI Testing",
  "Git / GitHub",
  "CI/CD"
];

function Skills() {
  return (
    <section className="section alt-section">
      <div className="container">
        <Reveal>
          <h2>Core Skills</h2>
          <div className="skills-grid">
            {coreSkills.map((skill) => (
              <div className="skill-chip" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
