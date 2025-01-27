"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const faqItems = [
    {
      id: 1,
      title: "Calculator App Developed in Android Studio Using Java Programming and Kotlin",
      answer: "▪️ The calculator app was developed using Android Studio, leveraging Java programming and Kotlin for a seamless user experience. This app allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division, while also supporting more advanced features like scientific calculations. The UI is designed to be simple, intuitive, and responsive, ensuring smooth functionality across various devices and screen sizes."
    },
    {
      id: 2,
      title: "eLearning App for College",
      answer: "▪️ The eLearning app was designed for colleges to facilitate an interactive and engaging learning experience. It provides features like course management, video lectures, quizzes, and student-teacher communication. The app is optimized for both Android and iOS, offering a user-friendly interface and enabling students and instructors to collaborate effectively. The app aims to improve education accessibility and streamline academic processes for both students and faculty."
    },
    {
      id: 3,
      title: "Unit Measure App for Colleges",
      answer: "▪️ The Unit Measure app was developed for colleges to assist students and faculty in converting various units of measurement, such as length, weight, volume, temperature, and more. The app supports a wide range of units and provides accurate, real-time conversions, making it an essential tool for students in fields like science, engineering, and mathematics. It is designed to be fast, reliable, and user-friendly."
    },
    {
      id: 4,
      title: "Todo Web with Weather Monitor Integration",
      answer: "▪️ The Todo web app is integrated with a weather monitor to enhance task management. Users can manage their to-do lists, prioritize tasks, and track weather conditions simultaneously. The weather monitor provides real-time weather updates, helping users plan their day accordingly. The app is built with a clean, responsive interface, ensuring users can easily manage their tasks while staying informed about weather conditions in their area."
    },
    {
      id: 5,
      title: "Bookmark Website",
      answer: "▪️ The bookmark website allows users to save and organize their favorite websites for easy access. It provides a simple interface for adding, editing, and categorizing bookmarks. Users can also search through their saved bookmarks, making it a useful tool for people who need quick access to frequently visited sites. The website is designed to be minimalistic and efficient, offering a user-friendly experience."
    },
    {
      id: 6,
      title: "EV Rotator for Agriculture",
      answer: "▪️ The EV Rotator for Agriculture is a cutting-edge solution designed by Tharanee Tharan SS, combining expertise in manufacturing, electronics, and software development. This innovative machine integrates mechanical, electrical, and software components to efficiently rotate and handle agricultural produce, improving productivity and reducing waste. With a focus on precision and reliability, the system ensures smooth and gentle handling of crops, while its automated features streamline agricultural processes. The EV Rotator embodies a commitment to sustainable and efficient agricultural practices."
    },
    {
      id: 7,
      title: "IoT Home Automation",
      answer: "▪️ IoT Home Automation is a smart solution developed by Tharanee Tharan SS, integrating electronics, software, and IoT technologies to provide seamless control over home appliances. The system uses sensors and actuators to allow users to monitor and control devices like lights, fans, air conditioners, and security systems remotely through smartphones or web interfaces. The goal is to improve convenience, energy efficiency, and security within households. This innovative system brings comfort and modernity to everyday living by utilizing cutting-edge technology."
    },

    {
      id: 8,
      title: "3D Extruder Machine",
      answer: "▪️ The 3D Extruder Machine, designed by Tharanee Tharan SS, revolutionizes the process of creating 3D printed objects. This advanced system uses precise temperature control and mechanical movements to extrude materials like plastic and filament into a mold, allowing for intricate and custom 3D designs. The extruder is optimized for high efficiency, accuracy, and consistency in 3D printing, making it a valuable tool for industries like manufacturing, prototyping, and creative design. The system enables the production of complex structures with minimal waste and high quality."
    },

    {
      id: 9,
      title: "Mini Fridge",
      answer: "▪️ The Mini Fridge designed by Tharanee Tharan SS is an energy-efficient, compact refrigeration solution ideal for small spaces like offices, dorms, and kitchens. The system utilizes advanced cooling technology to maintain optimal temperatures for food and beverages while keeping energy consumption low. The compact design makes it highly portable, and it is equipped with customizable features such as temperature control and adjustable shelves. The Mini Fridge combines convenience, space-saving, and eco-friendly functionality, providing users with a reliable solution for their refrigeration needs."
    },

    {
      id: 10,
      title: "Few Lines About Me?",
      answer: "▪️ I am Tharanee Tharan SS, a passionate engineer with expertise in manufacturing, electronics, and software development. I specialize in creating innovative technologies such as electric vehicles, 3D extruder machines, and automatic systems. With a deep understanding of power electronics and hands-on experience in Arduino and Android app development, I am driven by a desire to solve complex problems and push technological boundaries. My goal is to integrate mechanical, electrical, and software components to develop solutions that make a meaningful impact."
    }
  ];

  const [active, setActive] = useState("collapse1");

  return (
    <div className="frequently-asked-questions">
      <h2 className="main-common-title">Services I Have Done Completely</h2>
      <div className="frequently-asked-questions-main">
        <Accordion className="accordion" defaultActiveKey={active}>
          {faqItems.map((item) => (
            <div className="accordion-item" key={item.id}>
              <h4 className="accordion-header">
                <Accordion.Toggle
                  as={"button"}
                  className={`accordion-button ${`collapse${item.id}` === active ? "" : "collapsed"}`}
                  eventKey={`collapse${item.id}`}
                  onClick={() =>
                    setActive(active === `collapse${item.id}` ? null : `collapse${item.id}`)
                  }
                >
                  {item.title}
                  <span className="ms-auto">
                    <span className="icon ms-4">
                      <img
                        className="icon-plus"
                        src="assets/img/icons/plus.svg"
                        alt="plus"
                      />
                      <img
                        className="icon-minus d-none"
                        src="assets/img/icons/minus.svg"
                        alt="minus"
                      />
                    </span>
                  </span>
                </Accordion.Toggle>
              </h4>
              <Accordion.Collapse eventKey={`collapse${item.id}`}>
                <div className="accordion-body">
                  <p>{item.answer}</p>
                </div>
              </Accordion.Collapse>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
