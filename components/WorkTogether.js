import Link from "next/link";

const WorkTogether = () => {
  return (
    <div className="work-together-slider">
      <div className="slider-main d-flex gap-4 align-items-center">
        <div className="slider-item">
          <Link href="contact">Let's / Connect Together</Link>
          <Link href="contact">Let's / Work Together</Link>
        </div>
        <div className="slider-item">
          <Link href="contact">Let's / Connect Together</Link>
          <Link href="contact">Let's / Work Together</Link>
        </div>
      </div>
    </div>
  );
};
export default WorkTogether;
