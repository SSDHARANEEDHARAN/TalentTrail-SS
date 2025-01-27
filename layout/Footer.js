const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="text text-center">
          <p>
            @ SELF ABOUT {new Date().getFullYear()}, Design By {"S.S"}
            <a
              href="mailto:dharanee.dharan@example.com?subject=Thank you for contacting us&body=Dear Dharanee Dharnan,%0A%0AThank you for reaching out to us. We will get back to you shortly.%0A%0ARegards,%0AYour Company Name"
              target="_blank"
            >
              DHARANEE DHARAN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
