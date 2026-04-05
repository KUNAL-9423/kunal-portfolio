import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M3.18 23.76c.3.17.64.22.99.14l12.12-6.99-2.54-2.54-10.57 9.39zM.5 1.4C.19 1.74 0 2.24 0 2.9v18.2c0 .66.19 1.16.51 1.5l.08.07 10.2-10.2v-.24L.58 1.33.5 1.4zM20.49 10.7l-2.9-1.67-2.85 2.85 2.85 2.85 2.91-1.68c.83-.48.83-1.27-.01-1.75zM3.18.24L15.3 7.23l-2.54 2.54L2.19.38c.35-.08.7-.03.99.14v-.28z"/>
  </svg>
);

const projects = [
  {
    title: "YourMap",
    category: "Event Management & Place Guider",
    tools: [".NET Core", "REST API", "SQL", "AI Integration"],
    image: "/images/yourmap.png",
    number: "01",
    accent: "#7c3aed",
    links: [
      { label: "App Store", url: "https://apps.apple.com/il/app/yourmap-custom-map-planner/id1668429153", icon: "apple" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.eventmapbymoon.app", icon: "google" },
    ],
  },
  {
    title: "Bepco",
    category: "Inventory Management System",
    tools: [".NET Core", "SQL", "SignalR", "AI Camera"],
    image: "/images/bepco.jpg",
    number: "02",
    accent: "#14b8a6",
    links: [],
  },
  {
    title: "SOS Network Installer",
    category: "Remote Deployment Tool (WPF)",
    tools: ["WPF", ".NET Framework", "Networking", "C#"],
    image: "/images/sos.jpg",
    number: "03",
    accent: "#f59e0b",
    links: [],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToSlide = useCallback(
    (index: number, dir: "left" | "right" = "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex, "left");
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex, "right");
  }, [currentIndex, goToSlide]);

  const project = projects[currentIndex];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">

        <div className="work-header">
          <h2>My <span>Work</span></h2>
          <div className="work-nav">
            <button className="work-nav-btn" onClick={goToPrev} aria-label="Previous" data-cursor="disable">
              <MdArrowBack />
            </button>
            <span className="work-nav-count">
              {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <button className="work-nav-btn" onClick={goToNext} aria-label="Next" data-cursor="disable">
              <MdArrowForward />
            </button>
          </div>
        </div>

        <div className="work-card-wrap">
          <div
            className={`work-card ${isAnimating ? `work-card-exit-${direction}` : "work-card-enter"}`}
            key={currentIndex}
            style={{ "--project-accent": project.accent } as React.CSSProperties}
          >
            {/* Left: info */}
            <div className="work-card-info">
              <div className="work-card-num">{project.number}</div>
              <div className="work-card-meta">
                <p className="work-card-category">{project.category}</p>
                <h3 className="work-card-title">{project.title}</h3>
                <div className="work-card-tools">
                  {project.tools.map((t) => (
                    <span key={t} className="work-tool-tag">{t}</span>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="work-store-links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`work-store-btn work-store-${link.icon}`}
                        data-cursor="disable"
                      >
                        {link.icon === "apple" ? <AppStoreIcon /> : <PlayStoreIcon />}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: image */}
            <div className="work-card-image">
              <div className="work-card-image-glow" />
              <WorkImage image={project.image} alt={project.title} />
            </div>
          </div>

          {/* Progress bar */}
          <div className="work-progress">
            {projects.map((p, i) => (
              <button
                key={i}
                className={`work-progress-bar ${i === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(i, i > currentIndex ? "right" : "left")}
                aria-label={p.title}
                data-cursor="disable"
                style={{ "--bar-accent": p.accent } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
