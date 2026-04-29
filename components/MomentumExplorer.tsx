"use client";

import Image from "next/image";
import { ArrowLeft, RotateCcw, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { scenes, type AwePath } from "@/lib/scenes";
import { sitePath } from "@/lib/site";

const pathCopy: Record<AwePath, string> = {
  people: "Notice the years of practice, courage, and care behind what people build.",
  nature: "Look for scale, pattern, time, and beauty beyond your usual frame.",
  everyday: "Find wonder in objects, routines, meals, streets, tools, and quiet moments."
};

export function AweExplorer() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [trail, setTrail] = useState<AwePath[]>([]);
  const scene = scenes[levelIndex];
  const selectedPath = trail.at(-1);

  const progress = useMemo(
    () => Math.round(((levelIndex + 1) / scenes.length) * 100),
    [levelIndex]
  );

  function choosePath(path: AwePath) {
    setTrail((current) => [...current, path]);
    setLevelIndex((current) => Math.min(current + 1, scenes.length - 1));
  }

  function stepBack() {
    setTrail((current) => current.slice(0, -1));
    setLevelIndex((current) => Math.max(current - 1, 0));
  }

  function restart() {
    setTrail([]);
    setLevelIndex(0);
  }

  return (
    <main className="app-shell">
      <header className="topbar" aria-label="Awe In Life controls">
        <a className="brand" href={sitePath("/")}>
          <Sparkles aria-hidden="true" size={18} />
          <span>Awe In Life</span>
        </a>
        <div className="actions">
          <button onClick={stepBack} disabled={levelIndex === 0} aria-label="Go back">
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button onClick={restart} aria-label="Restart">
            <RotateCcw aria-hidden="true" size={18} />
          </button>
        </div>
      </header>

      <section className="stage" aria-label="Interactive awe map">
        <picture>
          <source media="(max-width: 720px)" srcSet={sitePath(scene.mobileImage)} />
          <Image
            className="scene-image"
            src={sitePath(scene.desktopImage)}
            alt={`${scene.title}: ${scene.focus}`}
            width={1600}
            height={1000}
            priority={levelIndex === 0}
            sizes="100vw"
          />
        </picture>

        <div className="hitbox-layer" aria-label="Choose an awe path">
          {scene.hitboxes.map((hitbox) => (
            <button
              key={hitbox.path}
              className={`hitbox hitbox-${hitbox.path}`}
              style={{
                left: `${hitbox.x}%`,
                top: `${hitbox.y}%`,
                width: `${hitbox.width}%`,
                height: `${hitbox.height}%`
              }}
              onClick={() => choosePath(hitbox.path)}
              disabled={levelIndex === scenes.length - 1}
              aria-label={`Choose ${hitbox.label}`}
            >
              <span>{hitbox.label}</span>
            </button>
          ))}
        </div>

        <aside className="status-panel" aria-label="Current progress">
          <div className="status-row">
            <span>Level {levelIndex + 1} of {scenes.length}</span>
            <span>{progress}%</span>
          </div>
          <div className="meter" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
          <h1>{scene.title}</h1>
          <p>{selectedPath ? pathCopy[selectedPath] : scene.focus}</p>
          <div className="trail" aria-label="Selected path trail">
            {trail.length === 0 ? (
              <span>Pick a path</span>
            ) : (
              trail.map((path, index) => <span key={`${path}-${index}`}>{path}</span>)
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}
