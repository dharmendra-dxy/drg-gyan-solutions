import React from "react";
import Container from "../common/container";
import Button from "./button";
import { MoveRight } from "lucide-react";

interface Props {
  handleOpen: (text?: string) => void;
}

const EdtechCtaWhatsapp = ({ handleOpen }: Props) => {
  return (
    <div className="w-full my-12 py-12  bg-green-100">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Still Confused about{" "}
            <span className="text-green-500 font-bold">
              Maglo WhatsApp Integrated CRM ?
            </span>
          </h2>
          <div className="flex items-center justify-center">
            <p className="text-sm lg:text-base text-gray-600 mt-4 max-w-3xl">
              Still figuring out how businesses can turn WhatsApp into a
              powerful growth channel? Our WhatsApp-integrated CRM helps you
              capture high-intent leads, automate follow-ups, run targeted
              campaigns, and manage customer conversations—all from one place.
              Watch this quick video to see how brands are using WhatsApp to
              boost leads, improve engagement, and drive conversions
              effortlessly.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-8">
            <Button
              text="Schedule a Demo"
              type="primary"
              className="bg-green-500"
              handleOpen={handleOpen}
              modalText="Schedule a Demo"
            />
            <Button
              text="Register for Free Trial"
              type="secondary"
              icon={MoveRight}
              className="border-green-500 text-green-500"
              handleOpen={handleOpen}
              modalText="Register for a free trailF"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EdtechCtaWhatsapp;
