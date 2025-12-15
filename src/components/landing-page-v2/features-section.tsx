import React from "react";
import Container from "../common/container";
import { FeaturesCard } from "./features-card";
import { features } from "@/constants/index";

const FeaturesSection = () => {
  return (
    <div className="my-12">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            EdTech CRM for tech-first, fast-growing learning businesses
          </h2>
          <div className="flex items-center justify-center">
            <p className="text-sm lg:text-base text-gray-600 mt-4 max-w-3xl">
              Relieve your sales and marketing teams from the daunting task of molding the student enrollment journey to conform to traditional B2B sales procedures, such as contact mapping, quota definitions, or deal management.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, idx) => (
            <FeaturesCard key={idx} {...feature} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturesSection;
