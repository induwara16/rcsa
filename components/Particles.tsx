"use client";

import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

let loaded: boolean = false;

export default function Particles_() {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    if (loaded) {
      return;
    }
    loaded = true;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        className="dark:opacity-30"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              //@ts-expect-error lib error
              resize: true,
            },
            modes: {
              bubble: {
                opacity: 0.8,
                distance: 200,
                duration: 0.4,
                size: 20,
              },
            },
          },
          particles: {
            color: {
              value: "#a8dafe",
            },
            links: {
              color: "#a8dafe",
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                //@ts-expect-error lib error
                area: 800,
              },
              value: 120,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
}
