import { PROFILE, NAV_LINKS } from "../data";
import { Arrow } from "./Icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="pad foot-grid">
        <div className="foot-cta">
          <h2>Have a role or project in mind?</h2>
          <p>I am open to entry-level IT, web and PHP/Laravel opportunities. Write to me and I will reply.</p>
          <a className="btn" href={`mailto:${PROFILE.email}`}>Email me <Arrow /></a>
          <span className="label">{PROFILE.email}</span>
        </div>

        <nav className="foot-links" aria-label="Footer">
          <h3 className="label">Navigate</h3>
          <ul>
            {NAV_LINKS.map(([t, id]) => (
              <li key={id}><a href={`#${id}`}>{t}</a></li>
            ))}
          </ul>
        </nav>

        <div className="foot-contact">
          <h3 className="label">Contact</h3>
          <ul>
            <li><span className="label">Phone</span>{PROFILE.phone}</li>
            <li><span className="label">LinkedIn</span><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">novani-alefniar ↗</a></li>
            <li><span className="label">GitHub</span><a href={PROFILE.github} target="_blank" rel="noreferrer">nvnalvnr ↗</a></li>
            <li><span className="label">Based in</span>{PROFILE.city}</li>
          </ul>
        </div>
      </div>

      <div className="pad legal">
        <span className="label">© {new Date().getFullYear()} {PROFILE.name}</span>
        <a className="label" href="#top">Back to top ↑</a>
      </div>

      <div className="giant" aria-hidden="true">{PROFILE.first}</div>
    </footer>
  );
}