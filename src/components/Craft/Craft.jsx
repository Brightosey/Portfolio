import "./Craft.scss";

function Craft() {
  const skillSets = [
    { name: "HTML", level: 100 },
    { name: "SCSS", level: 100 },
    { name: "JAVASCRIPT", level: 80 },
    { name: "REACT", level: 80 },
    { name: "NODE", level: 90 },
    { name: "EXPRESS", level: 90 },
    { name: "mySQL", level: 50 },
    { name: "KNEX", level: 80 },
    { name: "GIT", level: 90 },
  ];

  const hobbies = [
    { name: "side-projects", level: 90 },
    { name: "problem-solving", level: 90 },
    { name: "public-speaking", level: 90 },
    { name: "Dev-talk", level: 90 },
    { name: "Jornaling", level: 90 },
    { name: "Mentoring", level: 90 },
    { name: "Quiet-time", level: 90 },
  ];

  return (
    <section className="craft">
      <article className="craft__skills">
        <h2 className="craft__title">Skills</h2>
        {skillSets.map((skill, index) => (
          <div
            key={index}
            className="craft__skill"
            style={{ "--width": `${skill.level}%` }}
          >
            <div className="craft__skill-info">
              <p className="craft__skill-name">{skill.name}</p>
              <p className="craft__skill-level">{skill.level}%</p>
            </div>
            <div className="craft__skill-bar">
              <div
                className="craft__skill-fill"
              ></div>
            </div>
          </div>
        ))}
      </article>

      <article className="craft__hobbies">
        <h2 className="craft__title">Hobbies</h2>
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="craft__hobby"
            style={{ "--width": `${hobby.level}%` }}
          >
            <div className="craft__hobby-info">
              <p className="craft__hobby-name">{hobby.name}</p>
              <p className="craft__hobby-level">{hobby.level}%</p>
            </div>
            <div className="craft__hobby-bar">
              <div
                className="craft__hobby-fill"
              ></div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Craft;
