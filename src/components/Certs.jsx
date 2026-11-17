import { CERTS } from "../data";
import Art from "./Art";
import "./Certs.css";

export default function Certs() {
  return (
    <section className="certs">
      <div className="pad">
        <div className="sh">
          <span className="label">Certifications</span>
          <span className="label">(06)</span>
        </div>

        <div className="cgrid">
          {CERTS.map(([by, title], i) => (
            <article className="ccard card rv" key={title} style={{ transitionDelay: `${i * 0.08}s` }}>
              <Art p={i + 1}>
                <div className="ccard-in">
                  <span className="label">{by}</span>
                  <h3>{title}</h3>
                </div>
              </Art>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}