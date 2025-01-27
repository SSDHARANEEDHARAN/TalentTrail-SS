const ExpertArea = () => {
  const expertItems = [
    { id: 1, icon: "assets/img/icons/ExpertArea/Solidworks.svg", name: "Solidworks" },
    { id: 2, icon: "assets/img/icons/ExpertArea/Autocad.svg", name: "Autocad" },
    { id: 3, icon: "assets/img/icons/ExpertArea/Altium.svg", name: "Altium" },
    { id: 4, icon: "assets/img/icons/ExpertArea/Visual studio.svg", name: "VS Coad" },
    { id: 5, icon: "assets/img/icons/ExpertArea/Node Js.svg", name: "Node-js" },
    { id: 6, icon: "assets/img/icons/ExpertArea/React Js.svg", name: "React-js" },
    { id: 7, icon: "assets/img/icons/ExpertArea/Python.svg", name: "Python" },
    { id: 8, icon: "assets/img/icons/ExpertArea/Fusion.svg", name: "Fusion 360" },
    { id: 9, icon: "assets/img/icons/ExpertArea/Mongodb.svg", name: "MangoDB" },
  ];
  return (
    <div className="card expertise-card">
      <div className="card-body">
        <h3 className="card-title">My Expert Area</h3>
        <div className="expertise-main mt-24">
          <div className="row g-3">
            {expertItems.map((item) => (
              <div className="col-xl-4 col-md-4 col-sm-9 col-9" key={item.id}>
                <div className="expertise-item">
                  <div className="image text-center">
                    <img src={item.icon} alt={item.name} />
                  </div>
                  <div className="text">
                    <h4 className="title">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpertArea;
