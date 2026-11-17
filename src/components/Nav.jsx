import { useEffect, useState } from "react";
import { PROFILE, NAV_LINKS } from "../data";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // menandai menu sesuai bagian yang sedang dibaca
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_LINKS.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={"nav" + (open ? " open" : "")}>
      <div className="nav-bar pad">
        <a className="logo" href="#top" onClick={close}>
          <span className="logo-dot" />
          {PROFILE.first}
        </a>

        <nav className="links" aria-label="Main">
          <ul>
            {NAV_LINKS.slice(0, 4).map(([t, id]) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? "on" : ""}>{t}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-r">
          <span className="avail"><i />Open to work</span>
          <a className="nav-cta" href="#contact" onClick={close}>Contact</a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>

      <div className="drawer">
        <ul>
          {NAV_LINKS.map(([t, id]) => (
            <li key={id}><a href={`#${id}`} onClick={close}>{t}</a></li>
          ))}
        </ul>
      </div>
    </header>
  );
}