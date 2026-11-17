import { useState } from "react";
import Art from "./Art";

// Foto potret. Kalau file foto tidak ada, tampil siluet di atas gradien.
export default function Portrait({ p = 0, src, alt }) {
  const [ok, setOk] = useState(Boolean(src));
  return (
    <Art p={p} className="portrait">
      {ok ? (
        <img className="portrait-img" src={src} alt={alt} onError={() => setOk(false)} />
      ) : (
        <svg className="sil" viewBox="0 0 400 500" aria-hidden="true">
          <circle cx="200" cy="165" r="78" fill="#0b0b0b" opacity="0.82" />
          <path d="M20 500C20 385 100 322 200 322s180 63 180 178Z" fill="#0b0b0b" opacity="0.82" />
        </svg>
      )}
    </Art>
  );
}