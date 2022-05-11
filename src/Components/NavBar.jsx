import React from "react";

function NavBar() {
  return (
    <div className=" lg:pt-6">
      <div className="bg-crema h-14 w-full flex justify-between ">
        <div className="py-[12px]  px-1 flex lg:py-[14px]">
          <img className="mr-4 ml-2" src="./Logo.svg" alt="Logo"></img>
          <button className="gradientButton">Hosterr is hiring!</button>
        </div>
        <div className="hidden lg:flex lg:justify-between lg:mt-3 ">
          <h3 className="text-gray text-[18px] lg:ml-10">Plans</h3>
          <h3 className="text-gray text-[18px] lg:ml-10">Find Domain</h3>
          <h3 className="text-gray text-[18px] lg:ml-10">Why Hosterr</h3>
        </div>
        <div className="hidden lg:flex  lg:basis-2/12 mr-20">
          <div className="w-30">
          <h3 className="text-gray text-[18px] lg:mt-3">Sign in</h3>
          </div>
          <button className="bg-blue font-sans w-[60%] lg:ml-4 lg:mt-0 radio h-12 rounded-lg text-white">
          Join Waitlist
        </button>
        </div>
        <div className="lg:hidden basis-2/12 p-4">
          <img className="w-6 lg:hidden" alt="logo" src="./menu.png"></img>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
