import React from "react";
import { FaAngleRight } from "react-icons/fa";

// TODO: "TAKE CARE OF THE LINE UP OF PRICE AND NIGHT";
import { BsStarFill } from "react-icons/bs";
const JustBookedSection = () => {
  return (
    <section className="">
      <div className="w-[450px] h-[1550px] md:grid md:grid-cols-3 md:justify-items-center md:gap-5  md:w-[1600px] md:h-[800px] md:space-y-0 md:container ">
        <div className="w-[430px] md:col-span-3 md:w-[1500px] md:space-y-4 md:mt-0">
          {/* section text header */}
          <div>
            <h1 className="text-[20px] font-bold md:text-[40px]">
              Just Booked in the United States
            </h1>
          </div>
        </div>
        {/* first location */}
        <article className="space-y-2 mt-5">
          {/* picture of place */}

          <div className="cursor-pointer">
            <div className="bg-home2 w-[450px] h-[350px] bg-cover bg-no-repeat rounded-2xl "></div>
          </div>

          {/* details and rating */}
          <div className="flex items-center justify-between">
            <h1 className="text-slate-700 text-[14.9px]">
              Entire cabin in Montana
            </h1>

            <h1 className=" flex items-center space-x-2">
              <div className="text-rose-500">
                <BsStarFill />
              </div>

              <div>
                <p>
                  4.85<span className="text-slate-600"> (261) </span>
                </p>
              </div>
            </h1>
          </div>

          <div></div>

          {/* location and price */}

          <header className="flex flex-col text-lg relative">
            <p className="text-slate-800 text-[17px]">Explore the Wilderness</p>

            <div className="">
              <h1 className="">
                <span className="font-bold">$489 </span>
                <span className="text-slate-800">/ night </span>
              </h1>
            </div>
          </header>
        </article>

        {/* second location  */}
        <article className="space-y-2 mt-5">
          {/* picture of place */}

          <div className="cursor-pointer">
            <div className="bg-home3 w-[450px] h-[350px] bg-cover bg-no-repeat rounded-2xl "></div>
          </div>

          {/* details and rating */}
          <div className="flex items-center justify-between">
            <h1 className="text-slate-700 text-[14.9px]">
              Entire home in South Lake Tahoe
            </h1>

            <h1 className=" flex items-center space-x-2">
              <div className="text-rose-500">
                <BsStarFill />
              </div>

              <div>
                <p>
                  4.65<span className="text-slate-600"> (62) </span>
                </p>
              </div>
            </h1>
          </div>

          <div></div>
          {/* location and price */}

          <header className="flex flex-col text-lg">
            <p className="text-slate-800 text-[17px]">
              * Beautiful Lake House * On 150 Acres
            </p>

            <div>
              <h1>
                <span className="font-bold">$363 </span>{" "}
                <span className="text-slate-800">/ night </span>
              </h1>
            </div>
          </header>
        </article>

        {/* third location  */}
        <article className="space-y-2 mt-5">
          {/* picture of place */}

          <div className="cursor-pointer">
            <div className="bg-home4 w-[450px] h-[350px] bg-cover bg-no-repeat rounded-2xl "></div>
          </div>

          {/* details and rating */}
          <div className="flex items-center justify-between">
            <h1 className="text-slate-700 text-[14.9px]">
              Entire Loft in Downtown LA
            </h1>

            <h1 className=" flex items-center space-x-2">
              <div className="text-rose-500">
                <BsStarFill />
              </div>

              <div>
                <p>
                  {" "}
                  4.85<span className="text-slate-600"> (261) </span>
                </p>
              </div>
            </h1>
          </div>

          <div></div>

          {/* location and price */}

          <header className="flex flex-col text-lg">
            <div>
              <p className="text-slate-800 text-[17px]">Dreamy Downtown Loft</p>
            </div>

            <div className="">
              <h1>
                <span className="font-bold">$632 </span>
                <span className="text-slate-800">/ night </span>{" "}
              </h1>
            </div>
          </header>
        </article>

        {/* button */}
        <div className="mt-10 w-[450px]">
          <button className="text-gray-900 w-full text-lg bg-white font-semibold py-4 rounded-xl space-x-2 md:w-[175px] border-2 border-black">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div>
                  {" "}
                  <h1> Show (2000+) </h1>
                </div>

                <div className="mt-1">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JustBookedSection;
