import { PROFILE, STATS } from "../data";
import Portrait from "./Portrait";
import Counter from "./Counter";
import { Arrow } from "./Icons";
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
            <div className="about-left rv">
              <p className="about-text">{PROFILE.about}</p>
              <a className="btn" href={PROFILE.cv} download>
                Download CV <Arrow />
              </a>
            </div>
            <div className="stats rv">
              {STATS.map(([n, l]) => (
                <div className="stat" key={l}>
                  <b><Counter to={Number(n)} /></b>
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