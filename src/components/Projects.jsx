import { WORKS } from "../data";
import Art from "./Art";
import { Arrow } from "./Icons";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="ghost" aria-hidden="true">Projects</div>

      <div className="pad">
        <div className="sh">
          <span className="label">Selected projects</span>
          <span className="label">(03)</span>
        </div>

        <div className="pgrid">
          {WORKS.map((w, i) => {
            const Tag = w.link ? "a" : "div";
            const props = w.link ? { href: w.link, target: "_blank", rel: "noreferrer" } : {};
            return (
              <article className={"pcard card rv" + (i === WORKS.length - 1 ? " wide" : "")} key={w.name}>
                <Tag className="pcard-img" {...props}>
                  <Art p={i + 2}>
                    <div className="pcard-in">
                      <ul className="tags">
                        {w.stack.map((s) => <li key={s}>{s}</li>)}
                      </ul>
                      {w.link && <span className="go"><Arrow /></span>}
                    </div>
                  </Art>
                </Tag>
                <div className="pcap">
                  <div>
                    <h3>{w.name}</h3>
                    <p className="label">{w.type}</p>
                  </div>
                  <p className="pdesc">{w.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}