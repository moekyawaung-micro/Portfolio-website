import Reveal from "../components/shared/Reveal";
import { resumeData } from "../data/resume";

function ResumePage() {
  return (
    <main className="section">
      <div className="container">
        <Reveal>
          <h1>Resume</h1>
          <p>{resumeData.summary}</p>
        </Reveal>

        <Reveal>
          <h2>Skills</h2>
          <h3>Languages</h3>
          <p>{resumeData.skills.languages.join(", ")}</p>

          <h3>Android</h3>
          <p>{resumeData.skills.android.join(", ")}</p>

          <h3>Architecture</h3>
          <p>{resumeData.skills.architecture.join(", ")}</p>

          <h3>Data & Networking</h3>
          <p>{resumeData.skills.data.join(", ")}</p>

          <h3>Tooling</h3>
          <p>{resumeData.skills.tooling.join(", ")}</p>
        </Reveal>

        <Reveal>
          <h2>Experience</h2>
          {resumeData.experience.map((item) => (
            <div key={item.title} className="resume-block">
              <h3>{item.title}</h3>
              <p>
                <strong>{item.company}</strong> — {item.duration}
              </p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <a href="/resume.pdf" className="btn btn-primary">
            Download Resume
          </a>
        </Reveal>
      </div>
    </main>
  );
}

export default ResumePage;
