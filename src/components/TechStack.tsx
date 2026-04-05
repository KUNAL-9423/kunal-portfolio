import "./styles/TechStack.css";

const techs = [
  { name: ".NET Core", icon: "/images/dotnet.svg", color: "#512BD4" },
  { name: "C#", icon: "/images/csharp.svg", color: "#239120" },
  { name: "SQL Server", icon: "/images/sql.svg", color: "#CC2927" },
  { name: "WPF", icon: "/images/wpf.svg", color: "#0078D4" },
  { name: "XAML", icon: "/images/xaml.svg", color: "#00ADEF" },
  { name: ".NET MAUI", icon: "/images/dotnet.svg", color: "#512BD4" },
  { name: "SignalR", icon: "/images/azure.svg", color: "#0089D6" },
  { name: "Angular", icon: "/images/angular.svg", color: "#DD0031" },
  { name: "React", icon: "/images/reactjs.svg", color: "#61DAFB" },
  { name: "Azure", icon: "/images/azure.svg", color: "#0078D4" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>
      <div className="tech-grid">
        {techs.map((tech) => (
          <div className="tech-card" key={tech.name} style={{ "--tech-color": tech.color } as React.CSSProperties}>
            <div className="tech-icon-wrap">
              <img src={tech.icon} alt={tech.name} />
            </div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
