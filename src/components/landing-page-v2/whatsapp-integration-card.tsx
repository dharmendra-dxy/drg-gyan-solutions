import { WhatsappIntegrationType } from '@/constants/index'
import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface Props {
  data: WhatsappIntegrationType;
  isRight: boolean;
}

const WhatsappIntegrationCard = ({data, isRight}: Props) => {
  return (
     <div className={`flex flex-col lg:flex-row items-center justify-between w-full gap-16 ${isRight ? "lg:flex-row-reverse" : ""} `}>
      {/* left side */}
      <div className="space-y-1 w-full lg:w-[60%]">
        <h3 className="text-2xl font-semibold">{data?.heading}</h3>
        <p className="text-gray-600 mt-4">{data?.description}</p>
        <div className="mt-6">
          <div className="flex flex-col space-y-3 mt-6 text-green-500  mb-4 lg:mb-0">
            {data?.features && data?.features?.map((feature) => (
              <span key={feature} className="flex items-center gap-2 font-medium">
                <CircleCheckBig className="size-4  text-green-500" /> {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* right images */}
      <div className=" w-full lg:w-[40%]">
        <Image src={data?.imgUrl} alt="details-images" width={600} height={400}/>
      </div>
    </div>
  )
}

export default WhatsappIntegrationCard