'use client';

import { useState, useEffect } from "react";
import WorkTogether from "@/components/WorkTogether";
import FolioLayout from "@/layout/FolioLayout";
import Link from "next/link";
import { Alert } from '@mui/material';

const page = () => {
  const projectItems = [
    {
      id: 1,
      title: "EFFI-QUE EV CAR",
      subtitle: "Product Design And Fabrications | Application",
      img: "assets/img/projects/EV-1.jpg",
      description: "The EFFI-QUE EV Car is designed to be an energy-efficient electric vehicle with a focus on sustainability, reducing environmental impact, and enhancing user experience.",
      challenges: "Major challenges included designing an affordable yet efficient powertrain and managing battery performance for longer range.",
      results: "Successfully created a prototype with a 300-mile range per charge and a low manufacturing cost, making it ideal for mass production.",
      overview: "The EFFI-QUE EV Car blends cutting-edge design and eco-friendly technology, offering a breakthrough in electric vehicle performance.",
      applications: "Targeted for the urban transportation market, it promises an eco-friendly solution for daily commuters and fleets."
    },
    {
      id: 2,
      title: "Industrial BORBIQUE Cooking Machine",
      subtitle: "Product Design And Fabrications | Application",
      img: "assets/img/projects/Industrial Stove.jpg",
      description: "This industrial cooking machine is designed to provide efficient and safe cooking for large-scale food production.",
      challenges: "The main challenge was creating a cooking machine that could handle high volumes while ensuring safety and ease of use.",
      results: "The final product can cook large quantities of food with minimal energy consumption and high safety standards.",
      overview: "The machine features automation to streamline cooking processes, making it ideal for industrial kitchens.",
      applications: "This product is primarily used in large-scale kitchens, such as those in factories and hotels, for efficient cooking."
    },
    {
      id: 3,
      title: "Efficient and Sustainable Rocket Stove",
      subtitle: "Solidworks Design | Development",
      img: "assets/img/projects/Solidworks.png",
      description: "A highly efficient stove designed for sustainability and reducing fuel consumption in rural areas.",
      challenges: "The main challenge was ensuring that the stove was both efficient and easy to use in remote areas.",
      results: "The stove uses a fraction of the fuel compared to traditional stoves and provides faster cooking times.",
      overview: "Designed using Solidworks, the rocket stove is a breakthrough in energy-efficient cooking technology.",
      applications: "Perfect for use in rural areas with limited access to energy, this stove promotes sustainability."
    },
    {
      id: 4,
      title: "Self-Navigating Robot for Safe and Smart Movement",
      subtitle: "IOT | Application Product",
      img: "assets/img/projects/4.0 AMR SELF DRIVE.jpg",
      description: "A self-navigating robot that uses sensors and AI to safely navigate its environment autonomously.",
      challenges: "Integrating the sensors, AI, and safety protocols to ensure smooth, accurate navigation.",
      results: "The robot performs autonomous navigation in complex environments, reducing human intervention and increasing safety.",
      overview: "This self-navigating robot utilizes IoT technologies for smart movement and safety.",
      applications: "Primarily designed for use in warehouses, factories, and hazardous environments where human presence should be minimized."
    },
    {
      id: 5,
      title: "IoT Smart Home Automation",
      subtitle: "IOT | Application Product",
      img: "assets/img/projects/IOT KIT.jpg",
      description: "An IoT-based smart home automation system that controls lights, appliances, and security devices remotely.",
      challenges: "Ensuring compatibility across different devices and seamless control over the internet was the major challenge.",
      results: "The system integrates multiple home devices and provides remote control through a user-friendly interface.",
      overview: "This smart home automation product empowers users to manage their home appliances with ease.",
      applications: "Ideal for residential homes, offering convenience, energy-saving features, and enhanced security."
    },
    {
      id: 6,
      title: "MINI-ELECTRONIC FRDGE",
      subtitle: "Electronic | Application Product",
      img: "assets/img/projects/MINI-ELECTRONIC FRDGE.jpg",
      description: "A compact electronic fridge designed for personal or small-scale use, offering energy efficiency.",
      challenges: "Designing a mini-fridge that provides adequate cooling while using minimal electricity.",
      results: "This mini fridge uses 40% less energy than conventional models while providing reliable cooling.",
      overview: "The MINI-ELECTRONIC FRDGE is an ideal solution for those in need of compact refrigeration without compromising on performance.",
      applications: "Perfect for small apartments, offices, or travel, where space and energy consumption are a concern."
    },
    {
      id: 7,
      title: "3D EXTRUDER MACHINE",
      subtitle: "Electronic | Application Product",
      img: "assets/img/projects/3d Extruder.jpg",
      description: "A 3D extruder machine used for creating customized objects by melting plastic filament.",
      challenges: "The complexity of handling different filament types while maintaining a steady extrusion rate.",
      results: "The machine is capable of producing high-quality 3D objects with various filament materials.",
      overview: "The 3D EXTRUDER MACHINE is a versatile tool for both prototyping and manufacturing purposes.",
      applications: "Commonly used in prototyping, custom manufacturing, and small-scale 3D printing projects."
    },
    {
      id: 8,
      title: "Automatic Bottle Filling Machine",
      subtitle: "Industrial Automation | Application Product",
      img: "assets/img/projects/Automatic Bottle Filling Machine.jpg",
      description: "An automated system for filling bottles in an efficient, high-speed production line.",
      challenges: "Ensuring the machine could handle different bottle sizes and fill liquids accurately and quickly.",
      results: "The machine can handle various bottle sizes and fill them with precision, reducing manual labor.",
      overview: "Designed for high-volume industrial production, this machine enhances efficiency in bottling plants.",
      applications: "Perfect for industries involved in bottling beverages, chemicals, and cleaning products."
    },
    {
      id: 9,
      title: "EV Rotator for Agriculture",
      subtitle: "Agricultural Automation | Application Product",
      video: "assets/img/projects/MINI ROTATOR.mp4", // Ensure the video path is correct
      description: "An automated rotating system designed for efficient and accurate handling of agricultural produce.",
      challenges: "Managing different types of crops and ensuring smooth rotation without damage to the produce.",
      results: "The system ensures quick and careful handling of various agricultural products, improving workflow and reducing labor costs.",
      overview: "The machine uses precision rotators to gently rotate and handle crops, ensuring minimal damage and high throughput.",
      applications: "This machine is ideal for agricultural farms, greenhouses, and processing plants that handle large volumes of produce."
    }    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [blurred, setBlurred] = useState(false);
  const [openProjectId, setOpenProjectId] = useState(null);  // State to manage dropdown visibility
  const itemsPerPage = 2;

  const currentItems = projectItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < Math.ceil(projectItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleProjectDetails = (id) => {
    setOpenProjectId(openProjectId === id ? null : id); // Toggle visibility
  };

  useEffect(() => {
    // Disabling right-click and other interactions globally
    const handleRightClick = (e) => {
      e.preventDefault();
      setBlurred(true);
    };

    const handleDrag = (e) => {
      e.preventDefault();
      setBlurred(true);
    };

    const handleCopy = (e) => {
      e.preventDefault();
      setBlurred(true);
    };

    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("dragstart", handleDrag);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("dragstart", handleDrag);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return (
    <FolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Check Out My Latest <span>Projects</span>
                </h1>
                <p>
                  I'm here to transform your ideas into reality, combining innovation, expertise, and a commitment to excellence.
                  Whether you're seeking a dedicated engineer to craft cutting-edge solutions or a trusted partner to drive your projects forward,
                  I deliver results that inspire confidence and make an impact.
                </p>
              </div>
            </div>
            <div className="portfolio-area">
              <div className="row g-4 parent-container">
                {currentItems.map((item) => (
                  <div className="col-lg-12" key={item.id}>
                    <div className="portfolio-item">
                      <div className="image-container" style={{ position: 'relative' }}>
                        {/* Apply blur and display warning message if blurred is true */}
                        {blurred && (
                          <div
                            className="blur-overlay"
                            style={{
                              position: 'absolute',
                              top: '0',
                              left: '0',
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            }}
                          >
                            <div className="warning-card">
                              <Alert severity="warning" style={{ color: 'lightcoral', fontSize: '10px' }}>
                                This action is not allowed. Please refrain from downloading or copying the media.
                              </Alert>
                            </div>
                          </div>
                        )}
                        {item.img ? (
                          <img
                            src={item.img}
                            alt={`project-${item.id}`}
                            className={`img-fluid w-100 ${blurred ? 'blurred' : ''}`}
                          />
                        ) : item.video ? (
                          <video
                            className={`video-fluid w-100 ${blurred ? 'blurred' : ''}`}
                            controls
                            style={{ width: '100%', height: 'auto' }}
                            onContextMenu={(e) => e.preventDefault()} // Disable right-click
                          >
                            <source src={item.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : null}
                      </div>
                      <div className="text">
                        <div className="info">
                          <h3 className="title" onClick={() => toggleProjectDetails(item.id)}>
                            {item.title}
                          </h3>
                          <p className="subtitle">{item.subtitle}</p>
                        </div>
                        {openProjectId === item.id && (
                          <div className="project-details">
                            <div className="details-line">
                              <strong>Description:</strong>
                              <p>{item.description}</p>
                            </div>
                            <div className="details-line">
                              <strong>Challenges:</strong>
                              <p>{item.challenges}</p>
                            </div>
                            <div className="details-line">
                              <strong>Results:</strong>
                              <p>{item.results}</p>
                            </div>
                            <div className="details-line">
                              <strong>Overview:</strong>
                              <p>{item.overview}</p>
                            </div>
                            <div className="details-line">
                              <strong>Applications:</strong>
                              <p>{item.applications}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                <ul className="list-unstyled">
                  <li className="prev">
                    <button onClick={handlePrev}>
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                      </svg>
                    </button>
                  </li>
                  {[...Array(Math.ceil(projectItems.length / itemsPerPage))].map((_, index) => (
                    <li key={index}>
                      <button onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                    </li>
                  ))}
                  <li className="next">
                    <button onClick={handleNext}>
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <WorkTogether />
          </div>
        </div>
      </div>
    </FolioLayout>
  );
};

export default page;

<style jsx>{`
  .blurred {
    filter: blur(5px);
    pointer-events: none;
  }

  .warning-card {
    padding: 20px;
    border-radius: 8px;
    background: transparent;
    color: lightcoral;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    animation: warning-bg 2s infinite alternate;
  }

  @keyframes warning-bg {
    0% {
      border: 5px solid red;
    }
    100% {
      border: 5px solid orange;
    }
  }

  .image-container {
    width: 90%;
    height: calc(300px - 25px);
    padding: 5px;
    box-sizing: border-box;
    position: relative;
  }

  .portfolio-item {
    display: flex;
    flex-direction: column;
  }

  .portfolio-item img,
  .portfolio-item video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  /* Disable video right-click context menu */
  video {
    pointer-events: none;
  }

  .project-details {
    margin-top: 15px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 8px;
    font-size: 14px;
    color: #333;
  }

  .details-line {
    margin-bottom: 15px;
  }

  .details-line p {
    margin: 5px 0;
    font-size: 13px;
  }

  .title {
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .title:hover {
    color: #007bff;
  }
`}</style>
