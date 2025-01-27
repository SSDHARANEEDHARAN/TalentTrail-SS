import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import FolioLayout from "@/layout/FolioLayout";
const page = () => {
  return (
    <FolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card contact-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Let's <span>Work</span> Together
                </h1>
                <p>
                I’m here to support you if you’re looking for a dedicated and innovative engineer to transform your ideas into reality. 
                Whether it’s designing cutting-edge solutions or collaborating to elevate your business, 
                I’m committed to building a meaningful partnership founded on trust, creativity, and excellence. 
                Together, we can achieve remarkable results and bring your vision to life.
                </p>
              </div>
            </div>
            <div className="contact-area">
              <ContactForm />
              <div className="contact-map-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62615.13470157031!2d78.12448473504928!3d11.228571361531818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babce5e3f22014f%3A0xa0ab89ef32c34a77!2sNamakkal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1734938949295!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FolioLayout>
  );
};
export default page;
