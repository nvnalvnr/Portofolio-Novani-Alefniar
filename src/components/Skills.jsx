
import { SKILLS } from "../data";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills pad" id="skills">
      <div className="skills-heading rv">
        <span className="label">(03) Skills</span>
        <h2>What I work with.</h2>
      </div>

      <div className="skills-list">
        {SKILLS.map((s, i) => (
          <div
            className="skill rv"
            key={s.group}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="skill-index">0{i + 1}</span>

            <div className="skill-content">
              <h3>{s.group}</h3>

              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
