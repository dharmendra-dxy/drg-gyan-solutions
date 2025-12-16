import React from "react";
import Container from "../common/container";
import Button from "./button";
import { MoveRight } from "lucide-react";

interface Props {
  handleOpen: (text?: string) => void
}

const EdtechCta = ({handleOpen}: Props) => {
  return (
    <div className="w-full py-12  bg-blue-100">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Everything you need to know about an <span className="text-blue-500 font-bold">EdTech CRM</span> 
          </h2>
          <div className="flex items-center justify-center">
            <p className="text-sm lg:text-base text-gray-600 mt-4 max-w-3xl">
              Still wondering how our all-in-one platform for student
              acquisition, retention, and upselling can supercharge your
              enrollment process? Don’t sweat it! We’ve put together an
              informative video starring one of our enrollment experts!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-8">

            <Button 
              text="Schedule a Demo"
              type="primary"
              handleOpen={handleOpen}
            modalText="Schedule a Demo"
            />
            <Button 
              text="Register for Free Trial"
              type="secondary"
              icon={MoveRight}
              handleOpen={handleOpen}
            modalText="Register for Free Trial"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EdtechCta;
