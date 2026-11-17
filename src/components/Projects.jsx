import { useEffect, useState } from "react";
import { WORKS, FILTERS } from "../data.js";
import Art from "./Art.jsx";
import { Arrow } from "./Icons.jsx";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null); // proyek yang sedang dibuka di jendela detail

  const list = WORKS.filter((w) => filter === "All" || w.cat.includes(filter));

  // Esc menutup jendela detail, dan halaman di belakangnya dikunci
useEffect(() => {
  if (!open) return;

  const previousOverflow = document.body.style.overflow;

  const onKey = (e) => {
    if (e.key === "Escape") setOpen(null);
  };

  window.addEventListener("keydown", onKey);
  document.body.style.overflow = "hidden";

  return () => {
    window.removeEventListener("keydown", onKey);
    document.body.style.overflow = previousOverflow;
  };
}, [open]);

  return (
    <section className="projects" id="projects">
      <div className="ghost" aria-hidden="true">Projects</div>

      <div className="pad">
        <div className="sh">
          <span className="label">Selected projects</span>
          <span className="label">(03)</span>
        </div>

        <div className="filters" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button key={f} className={"chip" + (filter === f ? " on" : "")} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
              <sup>{f === "All" ? WORKS.length : WORKS.filter((w) => w.cat.includes(f)).length}</sup>
            </button>
          ))}
        </div>

        <div className="pgrid">
          {list.map((w, i) => {
            const wide = list.length > 1 && list.length % 2 === 1 && i === list.length - 1;
            return (
              <article className={"pcard card" + (wide ? " wide" : "")} key={w.name}>
                <button className="pcard-img" onClick={() => setOpen(w)} aria-label={`Open details of ${w.name}`}>
                  <Art p={WORKS.indexOf(w) + 2}>
                    <div className="pcard-in">
                      <ul className="tags">
                        {w.stack.map((s) => <li key={s}>{s}</li>)}
                      </ul>
                      <span className="go"><Arrow /></span>
                    </div>
                  </Art>
                </button>
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

      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={open.name} onClick={() => setOpen(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-art">
              <Art p={WORKS.indexOf(open) + 2} />
            </div>
            <div className="modal-body">
              <button className="close" aria-label="Close" onClick={() => setOpen(null)}>
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
              <span className="label">{open.type}</span>
              <h3>{open.name}</h3>
              <p className="mdesc">{open.desc}</p>
              <ul className="mpoints">
                {open.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <ul className="tags">
                {open.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
              {open.link ? (
                <a className="btn" href={open.link} target="_blank" rel="noreferrer">View live site <Arrow /></a>
              ) : (
                <span className="label">Source code available on request</span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}