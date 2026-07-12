"use client";

import { useState } from "react";

/**
 * Figure — a graceful image placeholder.
 * While the real .jpg does not exist yet, it shows a labelled, on-brand
 * placeholder. Drop the real file at the same `src` path later and the photo
 * takes over automatically — no code change needed.
 */
export default function Figure({
  src,
  label,
  className = "",
  ratio,
}: {
  src: string;
  label: string;
  className?: string;
  ratio?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`fig ${className} ${loaded ? "is-loaded" : ""}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {!loaded && (
        <div className="fig-ph" aria-hidden="true">
          <span className="fig-ph-mark" />
          <span className="fig-ph-label">{label}</span>
          {failed && <span className="fig-ph-file">{src.split("/").pop()}</span>}
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}
