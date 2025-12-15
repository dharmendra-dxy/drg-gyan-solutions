import { Star, X } from "lucide-react";
import Image from "next/image";
import React from "react";

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
      <div className="relative z-50 mx-4 w-full max-w-[1100px] overflow-hidden rounded-2xl h-[90vh] lg:h-[70vh]">
        <div className="w-full h-full flex flex-col lg:flex-row bg-white p-6">
          {/* Left */}
          <div className="w-full lg:w-[40%]  h-[30%] lg:h-full overflow-hidden">
            <div>
              <h3 className="hidden lg:block lg:text-2xl font-semibold text-center">
                Turn Chat into sales with{" "}
                <span className="text-green-500">Maglo</span>
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
            <div className="hidden lg:block absolute bottom-3.5 mx-6">
              <p className="text-gray-600">
                Trusted by{" "}
                <span className="font-semibold text-blue-500">
                  100+ Business{" "}
                </span>
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-[60%] h-[70%] lg:h-full">
            <button 
              className="absolute right-8"
              onClick={handleClose}
            >
              <X className="size-5"/>
            </button>
            <div>
              <Image
                src="/maglo-crm-v3/maglo-logo.webp"
                alt="maglo-logo"
                width={80}
                height={80}
              />
              <p className="hidden lg:block text-gray-600 text-xs lg:text-sm mt-2">
                Register now to get free expert counseling and personalized
                admission support. Unlock access to exclusive scholarships and
                make your study journey easier!
              </p>
            </div>

            <div className="my-6">
              <p className="text-gray-600 font-semibold">
                Fill Your details to start using{" "}
                <span className="text-blue-500 font-bold">Maglo CRM</span>{" "}
              </p>
            </div>

            {/* Registaration form */}
            <form className="space-y-3">
              <div className="grid grid-cols-1 lg:grid-cols-2  gap-3">
                <input
                  className="px-4 py-1.5 focus:ring-blue-300 focus:ring focus:border-none outline-none border border-gray-300 rounded-lg w-full placeholder:text-sm"
                  placeholder="Enter Full Name"
                />

                <input
                  className="px-4 py-1.5 focus:ring-blue-300 focus:ring focus:border-none outline-none border border-gray-300 rounded-lg w-full placeholder:text-sm"
                  placeholder="Enter Email"
                />
              </div>

              <div className="grid grid-cols-1 gap-3">
                <input
                  className="px-4 py-1.5 focus:ring-blue-300 focus:ring focus:border-none outline-none border border-gray-300 rounded-lg w-full placeholder:text-sm"
                  placeholder="Enter Phone Number"
                />

                <input
                  className="px-4 py-1.5 focus:ring-blue-300 focus:ring focus:border-none outline-none border border-gray-300 rounded-lg w-full placeholder:text-sm"
                  placeholder="Enter Team Size"
                />
              </div>

              <div className="flex items-center justify-center mt-4 lg:mt-6">
                <button className="px-6 py-2 rounded-lg bg-blue-500 text-white flex items-center gap-2 text-sm md:text-base hover:cursor-pointer hover:shadow-lg transition-all duration-300 ">
                  Submit
                </button>
              </div>
            </form>

            <div className="absolute bottom-3 hidden lg:flex  gap-4 w-full ">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-slate-400">Rated</span>
                    <span className="flex items-center justify-center w-7 h-7 rounded -mt-1 -ml-1">
                      <Star size={14} className="text-[#1863ff]" />
                    </span>
                    <span className="-ml-1 font-medium">4.1</span>
                    <span className="text-slate-400">By Over 2k+ Users</span>
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
