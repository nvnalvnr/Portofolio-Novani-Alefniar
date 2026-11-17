import { PROFILE } from "../data";
import Portrait from "./Portrait";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <Portrait p={0} src={PROFILE.portrait} alt={`Portrait of ${PROFILE.name}`} />
      </div>

      <div className="pad hero-meta">
        <p>
          {PROFILE.city}, Indonesia
          <br />
          Portfolio {new Date().getFullYear()}
        </p>
        <p className="r">
          {PROFILE.role}
          <br />
          {PROFILE.focus}
        </p>
      </div>

      <h1 className="hero-name pad" aria-label={PROFILE.name}>
        {PROFILE.first} {PROFILE.last}
      </h1>
    </section>
  );
}