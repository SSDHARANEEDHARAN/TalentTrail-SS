import Awards from "@/components/Awards";
import Brands from "@/components/Brands";
import Testimonial from "@/components/Testimonial";
import WorkTogether from "@/components/WorkTogether";
import FolioLayout from "@/layout/FolioLayout";
import { Card, CardContent, Typography, Divider, Grid } from "@mui/material";

const page = () => {
  const counterItems = [
    { id: 1, title: "Year of Experience", value: 3 },
    { id: 2, title: "Project Completed", value: 7 },
    { id: 3, title: "Happy Client", value: 10 },
  ];

  const about = {
    name: "Dharanee Dharan SS",
    bio: "A Passionate <b>Full Stack Developer</b> &amp; <b>Engineering Product Designer</b> having <b>3 years </b> of Experience.",
  };

  const educationDetails = [
    {
      id: 1,
      degree: "Bannari Amman Instuite Of Technology",
      institution: "Anna University",
      year: "2019-2023",
    },
    {
      id: 2,
      degree: "Kongunadu Polytechnic College",
      institution: "Anna University",
      year: "2017-2019",
    },
  ];

  return (
    <FolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Hi, This Is <span>{about.name}</span>
                </h1>
                <p dangerouslySetInnerHTML={{ __html: about.bio }}></p>
              </div>
              <div className="available-btn">
                <span>
                  <i className="fas fa-circle" /> Available For Hire
                </span>
              </div>
            </div>
            <div className="counter-area">
              <div className="counter">
                {counterItems.map((item) => (
                  <div className="counter-item" key={item.id}>
                    <h3 className="number">{item.value}+</h3>
                    <p className="subtitle">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Education Section with Updated Heading Font */}
            <div>
              <h2 className="main-common-title">My Educational Journey</h2>
              {educationDetails.map((edu) => (
                <div key={edu.id}>
                  <h3 className="education-title h3">{edu.degree}</h3>
                  <h5 className="education-title h4">{edu.institution}</h5>
                  <h6 className="education-title h5">{edu.year}</h6>
                </div>
              ))}
            </div>
<br></br>
            <Brands />
            <Testimonial />
            <Awards />
            <WorkTogether />
          </div>
        </div>
      </div>
    </FolioLayout>
  );
};

export default page;
