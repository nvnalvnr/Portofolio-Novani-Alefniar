import "./Art.css";

// Warna "foto" buram: [warna1, warna2, warna3, posisi-x, posisi-y]
const ART = [
  ["#ff5a14", "#12707f", "#ff2d6f", "-10%", "-5%"],
  ["#ff7a2f", "#4a2fb8", "#ffb199", "20%", "-20%"],
  ["#ffb347", "#c2410c", "#1d4ed8", "-20%", "10%"],
  ["#ff3d6e", "#ff8a3d", "#0f766e", "10%", "0%"],
  ["#2dd4bf", "#ff5a14", "#3b2a7a", "-5%", "-15%"],
  ["#f97316", "#7c2d12", "#fde68a", "0%", "10%"],
];

// Pengganti foto: gradien buram bergaya bokeh. Isi (children) ditaruh di atasnya.
export default function Art({ p = 0, className = "", children }) {
  const c = ART[p % ART.length];
  return (
    <div className={"art " + className} style={{ "--a": c[0], "--b": c[1], "--c": c[2], "--x": c[3], "--y": c[4] }}>
      <i />
      <i />
      <i />
      <div className="art-in">{children}</div>
    </div>
  );
}