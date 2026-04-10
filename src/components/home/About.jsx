import Reveal from "../shared/Reveal";

function About() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2>About Me</h2>
          <p>
            I’m a Senior Android Developer focused on building scalable,
            maintainable, and production-ready mobile applications using modern
            Android technologies. I enjoy solving architecture and product
            challenges through clean code, modular design, reactive state
            management, and practical engineering decisions.
          </p>
          <p>
            My core stack includes Kotlin, Jetpack Compose, Clean Architecture,
            MVVM/MVI, Room, Retrofit, Hilt, Coroutines, Flow, and WorkManager.
            I care deeply about long-term maintainability, user experience,
            performance, and engineering quality.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
