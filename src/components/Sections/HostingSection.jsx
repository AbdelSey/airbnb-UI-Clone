import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

// TODO: "MAKE RIGHT BOTTOM RIGHT CORNER ROUNDED"

const HostingSection = () => {
  return (
    <section className="flex items-center justify-center rounded-2xl md:w-[1500px] md:container md:mb-10 md:relative">
      {/* picture in container */}

      <article className="w-[450px] h-[650px] bg-black bg-opacity-90 rounded-3xl md:bg-transparent md:h-[450px] relative md:w-full">
        {/* background */}

        <div className="md:container">
          {/* text */}
          <div className="flex items-center justify-center m-14 md:hidden">
            <div className="w-[342px]">
              <div className="flex flex-col items-center justify-center space-y-5 text-center ">
                <div className="space-y-3 text-white">
                  <h1 className="font-bold text-3xl"> Try Hosting </h1>

                  <div className=" flex relative">
                    <p className="font-semibold t">
                      Earn up to $4075/month by sharing your space in Cypress.
                    </p>

                    <button className="">
                      <div className="absolute right-36 bottom-2 text-lg">
                        <BsQuestionCircle />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="bg-white w-[130px] h-[40px] rounded-xl">
                  <button className="p-2 font-bold">Learn More</button>
                </div>
              </div>
            </div>
          </div>

          {/* picture of person  */}

          <div className="md:flex ">
            <div className="hidden md:flex md:absolute">
              {/* text bg-container */}

              <div className="">
                <div className=" md:block md:w-[1100px] md:h-[450px] md:bg-gradient-to-l from-current via:black  to-white md:absolute "></div>

                <div className="md:bg-black md:w-[500px]  md:h-[450px] md:rounded-2xl bg-gradient-to-r from-black to-transparent  md:absolute">
                  <div className="md:flex md:items-center md:justify-center">
                    {/* text container */}
                    <div className="w-[342px] md:w-[440px] md:mr-10 md:mt-14">
                      <div className="space-y-5 md:flex md:flex-col md:m-14">
                        <div className="space-y-3 text-white md:space-y-5 md:mb-5">
                          {/* text and button */}

                          <h1 className="font-bold text-3xl md:text-4xl">
                            Try Hosting
                          </h1>

                          {/* text and icon container  */}
                          <div className="flex relative">
                            <div>
                              <div>
                                <p className="text-sm md:text-xl">
                                  Earn up to $4075/month by sharing your space
                                  in Cypress.
                                </p>
                              </div>

                              <button className="">
                                <div className="absolute top-8 left-40">
                                  <BsQuestionCircle />
                                </div>
                              </button>
                            </div>

                            <div></div>
                          </div>
                        </div>

                        <div className="bg-white w-[130px] h-[40px] rounded-xl md:w-[140px] md:h-[50px]">
                          <button className="p-2 font-bold md:py-4 md:px-7 md:text-[15px]">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* end of text div */}
                </div>
              </div>
            </div>

            {/* background element for overlap  */}
            <div className="md:flex md:items-center md:justify-center">
              <div className="md:w-[400px]  md:h-[450px] md:rounded-2xl"></div>
            </div>

            <div className="rounded-2xl md:relative">
              <div className="md:w-[1100px] md:h-[450px] md:bg-gradient-to-l from-current via:black to-white md:absolute md:rounded-2xl "></div>

              <div
                className="
            w-[450px] h-[410.5px] bg-personBG  bg-center bg-no-repeat bg-cover rounded-b-3xl md:block md:w-[1100px] md:h-[450px] md:absolute md:opacity-95 md:rounded-r-2xl md:rounded-b-none "
              ></div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HostingSection;

// md:rounded-2xl md:bg-gradient-to-r from-current  to-blue-400

// // md:w-[91.6em] md:h-[50em]
// md:opacity-90  md:mix-blend-color-burn md:bg-gradient-to-r from-black via-black to-white
