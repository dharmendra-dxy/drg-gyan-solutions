import React from "react";
import Container from "../common/container";
import DetailsCard from "./details-card";
import { Details, detailsData } from "@/constants/index";


const DetailsSections = () => {
  return (
    <div className="my-8">
      <Container>
        <div className="space-y-8 w-full">
          {detailsData.map((details: Details, idx: number) => (
            <DetailsCard
              data={details}
              key={details?.title}
              isRight={(idx + 1) % 2 === 0}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DetailsSections;
