import React from "react";
import { CircleCheckBig } from "lucide-react";
import Container from "../common/container";

const pointers = [
  "100% Plagiarism-Free Work (Turnitin Verified)",
  "Domain Experts & PhD-Qualified Researchers",
  "On-Time Delivery with Milestone Tracking",
  "SCI / Scopus / UGC Approved Journal Support",
  "Complete Confidentiality & Data Security",
  "1-to-1 Research Guidance & Revisions",
];
interface Props {
  handleOpen: (text?: string) => void;
}
  
const HeroSection = ({ handleOpen }: Props) => {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0 bg-secondary bg-curve"></div>

      <div className="relative z-10 h-fit pt-20">
        <Container>
          <div className="flex flex-col lg:flex-row justify-evenly lg:mt-24">
            {/* Left side */}
            <div className="lg:w-[50%]">
              <h1 className="text-4xl font-bold leading-12">
                End-to-End Thesis <br /> Research Paper & Patent Support for
                M.Tech & PhD Students
              </h1>

              <div className="text-base mt-4 text-gray-600">
                <p>
                  We help M.Tech and PhD scholars transform ideas into
                  high-quality research outputs. From topic selection to final
                  submission, publication, and patent drafting—our academic
                  experts ensure accuracy, originality, and timely delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-6 text-gray-600 mb-4 lg:mb-0">
                {pointers.map((points) => (
                  <span
                    key={points}
                    className="flex gap-2 font-semibold"
                  >
                    <CircleCheckBig className="size-4  text-primary" />{" "}
                    {points}
                  </span>
                ))}
              </div>
            </div>

            {/* Right registrtion form */}
            <div className="w-full lg:w-[50%] lg:max-w-lg mt-12 lg:-mt-12">
              {/* <RegisterForm thankyouPageUrl="/thankyou"/> */}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
