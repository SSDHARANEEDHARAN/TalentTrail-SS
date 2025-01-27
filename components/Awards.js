"use client"; // Mark this as a Client Component

import React, { useState } from "react";

const Awards = () => {
  // State to manage which project is open
  const [openProject, setOpenProject] = useState(null);

  // Award items with images and descriptions
  const awardItems = [
    {
      id: 1,
      icon: "/assets/img/icons/adobe.svg",
      title: "EFFI-QUE 2022",
      date: "2022",
      award: "Medal Conquistador",
      description: "LIGHT WEIGHTED FULL INT-TECHNOLOGY CAR &WON 2ST NATIONAL PRICE IN DESIGN,FABRICATION AND BREAK,",
      imagePath: "assets/img/Certificates/EFFI-QUE.jpg"
    },
    {
      id: 2,
      icon: "/assets/img/icons/dribbble.svg",
      title: "ADVANCEMENTS IN 3D PRINTING, ZERO GRAVITY 3D PRINTING AND THE FUTURISTIC 4D PRINTING",
      date: "2022",
      award: "Vanquisher",
      description: "3D printing has advanced with faster speeds and improved materials, allowing for complex designs. Zero-gravity 3D printing in space enables astronauts to create essential tools and parts, overcoming challenges of microgravity. Looking ahead, 4D printing will allow objects to change shape or function over time in response to external factors, opening new possibilities in fields like medicine and aerospace. These innovations promise to transform manufacturing, design, and sustainability in the future..",
      imagePath: "assets/img/Certificates/Advancements.jpg"
    },
    {
      id: 3,
      icon: "/assets/img/icons/awwwards.png",
      title: "ADVANCED DRIVER ASSISTANCE SYSTEM IN MODERN CARS",
      date: "2022",
      award: "Vanquisher",
      description: "Advanced Driver Assistance Systems (ADAS) are technologies in modern cars designed to enhance safety and improve driving experience. Features like lane-keeping assist, adaptive cruise control, emergency braking, and parking assistance help reduce human error, prevent accidents, and make driving more convenient. With advancements in sensors, cameras, and AI, ADAS is paving the way for fully autonomous vehicles, aiming to improve road safety and driving efficiency in the future.",
      imagePath: "assets/img/Certificates/Advanced.jpg"
    },
    {
      id: 4,
      icon: "/assets/img/icons/awwwards.png",
      title: "CYBER JAM",
      date: "2022",
      award: "Vanquisher",
      description: "Cyber Jam is a collaborative cybersecurity competition where participants solve challenges to enhance their hacking and defense skills.",
      imagePath: "assets/img/Certificates/Cyber JAM.jpg"
    },
    {
      id: 5,
      icon: "/assets/img/icons/awwwards.png",
      title: "PATTERN RECOGINITION BASED ON INDUSTRIAL SOLUTION",
      date: "2022",
      award: "Vanquisher",
      description: "Pattern recognition based on industrial solutions involves using algorithms to identify patterns in data for improving automation, quality control, and predictive maintenance in manufacturing and industrial processes.",
      imagePath: "assets/img/Certificates/PATTERN RECOGINITION.jpg"
    },
    {
      id: 6,
      icon: "/assets/img/icons/awwwards.png",
      title: "UNNAT BHARAT ABHIYAN",
      date: "2022",
      award: "Vanquisher",
      description: "Unnat Bharat Abhiyan (UBA) is an initiative by the Government of India aimed at transforming rural areas through technology and sustainable development, often involving NSS camps where students contribute to community development and address local challenges.",
      imagePath: "assets/img/Certificates/UNNAT BHARAT ABHIYAN.jpg"
    },
    {
      id: 7,
      icon: "/assets/img/icons/awwwards.png",
      title: "SCIENCE EXHIBITION & PROJECT EXPO",
      date: "2016",
      award: "Vanquisher",
      description: "A multi-purpose robot is a versatile machine designed to perform a variety of tasks, such as automation, inspection, or assistance, across different industries like manufacturing, healthcare, and agriculture.",
      imagePath: "assets/img/Certificates/Science Exhibition.jpg"
    },
    {
      id: 8,
      icon: "/assets/img/icons/awwwards.png",
      title: "INDUSTRIAL GRADE ROBOT FOR FOLDING THE WEAVED CLOTH IN POWER LOOM INDUSTRIES",
      date: "2022",
      award: "Vanquisher",
      description: "An industrial-grade robot for folding weaved cloth in power loom industries is designed to automate the folding process, improving efficiency, precision, and reducing manual labor in textile manufacturing, ensuring consistent product quality and faster production times",
      imagePath: "assets/img/Certificates/Industrial Grade.jpg"
    },
    {
      id: 9,
      icon: "/assets/img/icons/awwwards.png",
      title: "FORTUNE 21",
      date: "2021",
      award: "Vanquisher",
      description: "FORTUNE 21 WEB Activities Sites Challanges.",
      imagePath: "assets/img/Certificates/FORTUNE.jpg"
    },
    {
      id: 10,
      icon: "/assets/img/icons/awwwards.png",
      title: "DESIGN FABRICATION AND TESTING OF LATTICE STRUCTURE SCAFFOLD USING RAPID PROTOTYPING TECHNIQUE",
      date: "2022",
      award: "Vanquisher",
      description: "Design, fabrication, and testing of a lattice structure scaffold using rapid prototyping techniques involve creating a 3D-printed scaffold with a lightweight, strong lattice design. This approach enables fast and cost-effective prototyping, allowing for efficient testing of structural integrity, performance, and adaptability in various applications like construction, medical devices, and aerospace.",
      imagePath: "assets/img/Certificates/Design Fabrication.jpg"
    },
  ];

  // Event handler to handle opening and closing of project detail
  const handleProjectToggle = (id) => {
    // Only toggle if the clicked id is different from the current one
    if (openProject === id) {
      setOpenProject(null); // Close project if it's already open
    } else {
      setOpenProject(id); // Open selected project
    }
  };

  return (
    <div className="awards-recognitions">
      <h2 className="main-common-title">Awards and Recognitions</h2>
      <div className="awards-recognitions-main">
        <ul className="list-unstyled">
          {awardItems.map((item) => (
            <li key={item.id}>
              <div className="awards-item">
                <div className="award-name">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                      <path
                        d="M22 12.6344C18 16.1465 17.4279 10.621 15.3496 11.0165C13 11.4637 11.5 16.4445 13 16.4445C14.5 16.4445 12.5 10.5 10.5 12.5556C8.5 14.6111 7.85936 17.2946 6.23526 15.3025C-1.5 5.81446 4.99998 -1.14994 8.16322 3.45685C10.1653 6.37256 6.5 16.9769 2 22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M9 21H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text">
                    <h4 className="title">{item.title}</h4>
                    <p className="year">{item.date}</p>
                  </div>
                </div>
                <div className="winner-tag">
                  <h4 className="title">
                    <svg className="icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item.award}
                  </h4>
                </div>
                {/* Only View Project button will be clickable */}
                <div className={`project-btn ${openProject === item.id ? 'active' : ''}`} onClick={() => handleProjectToggle(item.id)}>
                  <span>View Project
                    <svg
                      className="arrow-up"
                      width={14}
                      height={15}
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.91634 4.5835L4.08301 10.4168"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66699 4.5835H9.91699V9.8335"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Only when the button is clicked, the content will appear */}
              {openProject === item.id && (
                <div className="project-detail-container">
                  <div className="project-image-container">
                    <img src={item.imagePath} alt={item.title} className="project-image" />
                    <button className="close-btn" onClick={() => setOpenProject(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                              <path
                                d="M15 9L9 14.9996M15 15L9 9.00039"
                                stroke="red"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                stroke="red"
                                strokeWidth="3"
                              />
                            </svg>
                    </button>
                  </div>
                  <div className="project-description-container">
                    <p className="project-description">{item.description}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
     .awards-recognitions {
      padding: 20px;
      color: #fff; /* Ensures text is readable in dark mode */
      }

      .main-common-title {
      font-size: 2rem;
      font-weight: bold;
      color: #000000; /* Light color for title */
      }

      .awards-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      padding: 10px;
      background-color: #333; /* Dark background for items */
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      color: #fff;
      }

      .award-name {
      display: flex;
      align-items: center;
      }

      .award-name .text {
      margin-left: 10px;
      }

      .award-name .title {
      font-size: 1.2rem;
      font-weight: bold;
      }

      .award-name .year {
      font-size: 0.9rem;
      color: #888;
      }

      .winner-tag {
        font-weight: bold;
        color: #f39c12;
      }

      .project-btn {
        cursor: pointer;
        color: #00aaff;
      }

      .project-detail-container {
        padding-top: 20px;
      }

      .project-image-container {
        position: relative;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        text-align: center;
        transition: transform 0.3s ease;
        border: 4px solid transparent; /* Increased border thickness */
        animation: glowingBorder 4s linear infinite;
        color: #fff; /* Default text color for image container */
      }

      @keyframes glowingBorder {
        0% {
          border-color: transparent;
          box-shadow: 0 0 10px 2px rgba(0, 255, 0, 0.8);
        }
        33% {
          border-color: transparent;
          box-shadow: 0 0 10px 2px rgba(255, 105, 180, 0.8);
        }
        66% {
          border-color: transparent;
          box-shadow: 0 0 10px 2px rgba(135, 206, 250, 0.8);
        }
        100% {
          border-color: transparent;
          box-shadow: 0 0 10px 2px rgba(0, 255, 0, 0.8);
        }
      }

      .project-image {
        width: 100%;
        height: auto;
        object-fit: contain;
        transition: transform 0.2s ease;
      }

      .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        color: white;
        font-size: 20px;
        font-weight: bold;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .project-image-container:hover .close-btn {
        opacity: 1;
        pointer-events: all;
        transform: scale(1.2);
      }

      .project-description-container {
        padding: 15px;
        margin-top: 20px;
        background-color: transparent;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        width: 100%;
        position: relative;
        border: 4px solid transparent; /* Increased border thickness */
        animation: glowingBorderDescription 4s linear infinite;
        color: #fff; /* Default text color for description container */
      }

      @keyframes glowingBorderDescription {
        0% {
          border-color: transparent;
          box-shadow: 0 0 10px 2px rgba(0, 255, 0, 0.8);
        }
        33% {
          border-color: transparent;
          box-shadow: 0 0 10px 2px rgba(255, 105, 180, 0.8);
        }
        66% {
          border-color: transparent;
          box-shadow: 0 0 10px 2px rgba(135, 206, 250, 0.8);
        }
        100% {
          border-color: transparent;
          box-shadow: 0 0 10px 2px rgba(0, 255, 0, 0.8);
        }
      }

      .project-description {
        font-size: 1rem;
        position: relative;
        z-index: 1;
      }

      /* Dark mode specific styles */
      .dark-mode .project-description-container,
      .dark-mode .project-image-container {
        color: white; 
      }

      /* Light mode specific styles */
      .light-mode .project-description-container,
      .light-mode .project-image-container {
        color: white; 
      }

      @media (max-width: 768px) {
        .awards-item {
          flex-direction: column;
          align-items: flex-start;
        }

        .project-btn {
          width: 100%;
          text-align: center;
        }
      }
    `}</style>
    </div>
  );
};

export default Awards;