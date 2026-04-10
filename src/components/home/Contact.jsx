import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";
import Reveal from "../shared/Reveal";

function Contact() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2>Let’s Connect</h2>
          <p>
            I’m currently open to Senior Android Developer opportunities,
            freelance work, and technical collaborations. If you’re building
            modern Android products and need support with Kotlin, Jetpack Compose,
            scalable architecture, or production-ready mobile development,
            I’d be happy to connect.
          </p>

          <div className="contact-list">
            <p>
              <FaGlobe className="inline-icon" />
              <strong>Portfolio:</strong>{" "}
              <a href="https://moekyawaung-micro.github.io" target="_blank" rel="noreferrer">
                moekyawaung-micro.github.io
              </a>
            </p>

            <p>
              <FaGithub className="inline-icon" />
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/moekyawaung-micro" target="_blank" rel="noreferrer">
                github.com/moekyawaung-micro
              </a>
            </p>

            <p>
              <FaLinkedin className="inline-icon" />
              <strong>LinkedIn:</strong>{" "}
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
                linkedin.com/in/your-linkedin
              </a>
            </p>

            <p>
              <FaEnvelope className="inline-icon" />
              <strong>Email:</strong>{" "}
              <a href="mailto:your-email@example.com">your-email@example.com</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
