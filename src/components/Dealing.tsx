import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import { card } from "@/assets";

const Dealing = () => {
  return (
    <div className="flex justify-center items-center bg-primary sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        <section
          id="product"
          className="flex md:flex-row flex-col-reverse sm:py-16 py-6"
        >
          <div className="flex-1 flex justify-center items-start flex-col">
            <h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
              Find a better card deal
              <br className="sm:block hidden" />
              in few easy steps.
            </h2>
            <p className="font-normal text-dimWhite text-[18px] leading-[30.8px] text-blurwhite max-w-[470px] mt-5">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            <Button styles="mt-10" />
          </div>
          <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
            <Image src={card} alt="billing" className="w-[100%] h-[100%]" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dealing;
