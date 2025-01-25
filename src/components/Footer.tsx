import Image from "next/image";
import { logo } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <div className="flex justify-center items-centerbg-primary sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
          <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
            <div className="flex-1 flex flex-col justify-start mr-10">
              <Image
                src={logo}
                alt="logo"
                className="object-contain"
                width={266}
                height={72}
              />
              <p className="font-normal text-blurwhite text-[18px] leading-[30.8px] max-w-[310px] mt-5">
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              {footerLinks.map((footerlink, index) => (
                <div
                  key={index}
                  className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                >
                  <h4 className="font-medium text-[18px] leading-[27px] text-white">
                    {footerlink.title}
                  </h4>
                  <ul className="list-none mt-4">
                    {footerlink.links.map((link) => (
                      <li
                        key={link.name}
                        className={`font-normal text-[16px] leading-[24px] text-blurwhite hover:text-secondary cursor-pointer 
                            `}
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="">

          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
