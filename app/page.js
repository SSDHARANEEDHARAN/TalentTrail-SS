import ExpertArea from "@/components/ExpertArea";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WorkExperience from "@/components/WorkExperience";
import FolioLayout from "@/layout/FolioLayout";
const page = () => {
  return (
    <FolioLayout homePage={true}>
      <div className="col-xl-4">
        <div className="row g-4">
          <div className="col-lg-12">
            <WorkExperience />
          </div>
          <div className="col-lg-12">
            <ExpertArea />
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <Projects />
      </div>
      <Services />
    </FolioLayout>
  );
};
export default page;
