import { STRENGTHS } from "../data";
import "./Strengths.css";

export default function Strengths() {
  return (
    <section className="strengths">
      <div className="pad">
        <div className="sh">
          <span className="label">Core strengths</span>
          <span className="label">(05)</span>
        </div>
        <h2 className="h-xl rv">What I bring<br />to a team</h2>

        <div className="sgrid">
          {STRENGTHS.map(([name, text], i) => (
            <article className="scell rv" key={name} style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
              <div className="scell-top">
                <span className="avatar">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <b>{name}</b>
                  <span className="label">Strength</span>
                </div>
                <span className="tag">CV</span>
              </div>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}