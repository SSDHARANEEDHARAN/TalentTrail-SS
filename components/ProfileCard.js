"use client";
import ClipboardJS from "clipboard";
import { useEffect, useState } from "react";

const ProfileCard = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    new ClipboardJS(".btn-copy");
  }, []);

  const toggleBtn = () => {
    setToggle(true);
    const timerId = setTimeout(() => {
      setToggle(false);
    }, 700);
    return () => {
      clearTimeout(timerId);
    };
  };

  const socialItems = [
    { id: 1, url: "https://www.linkedin.com/in/dharaneedharan-ss-70941a211/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BAjkUjFMQDGzjWTn4LfxWw%3D%3D", name: "Linkedin", icon: "fab fa-linkedin" },
    { id: 2, url: "https://github.com/SSDHARANEEDHARAN", name: "Github", icon: "fab fa-github" },
    { id: 3, url: "https://vercel.com/dharaneedharansss-projects", name: "Vercel App", icon: "fas fa-rocket" },
  ];

  return (
    <div className="card profile-card">
      <div className="card-body">
        <div className="image text-center">
          <img src="assets/img/images/profiles.png" alt="profile" />
        </div>
        <div className="text">
          <h3 className="card-title">DHARANEE DHARAN SS</h3>
          <p>
            A Passionate <span>Full Stack Developer</span>&amp;{" "}
            <span>Product Designer</span> having <span>3 years</span> of
            Experiences.
          </p>
          <div className="common-button-groups">
            <a className="btn btn-call" href="tel:+18870086023">
              <svg
                className="icon"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 4H9.5L11.5 9L9 10.5C10.071 12.6715 11.8285 14.429 14 15.5L15.5 13L20.5 15V19C20.5 19.5304 20.2893 20.0391 19.9142 20.4142C19.5391 20.7893 19.0304 21 18.5 21C14.5993 20.763 10.9202 19.1065 8.15683 16.3432C5.3935 13.5798 3.73705 9.90074 3.5 6C3.5 5.46957 3.71071 4.96086 4.08579 4.58579C4.46086 4.21071 4.96957 4 5.5 4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 7C16.0304 7 16.5391 7.21071 16.9142 7.58579C17.2893 7.96086 17.5 8.46957 17.5 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 3C17.0913 3 18.6174 3.63214 19.7426 4.75736C20.8679 5.88258 21.5 7.4087 21.5 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Book A call
            </a>
            <button
              className={`btn btn-copy ${toggle ? "active" : ""}`}
              data-clipboard-text="TharaneeTharanss@gmail.com"
              onClick={() => toggleBtn()}
            >
              <svg
                className="icon"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Copy Email
            </button>
          </div>
          <div className="social-media-ic">
            <ul className="list-unstyled">
              {socialItems.map((item) => (
                <li key={item.id}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className={item.icon} />
                  </a>
                </li>
              ))}
              {/* Replacing the button with the new "Download" button */}
              <li>
                <button className="Download-button" onClick={() => {
                  window.open("assets/img/images/S.S.pdf", "_blank");
                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    width="35"
                    viewBox="0 0 640 512"
                  >
                    <path
                      d="M134 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>"CV"</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
