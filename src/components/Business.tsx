import React from "react";
import Button from "./ui/Button";
import { features } from "../constants";
import FeatureCard from "./ui/FeatureCard";

const Business = () => {
  return (
    <div className="flex justify-center items-centerbg-primary sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        <section
          id="features"
          className="flex md:flex-row flex-col sm:py-16 py-6"
        >
          <div className="flex justify-center items-start flex-1 flex-col">
            <h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
              You do the business, <br className="sm:block hidden" />
              we’ll handle the money.
            </h2>
            <p className="font-normal text-dimWhite text-[18px] leading-[30.8px] text-blurwhite max-w-[470px] mt-5">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>

            <Button styles="mt-10" />
          </div>

          <div className="flex-1 flex-col flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Business;
