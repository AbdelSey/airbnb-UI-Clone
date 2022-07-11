import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const AddDatesSection = () => {
  return (
    <section>
      {/* text */}
      <article className="w-[450px] h-[200px] md:w-[1500px] md:h-[200px] md:container ">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">When are you traveling?</h1>
          <p className="text-[17px] text-slate-500">
            {" "}
            Add dates for updated pricing and availability{" "}
          </p>
        </div>

        {/* button */}
        <div className="mt-10 w-[450px]">
          <button className="text-white w-full text-lg bg-black font-bold py-4 rounded-xl space-x-2 md:w-[150px] border-2 border-black">
            <div></div>
            <div>
              <h1 className=""> Add Dates </h1>
            </div>
          </button>
        </div>
      </article>

      {/* links */}

      <article className="w-[400px] h-[80px] md:h-[100px] mt-4">
        <div className="flex items-center space-x-3">
          <div>
            <Link to="/" className="underline text-xl font-semibold">
              Landnd
            </Link>
          </div>
          <div className="mt-1">
            <h1>
              <FaAngleRight />{" "}
            </h1>
          </div>

          <div>
            <Link to="/" className="underline text-xl font-semibold">
              Stays
            </Link>
          </div>

          <div className="mt-1">
            <h1>
              <FaAngleRight />
            </h1>
          </div>

          <div>
            <h1 className="text-xl font-light"> United States</h1>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AddDatesSection;
