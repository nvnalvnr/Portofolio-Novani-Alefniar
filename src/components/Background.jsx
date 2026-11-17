import { PATH, LANGS, PROFILE } from "../data";
import Art from "./Art";
import { Arrow, Check } from "./Icons";
import "./Background.css";

export default function Background() {
  return (
    <section className="background" id="background">
      <div className="pad">
        <div className="sh">
          <span className="label">Education &amp; experience</span>
          <span className="label">(04)</span>
        </div>

        <div className="bg-grid">
          <div className="bg-main rv">
            <div className="bg-top">
              <div>
                <span className="label">Background</span>
                <h2>Information Systems, Gunadarma University</h2>
                <p>Information technology, business processes, database concepts and application development.</p>
              </div>
              <span className="pill">2017 — 2022</span>
            </div>

            <ul className="bg-list">
              {PATH.map((p) => (
                <li key={p.title}>
                  <Check />
                  <div>
                    <b>{p.title}</b>
                    <span className="label">{p.when} · {p.place}</span>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-bottom">
              <div className="big">2022<span className="label">Graduated</span></div>
              <a className="btn" href="#contact">Get in touch <Arrow /></a>
            </div>
          </div>

          <aside className="bg-side rv">
            <div className="ring">
              <Art p={0} className="ring-art" />
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <defs><path id="ring-path" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" /></defs>
                <text fontSize="13" fontFamily="DM Mono, monospace" fill="#f3f1ee" letterSpacing="3">
                  <textPath href="#ring-path">AVAILABLE FOR ENTRY-LEVEL ROLES • IT • WEB • PHP / LARAVEL •</textPath>
                </text>
              </svg>
            </div>
            <div className="side-info">
              <span className="label">Looking for</span>
              <h3>Entry-level IT, web or Laravel roles</h3>
              <ul className="langs">
                {LANGS.map(([l, v]) => <li key={l}><span>{l}</span><span className="label">{v}</span></li>)}
              </ul>
              <p className="label">{PROFILE.city}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}