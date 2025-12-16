import { Details } from "@/constants/index";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  data: Details;
  isRight: boolean;
}

const DetailsCard = ({ data, isRight }: Props) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between w-full gap-16 ${isRight ? "lg:flex-row-reverse" : ""} `}>
      {/* left side */}
      <div className="space-y-1 w-full lg:w-[60%]">
        <p className="text-emerald-600 font-semibold text-sm">{data.title}</p>
        <h3 className="text-2xl font-semibold">{data?.heading}</h3>
        <p className="text-gray-600 mt-4">{data?.description}</p>
        <div className="mt-6">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-6 text-gray-600 mb-4 lg:mb-0">
            {data?.features && data?.features?.map((feature) => (
              <span key={feature} className="flex items-center gap-2 font-medium">
                <CircleCheckBig className="size-4  text-emerald-500" /> {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* right images */}
      <div className=" w-full lg:w-[40%]">
        <Image src={data?.imgUrl} alt="details-images" width={400} height={400}/>
      </div>
    </div>
  );
};

export default DetailsCard;
