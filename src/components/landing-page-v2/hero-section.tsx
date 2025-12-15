import React from "react";
import Navbar from "./navbar";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Container from "../common/container";

const pointers = [
  "Sales Execution & Automation",
  "Sales Tracking & Performance",
  "Sales Reporting",
  "Field Force Automation",
  "Lead Capture & Centralization",
  "Marketing Automation",
  "Raw Data Management",
  "Extensive Fee Workflows",
];
const awardsImages = [
  "/real-estate/modal1.png",
  "/real-estate/modal2.png",
  "/real-estate/modal3.png",
]

interface Props {
  handleOpen: (text?: string) => void
}

const HeroSection = ({handleOpen}: Props) => {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0 bg-blue-100 bg-curve"></div>

      <div className="relative z-10 h-auto pt-20">
        {/* Header */}
        <Navbar handleOpen={handleOpen}/>

        {/* Main content */}
        <Container>
          <div className="flex flex-col lg:flex-row justify-evenly lg:mt-24">
            {/* Left side */}
            <div className="lg:w-[50%]">
              <h1 className="text-4xl font-bold">EdTech CRM</h1>

              <div className="text-base mt-4 text-gray-600">
                <p>
                  One unified platform for learner acquisition, retention, and
                  upsell.
                </p>
                <p>
                  Purpose-built to make your sales and marketing teams more
                  productive.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-6 text-gray-600 mb-4 lg:mb-0">
                {
                  pointers.map((points)=> (
                    <span key={points} className="flex items-center gap-2 font-medium">
                     <CircleCheckBig className="size-4  text-blue-600"/>   {points}
                    </span>
                  ))
                }
              </div>

              <div className="flex mt-4 gap-4">
                {
                  awardsImages.map((images) => (
                    <Image key={images} src={images} alt="award-image" width={50} height={50} className="bg-black rounded-md"/>
                  ))
                }
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
