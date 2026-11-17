import { PROFILE, STATS } from "../data";
import Portrait from "./Portrait";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="pad">
        <div className="sh">
          <span className="label">About me</span>
          <span className="label">(01)</span>
        </div>
      </div>

      <div className="pad about-grid">
        <div className="about-photo card rv">
          <Portrait p={1} src={PROFILE.portrait} alt={`Portrait of ${PROFILE.name}`} />
        </div>

        <div className="about-body">
          <p className="statement rv">
            {PROFILE.statement[0]} <span>{PROFILE.statement[1]}</span>
          </p>

          <div className="about-row">
            <p className="about-text rv">{PROFILE.about}</p>
            <div className="stats rv">
              {STATS.map(([n, l]) => (
                <div className="stat" key={l}>
                  <b>{n}</b>
                  <span className="label">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}