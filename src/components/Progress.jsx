import { useEffect, useRef } from "react";
import "./Progress.css";

// Garis oranye tipis di paling atas, memanjang sesuai seberapa jauh halaman di-scroll.
export default function Progress() {
  const bar = useRef(null);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.current.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <i ref={bar} />
    </div>
  );
}