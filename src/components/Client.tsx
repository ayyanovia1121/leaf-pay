import React from "react";
import { clients } from "../constants";
import Image from "next/image";

const Client = () => {
  return (
    <div className="flex justify-center items-centerbg-primary sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        <section className="flex justify-center items-center my-4">
          <div className="flex justify-center items-center flex-wrap w-full">
            {clients.map((client) => (
                <div key={client.id} className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]">
                 <Image src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Client;
