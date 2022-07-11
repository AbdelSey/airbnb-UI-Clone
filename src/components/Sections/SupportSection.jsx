import React from "react";
import { BsFillShieldFill } from "react-icons/bs";
import { FaRegStickyNote } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

// this article is inside of the reviews section

const SupportSection = () => {
  return (
    <section className="mt-10 md:mt-5 md:container">
      {/* support article */}
      {/* support container */}

      <div className="md:flex md:items-center md:justify-center ">
        <div>
          <div className="w-[450px] h-[620px] mt-10 flex flex-col space-y-9 md:gri md:grid-cols-4 md:gap-5 md:w-[1500px] md:h-[350px] ">
            <div className="md:col-span-3 md:w-[1200px]">
              <h1 className="text-[20px] font-bold md:text-[35px]">
                {" "}
                Travel with a peace of mind when you book on LandDnD{" "}
              </h1>
            </div>
            <div className="border-b-2"></div>

            {/* support elements container */}
            <div className="md:flex md:space-x-12 space-y-10 md:space-y-0 md:items-center">
              {/* support elements   */}
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl text-rose-400">
                    {" "}
                    <BsFillShieldFill />{" "}
                  </h1>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">
                    Protection with LandCover
                  </h1>
                </div>

                <div>
                  <p>
                    {" "}
                    The most comprehensive protection in travel. Always
                    included, always free.{" "}
                  </p>
                </div>
              </div>
              {/* end of support elements */}

              {/* support elements   */}
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl  text-rose-400">
                    {" "}
                    <FaRegStickyNote />{" "}
                  </h1>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">
                    Flexible cancellation options
                  </h1>
                </div>

                <div>
                  <p>
                    Cancellation options make it easy to re-book if your plans
                    change.
                  </p>
                </div>
              </div>
              {/* end of support elements */}

              {/* support elements   */}
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl  text-rose-400">
                    {" "}
                    <BiSupport />{" "}
                  </h1>
                </div>

                <div>
                  <h1 className="text-2xl font-bold">24/7 customer support</h1>
                </div>

                <div className="space-y-10">
                  <div>
                    <p>
                      Talk to our support team from anywhere in the world, any
                      hour of the day.
                    </p>
                  </div>
                </div>
              </div>

              {/* end of support elements */}
            </div>
            <div className="border-b-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
