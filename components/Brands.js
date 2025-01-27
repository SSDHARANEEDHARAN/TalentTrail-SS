const Brands = () => {
  const brandItems = [
    { id: 1, icon: "assets/img/icons/ExpertArea/agriculture.svg", name: "Agriculture" },
    { id: 2, icon: "assets/img/icons/ExpertArea/Altium.svg", name: "Altium" },
    { id: 3, icon: "assets/img/icons/ExpertArea/Autocad.svg", name: "Autocad" },
    { id: 4, icon: "assets/img/icons/ExpertArea/cnc.svg", name: "CNC" },
    { id: 5, icon: "assets/img/icons/ExpertArea/Fusion.svg", name: "Fusion" },
    { id: 6, icon: "assets/img/icons/ExpertArea/iot.svg", name: "IOT" },
    { id: 7, icon: "assets/img/icons/ExpertArea/Mongodb.svg", name: "Mongodb" },
    { id: 8, icon: "assets/img/icons/ExpertArea/Node Js.svg", name: "Node" },
    { id: 9, icon: "assets/img/icons/ExpertArea/Python.svg", name: "Python" },
    { id: 10, icon: "assets/img/icons/ExpertArea/React Js.svg", name: "React" },
    { id: 11, icon: "assets/img/icons/ExpertArea/Solidworks.svg", name: "Solidworks" },
    { id: 12, icon: "assets/img/icons/ExpertArea/Visual studio.svg", name: "Visual studio" },
    { id: 13, icon: "assets/img/icons/ExpertArea/studio.svg", name: "Andriod studio" },
    { id: 14, icon: "assets/img/icons/ExpertArea/Arduino.svg", name: "Arduino" },
    { id: 15, icon: "assets/img/icons/ExpertArea/Figma.svg", name: "Figma" },
    { id: 16, icon: "assets/img/icons/ExpertArea/JavaScript.svg", name: "Java Script" },
    { id: 17, icon: "assets/img/icons/ExpertArea/Tailwindcss.svg", name: "Tailwindcss" },
    { id: 18, icon: "assets/img/icons/ExpertArea/Firebase.svg", name: "Firebase" },
    { id: 18, icon: "assets/img/icons/ExpertArea/Raspberry-pi.svg", name: "Raspberry-pi" },
    { id: 19, icon: "assets/img/icons/ExpertArea/4.0.svg", name: "MMS" },
    { id: 20, icon: "assets/img/icons/ExpertArea/Cobot Trainer Kit.gif", name: "Cobot Trainer Kit" },
  ];
  return (
    <div className="working-with-area">
      <h2 className="main-common-title">
        Working With 15+ Brands Worldwide
      </h2>
      <div className="working-with-main">
        {brandItems.map((item) => (
          <div className="items" key={item.id}>
            <img src={item.icon} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
