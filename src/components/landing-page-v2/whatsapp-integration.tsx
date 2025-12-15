import React from "react";
import Container from "../common/container";
import Image from "next/image";
import { whatsappIntegrationData } from "@/constants/index";
import WhatsappIntegrationCard from "./whatsapp-integration-card";
import Button from "./button";

interface Props {
  handleOpen: (text?: string) => void
}

const WhatsappIntegration = ({handleOpen}: Props) => {
  return (
    <div className="w-full mb-8">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold ">
            Turn Conversations into Revenue with <span className="text-green-500">WhatsApp Marketing</span> 
          </h2>
          <div className="flex flex-col items-center justify-center">
            <p className="mt-4 text-gray-600 max-w-4xl">
              Capture leads, automate engagement, and drive loyalty. Maglo makes WhatsApp Marketing work smarter for your business.
            </p>
            <p className="mt-4 text-gray-600">
              Maglo powered WhatsApp Marketing - becomes an enrollment engine, because in one unified platform, it lets you capture qualified leads, automate engagement, and enable counselors to nurture one-on-one conversations that boost productivity, improve student experience, and deliver measurable ROI.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 lg:gap-6 mt-8">
            <Button 
              text="Free 7 Day Trail"
              type="primary"
              className="bg-green-500"
              handleOpen={handleOpen}
            modalText="Start Yout 7 Day Free Trail"
            />
            <Button 
              text="Schedule a Demo"
              type="secondary"
              className="border-green-500 text-green-500"
              handleOpen={handleOpen}
            modalText="Schedule a Demo"
            />
          </div>
        </div>

        {/* Images */}
        <div className="flex items-center justify-center my-4">
          <Image 
            src={"/whatsapp/whatsapp-2.webp"}
            alt="whatsapp-integrations"
            width={800}
            height={400}
            className="rounded-md"
          />
        </div>

        {/* Features */}
        <div className="space-y-8">
          {whatsappIntegrationData.map((data, idx) => (
            <WhatsappIntegrationCard 
              key={idx} 
              data={data}
              isRight={(idx + 1) % 2 === 0}
            />
          ))}

        </div>
      </Container>
    </div>
  );
};

export default WhatsappIntegration;
