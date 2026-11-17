import { useState } from "react";
import { PROFILE, NAV_LINKS } from "../data";
import { Arrow } from "./Icons";
import "./Footer.css";

export default function Footer() {
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  // Membuka aplikasi email dengan pesan yang sudah terisi. Tidak butuh server.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${f.name}`);
    const body = encodeURIComponent(`${f.msg}\n\n${f.name}\n${f.email}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <footer className="footer" id="contact">
      <div className="pad foot-grid">
        <div className="foot-cta">
          <h2>Have a role or project in mind?</h2>
          <p>I am open to entry-level IT, web and PHP/Laravel opportunities. Send me a message.</p>

          <form className="form" onSubmit={submit}>
            <div className="row">
              <label htmlFor="f-name">
                <span className="label">Name</span>
                <input id="f-name" required value={f.name} onChange={set("name")} autoComplete="name" />
              </label>
              <label htmlFor="f-email">
                <span className="label">Email</span>
                <input id="f-email" type="email" required value={f.email} onChange={set("email")} autoComplete="email" />
              </label>
            </div>
            <label htmlFor="f-msg">
              <span className="label">Message</span>
              <textarea id="f-msg" rows="4" required value={f.msg} onChange={set("msg")} />
            </label>
            <div className="form-foot">
              <button className="btn" type="submit">Send message <Arrow /></button>
              <span className="label">{sent ? "Your email app should open now" : PROFILE.email}</span>
            </div>
          </form>
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