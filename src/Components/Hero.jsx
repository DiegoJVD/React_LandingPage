import React from "react";

function Hero() {
  return (
    <div className="bg-crema grip-flex justify-center">
      <div className="mx-auto">
        <img
          className="w-60 lg:w-72 absolute z-10 -rotate-[45deg] right-[18%] lg:right-[10%] lg:top-[30%] top-[15%]"
          src="./Blue Shape.svg"
          alt="Logo"
        ></img>
        <img
          className="w-60 lg:w-72 absolute z-20 -rotate-[30deg] right-[18%] lg:right-[10%] lg:top-[30%] top-[15%]"
          src="./Pink Shape.svg"
          alt="Logo"
        ></img>
        <img
          className="w-60 lg:w-72 absolute z-30 -rotate-[15deg] right-[18%] lg:right-[10%] lg:top-[30%] top-[15%]"
          src="./Purple Shape.svg"
          alt="Logo"
        ></img>
        <img
          className="w-60 lg:w-72 absolute z-40 right-[18%] lg:right-[10%] lg:top-[30%] top-[15%]"
          src="./Hero Image (Model).png"
          alt="Logo"
        ></img>
      </div>
      <div className="flex flex-col pt-[90%] lg:pt-44 ml-[5%]">
        <h1 className="font-bold font-sans text-5xl lg:hidden mb-3">
          Host your
        </h1>
        <h1 className="font-bold font-sans text-5xl lg:hidden mb-3">
          website in less
        </h1>
        <h1 className="font-bold font-sans text-5xl lg:hidden mb-2">
          than 5 minutes.
        </h1>
        {/* LG */}
        <h1 className="lg:block font-bold font-sans text-5xl hidden mb-3">
          Host your website in
        </h1>
        <h1 className="lg:block font-bold font-sans text-5xl hidden mb-2">
          less than 5 minutes.
        </h1>
      </div>
      <div className="flex flex-col ml-[5%] mt-[5%] lg:mt-4">
        <h3 className="text-gray lg:hidden  text-[18px]">
          with Hosterr, get yout website up and running
        </h3>
        <h3 className="text-gray lg:hidden text-[18px]">
          in no less tha 5 minutes with the most
        </h3>
        <h3 className="text-gray lg:hidden text-[18px]">
          competitive pricing packages avaliable online.
        </h3>

        {/* LG */}
        <h3 className="hidden lg:block text-gray  text-[18px]">
          with Hosterr, get yout website up and running in no less tha 5
        </h3>
        <h3 className="hidden lg:block text-gray text-[18px]">
          minutes with the most competitive pricing packages avaliable
        </h3>
        <h3 className="hidden lg:block text-gray text-[18px]">online.</h3>
      </div>
      <div className="flex flex-col ml-[5%] mt-[5%] lg:hidden ">
        <input
          className="h-12 w-[94%] pl-4"
          placeholder="Enter e-mail address"
        ></input>
      </div>
      <div className="flex flex-col ml-[5%] mt-[5%] lg:hidden">
        <button className="bg-blue font-sans w-[94%] radio h-12 rounded-lg text-white">
          Join Waitlist
        </button>
      </div>

      {/* LG */}
      <div className="hidden lg:flex  ml-[5%] mt-4">
        <input
          className="h-14 w-72 pl-4"
          placeholder="Enter e-mail address"
        ></input>
        <button className="bg-blue font-sans w-40  ml-4 h-14 rounded-lg text-white">
          Join Waitlist
        </button>
      </div>

      <div className="flex flex-col ml-[5%] mt-[5%] lg:mt-4">
        <div className="flex">
          <img src="./Checkmark.svg" alt="check"></img>
          <h3 className="text-gray text-[18px] ml-4">
            No spam, ever. Unsubscribe anytime.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
