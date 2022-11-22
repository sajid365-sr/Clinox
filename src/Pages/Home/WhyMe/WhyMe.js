import React from "react";
import whyMe from "../../../Assets/why-to-choose (2).jpg";
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const WhyMe = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div className="container mx-auto my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <img
            className="rounded-lg lg:w-2/3 w-10/12 mx-auto lg:ml-10 h-full"
            src={whyMe}
            alt=""
          />
        </div>
        <div>
          <p className="text-center font-semibold underline mt-10 lg:mt-0 lg:text-left">
            Cleaning Service
          </p>
          <h1 className="lg:text-5xl text-4xl text-center lg:text-left font-medium lg:mt-6 mb-3 lg:mb-10 leading-snug">
            Why will you choose my <br />
            services for your ?
          </h1>

          <div className="w-10/12 lg:w-full mx-auto">
            <Fragment>
              <Accordion open={open === 1} animate={customAnimation}>
                <AccordionHeader
                  className="bg-[#0E3D4B] text-gray-200 rounded-full hover:scale-95 transition-all ease-out duration-700 px-5 hover:text-gray-400 mb-3"
                  onClick={() => handleOpen(1)}
                >
                  How often will you clean my home?
                </AccordionHeader>
                <AccordionBody>
                  Customized house cleaning services are available weekly, every
                  other week, 3 week rotations or monthly service. Each home is
                  custom bid to meet the customer’s needs with a guarantee on
                  the quality of work performed.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} animate={customAnimation}>
                <AccordionHeader
                  className="bg-[#0E3D4B] hover:scale-95 transition-all ease-out duration-700 text-gray-200 rounded-full px-5 hover:text-gray-400 mb-3"
                  onClick={() => handleOpen(2)}
                >
                  What cleaning products will you be using?
                </AccordionHeader>
                <AccordionBody>
                  Clean and Simple Cleaning™, Inc. provides all of its cleaning
                  products and equipment, we will not be using anything that you
                  have in the house already. This is because Clean and Simple
                  Cleaning™ trains its employees on what product to use on every
                  surface so using unknown products could potentially damage
                  your house if not used currently. We are also making efforts
                  to be environmentally aware by eliminating paper surveys and
                  adding non-toxic products. We are constantly making changes to
                  better the working environment for our employees and to make
                  sure we can deliver a better service for our customers. The
                  following is a list of products our housekeeping employees use
                  on regular basis:
                  <li>
                    Green Earth Natural APC: This product is used as an
                    all-purpose cleaner.
                  </li>
                  <li>
                    Green Earth Glass Cleaner: Used on all glass surfaces.
                  </li>
                  <li>
                    OxyFect-G Peroxide Disinfectant Cleaner: Disinfectant used
                    mostly bathrooms.
                  </li>
                  <li>
                    Green Earth Natural Degreaser: Degreaser used mostly on
                    kitchen counters.
                  </li>
                  <li>
                    Vinegar: Is used on request on glass surfaces and on
                    hardwoods diluted with water to wash them.
                  </li>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} animate={customAnimation}>
                <AccordionHeader
                  className="bg-[#0E3D4B] hover:scale-95 transition-all ease-out duration-700 text-gray-200 rounded-full px-5 hover:text-gray-400 mb-3"
                  onClick={() => handleOpen(3)}
                >
                  Do you offer a satisfaction guarantee?
                </AccordionHeader>
                <AccordionBody>
                  Your business is important to us and we want to make sure you
                  are happy and completely satisfied. If the quality of work
                  performed and paid for, is not satisfactory, contact us within
                  24 hours and we will make arrangements to rectify the
                  situation. If you believe we did an outstanding job please
                  write a review of us on an online site so others can see what
                  our service has to offer. We love to read customer reviews!
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4} animate={customAnimation}>
                <AccordionHeader
                  className="bg-[#0E3D4B] hover:scale-95 transition-all ease-out duration-700 text-gray-200 rounded-full px-5 hover:text-gray-400 mb-3"
                  onClick={() => handleOpen(4)}
                >
                  Do I have to be home when you are cleaning?
                </AccordionHeader>
                <AccordionBody>
                  No, as long as you have a way to let us in when you are not
                  home there is no reason for you to have to be there. However,
                  if it makes you feel more comfortable we welcome you to stay
                  and watch what we do. All of our house cleaning employees are
                  trustworthy and friendly, they do have a schedule though so
                  make sure to give them enough space to get their work done.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 5} animate={customAnimation}>
                <AccordionHeader
                  className="bg-[#0E3D4B] hover:scale-95 transition-all ease-out duration-700 text-gray-200 rounded-full px-5 hover:text-gray-400 mb-3"
                  onClick={() => handleOpen(5)}
                >
                  How do I pay for my cleaning services?
                </AccordionHeader>
                <AccordionBody>
                  You can either pay with a check, Mastercard/Visa, or online. A
                  check is used by leaving it with us at the office, or leaving
                  it on your kitchen table for our cleaning crew to pick up. We
                  also take Master card and Visa, we will take your card number
                  and then charge the amount after the service is finished. We
                  recently added an option to make your payment online.
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
