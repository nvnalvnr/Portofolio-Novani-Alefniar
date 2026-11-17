import { SKILLS } from "../data";
import Art from "./Art";
import { Arrow } from "./Icons";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="pad">
        <div className="sh">
          <span className="label">Skills</span>
          <span className="label">(02)</span>
        </div>
        <div className="skills-head">
          <h2 className="h-xl rv">Building clear, reliable web experiences</h2>
          <a className="more label" href="#projects">See projects <Arrow /></a>
        </div>
      </div>

      <div className="strip pad">
        {SKILLS.map((s, i) => (
          <article className={`scard card w${i % 3}`} key={s.group}>
            <Art p={i}>
              <div className="scard-in">
                <span className="label">0{i + 1}</span>
                <div>
                  <h3>{s.group}</h3>
                  <ul>
                    {s.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              </div>
            </Art>
          </article>
        ))}
      </div>
    </section>
  );
}