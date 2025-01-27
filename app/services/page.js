import Faq from "@/components/Faq";
import ServiceItem from "@/components/ServiceItem";
import WorkTogether from "@/components/WorkTogether";
import FolioLayout from "@/layout/FolioLayout";
const page = () => {
  const serviceItems = [
    { id: 1, icon: "assets/img/icons/Services/APP DEVELOPER.svg", title: "App Development" },
    { id: 2, icon: "assets/img/icons/Services/DESIGN ENGINEERING.svg", title: "Industrial Product Design" },
    {
      id: 3,
      icon: "assets/img/icons/Services/FULL STOCKDEVELOPER.svg",
      title: "Full Stock Web Development",
    },
    { id: 4, icon: "assets/img/icons/Services/TECH SOLUTIONS.svg", title: "Tech Soloutional-Fabng" },
    { id: 5, icon: "assets/img/icons/Services/IOT.svg", title: "IOT" },
    { id: 6, icon: "assets/img/icons/Services/Freelancer.svg", title: "Freelancer" },
    { id: 7, icon: "assets/img/icons/Services/Electronics.svg", title: "Electronics Kit Fab" },
    { id: 8, icon: "assets/img/icons/Services/3d printer.svg", title: "3D PRINTER SERVICES " },
  ];
  return (
    <FolioLayout>
      {" "}
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Services I <span>Offered</span>
                </h1>
                <p>
                  Transforming Ideas into Innovative Reality, Elevate Your
                  Vision with Our Expert <b>Product Design and Development</b>{" "}
                  Services!
                </p>
              </div>
              <div className="available-btn">
                <span>
                  <i className="fas fa-circle" /> Available For Hire
                </span>
              </div>
            </div>
            <div className="services">
              <div className="row g-4">
                <ServiceItem items={serviceItems} />
              </div>
              <div className="block-image">
                <img
                  src="assets/img/icons/Services/SMART.webp"
                  alt="blog-img-1"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <Faq/>
            <WorkTogether />
          </div>
        </div>
      </div>
      
    </FolioLayout>
  );
};
export default page;