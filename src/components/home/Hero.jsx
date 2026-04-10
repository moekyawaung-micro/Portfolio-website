import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload
} from "react-icons/fa";
import { MdAndroid } from "react-icons/md";
import { Link } from "react-router-dom";
import Reveal from "../shared/Reveal";

function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <Reveal>
          <div className="hero-layout">
            <div className="hero-text-block">
              <p className="eyebrow">
                <MdAndroid className="inline-icon" />
                Senior Android Developer
              </p>

              <h1>Moe Kyaw Aung</h1>

              <p className="hero-text">
                Senior Android Developer specializing in Kotlin, Jetpack Compose,
                and scalable mobile architecture. I build maintainable,
                production-ready Android applications with strong focus on clean
                architecture, reactive UI state, offline-first design, and
                long-term engineering quality.
              </p>

              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>

                <a href="/resume.pdf" className="btn btn-secondary">
                  <FaFileDownload className="btn-icon" />
                  Download Resume
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/moekyawaung-micro"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:your-email@example.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className="hero-image-block">
              <div className="hero-image-card">
                <img
                  src="/images/profile.jpg"
                  alt="Moe Kyaw Aung"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
