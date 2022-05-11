import React from "react";

function Bottom() {
  return (
    <div className="lg:flex lg:justify-between">

      <div className="flex  ml-[2%] mt-[14%] lg:ml-12">
        <h3 className="text-gray text-[18px] ml-6">Facebook</h3>
        <h3 className="text-gray text-[18px] ml-6">Instagram</h3>
        <h3 className="text-gray text-[18px] ml-6">Twitter</h3>
      </div>
      
      <div className="flex  ml-[7%] mt-[14%] lg:mt-44 pb-[12%] lg:pb-10 lg:mr-28">
        <div>
          <img alt="user" src="./Help Avatar.svg"></img>
        </div>
        <div className="flex flex-col ml-4">
          <h3>Have Any Questions?</h3>
          <h3 className="font-bold">Talk to a specialist</h3>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
