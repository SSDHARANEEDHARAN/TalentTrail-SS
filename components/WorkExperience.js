const Experience = () => {
  const experiancesItems = [

    {
      id: 1,
      title: "JANATICS",
      subTitle: "Mechatronics Product Designer",
      icon: "assets/img/icons/Work Experiance/JANATICS LOGO.svg",
      date: "From-2023",
    },
  
    {
      id: 2,
      title: "RINIX",
      subTitle: "IT survice Engg/SE",
      icon: "assets/img/icons/Work Experiance/RINEX LOGO.svg",
      date: "2023-2024",
    },

    {
      id: 3,
      title: "TVS",
      subTitle: "Mechanical Enginner",
      icon: "assets/img/icons/Work Experiance/LEYLAND LOGO.svg",
      date: "2019-2020",
    },
  
  ];
  return (
    <ul className="work-experiance-slider list-unstyled">
      {experiancesItems.map((item) => (
        <li key={item.id}>
          <div className="date">
            <p>{item.date}</p>
          </div>
          <div className="info">
            <div className="icon">
              <img src={item.icon} alt="adobe" />
            </div>
            <div className="text">
              <h4 className="title">{item.title}</h4>
              <h6 className="subtitle">{item.subTitle}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const WorkExperience = () => {
  return (
    <div className="card">
      <div className="card-body work-experiance-card">
        <h3 className="card-title">Work Experience</h3>
        <div className="work-experiance-main">
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
