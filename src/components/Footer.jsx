import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export function Footer() {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} Made with ❤️ by Senthil Kumari P
      </div>
      <div className="link">
        <a
          href="https://github.com/senthil-kumari/scrimba-reactfacts"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/senthil-kumari-paul-sami/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
