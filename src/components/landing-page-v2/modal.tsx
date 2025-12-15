import { Star, X } from "lucide-react";
import Image from "next/image";
import Input from "../common/input";

interface Props {
  isOpen: boolean;
  modalHeading: string;
  handleOpen: (text?: string) => void;
  handleClose: () => void;
}

const avatars = [
  "/users/user-3.webp",
  "/users/user-17.webp",
  "/users/user-4.webp",
  "/users/user-18.webp",
  "/users/user-5.webp",
  "/users/user-10.webp",
];

const Modal = ({ isOpen, modalHeading, handleOpen, handleClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 transition-opacity" />
      <div className="relative z-50 mx-4 w-full max-w-[1100px] overflow-hidden rounded-2xl h-[90vh] lg:h-fit">
        <div className="w-full h-full flex flex-col lg:flex-row gap-8 bg-white p-6">
          {/* Left */}
          <div className="w-full lg:w-[40%]  h-[30%] lg:h-full overflow-hidden">
            <div>
              <h3 className="hidden lg:block lg:text-2xl font-semibold text-center">
                Transform Your Research Into a <span className="text-primary">Publication-Ready Masterpiece</span> 
              </h3>
              {modalHeading} 
            </div>
            <Image
              src="/whatsapp/whatsapp-modal.jpg"
              alt="banner"
              width={400}
              height={400}
              className="-mt-12 lg:mt-0"
            />
            {/* user ratings */}
            <div className="hidden lg:flex  gap-4 w-full ">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-slate-400">Rated</span>
                    <span className="flex items-center justify-center w-7 h-7 rounded -mt-1 -ml-1">
                      <Star size={14} className="text-[#1863ff]" />
                    </span>
                    <span className="-ml-1 font-medium">4.1</span>
                    <span className="text-slate-400">By Over 100+ Students</span>
                  </div>
                </div>
              </div>

              {/* Avatars */}
              <div className="">
                <div className="flex -space-x-3">
                  {avatars.map((avatar) => (
                    <img
                      key={avatar}
                      src={avatar}
                      alt="avatar"
                      className="size-8 rounded-full border-2 border-white shadow-sm object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-[60%] h-[70%] lg:h-full">
            <button className="absolute right-8" onClick={handleClose}>
              <X className="size-5" />
            </button>
            <div>
              <Image
                src="/maglo-crm-v3/maglo-logo.webp"
                alt="maglo-logo"
                width={80}
                height={80}
              />
              <p className="hidden lg:block text-gray-600 text-xs lg:text-sm mt-2">
                We provide professional support in research design, editing, proofreading, and academic mentoring - helping you learn, grow, and achieve academic excellence with integrity.
              </p>
            </div>

            {/* Registaration form */}
            <form>
              {/* user details */}
              <div className="mt-4">
                <p className="text-gray-400 font-semibold">Enter Your details</p>

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-3 my-3">
                  <Input placeholder="Enter Full Name"/>
                  <Input placeholder="Enter Email"/>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <Input placeholder="Enter Phone Number"/>
                </div>
              </div>
              {/* Project details */}
              <div className="mt-8">
                <p className="text-gray-400 font-semibold">
                  Enter Your Requirements
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-3 my-3">
                  <Input placeholder="Select Your Course"/>

                  <Input placeholder="Select Services"/>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <Input placeholder="Enter Paper Topic"/>
                </div>
              </div>
              <div className="flex items-center justify-center mt-4 lg:mt-6">
                <button className="px-6 py-2 rounded-lg bg-primary text-white flex items-center gap-2 text-sm md:text-base hover:cursor-pointer hover:shadow-lg transition-all duration-300 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
