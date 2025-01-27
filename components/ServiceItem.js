import { Fragment } from "react";
const ServiceItem = ({ items }) => {
  return (
    <Fragment>
      {items.map((item) => (
        <div className="col-md-3 col-sm-6 col-6" key={item.id}>
          <div className="services-item text-center">
            <div className="image">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="text">
              <h3 className="title">{item.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};
export default ServiceItem;
