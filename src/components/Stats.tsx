import React from 'react'
import { stats } from '../constants'
const Stats = () => {
  return (
    <div className="flex justify-center items-centerbg-primary sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-1 justify-start items-center flex-row m-3 ">
              <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                {stat.value}
              </h4>
              <p className="font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                {stat.title}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Stats