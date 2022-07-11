import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const FormSection = () => {
  const [location, setLocation] = useState("");

  return (
    <section className="flex items-center justify-center md:w-[1500px] md:h-[900px] md:relative md:container md:m-10">
      {/* form article */}
      <div className="md:w-[50%]">
        <article className="md:rounded-xl md:shadow-2xl md:h-[575px] md:w-[550px] md:absolute md:top-0 md:left-0 md:bg-white p-10 m-10">
          <form className="w-[450px] h-[450px] space-y-3  ">
            <div className="text-2xl font-bold">
              Find Places to Stay on LandDnD
            </div>

            <div className="text-gray-500 text-xl">
              <p>Discover entire homes and private places for any trip. </p>
            </div>
            {/* location input field */}
            <div className="w-full h-[65px] border-2 rounded-2xl active:border-black">
              <div className=" ml-6">
                <div className="mt-1">
                  <label className="text-xs font-bold " htmlFor="location">
                    LOCATION
                  </label>
                </div>

                <div className="">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="outline-none border-none w-[350px] h-[25px] bg-transparent placeholder:text-lg  placeholder-gray-500 "
                    placeholder="Anywhere"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* check in and check out */}
            <div className="w-full h-[70px] border-2 rounded-2xl  active:border-black">
              <div className=" flex items-center justify-around m-3">
                {/* check in */}

                <div>
                  <div>
                    <label className="text-xs font-bold" htmlFor="check-in">
                      CHECK IN
                    </label>
                  </div>

                  <div className="">
                    <div className="">
                      <input
                        type="text"
                        name="location"
                        id="check-in"
                        className="outline-none border-none  w-[150px] h-[20px] bg-transparent placeholder:text-lg placeholder-gray-500"
                        placeholder="Add Date"
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="text-4xl text-gray-200 mr-5"> | </h1>
                </div>

                {/* check out */}

                <div>
                  <div>
                    <label className="text-xs font-bold" htmlFor="check-out">
                      CHECK OUT
                    </label>
                  </div>

                  <div className="">
                    <div>
                      <input
                        type="type"
                        name="location"
                        id="check-out"
                        className="outline-none border-none  w-[150px] h-[20px] bg-transparent placeholder:text-lg  placeholder-gray-500"
                        placeholder="Add Date"
                        onFocus={(e) => {
                          e.target.type = "date";
                        }}
                        onBlur={(e) => {
                          e.target.type = "text";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* adults / children tab  */}
            <div>
              <div className="w-full h-[70px] border-2 rounded-2xl  active:border-black">
                <div className=" flex items-center justify-around m-3">
                  {/* adults */}
                  <div className="">
                    <div>
                      <label className="text-sm font-bold" htmlFor="adults">
                        ADULTS
                      </label>
                    </div>

                    <div className="">
                      <div>
                        <select
                          id="adults"
                          name="adults"
                          className="w-[150px] border-none bg-transparent outline-none"
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">11</option>
                          <option value="11">12</option>
                          <option value="12">13</option>
                          <option value="13">14</option>
                          <option value="14">15</option>
                          <option value="15">16</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-4xl text-gray-200 mr-5"> | </h1>
                  </div>

                  {/* children */}

                  <div>
                    <div>
                      <label className="text-sm font-bold" htmlFor="children">
                        CHILDREN
                      </label>
                    </div>

                    <div className="">
                      <div>
                        <select
                          className="w-[150px] bg-transparent"
                          id="children"
                          name="children"
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* amenities  */}
            <div className="w-[350px] h-[100px] flex flex-col space-y-2 mt-2">
              <div className="ml-4">
                <h1 className="font-bold text-xs"> AMENITIES </h1>
              </div>

              <div>
                <div className="flex space-x-2">
                  <div className="bg-white w-[90px] h-[45px] rounded-full text-center border-2  hover:border-black cursor-pointer transition ease-in-out delay-100">
                    <div className="flex items-center justify-center mt-2">
                      <h1> Hot Tub</h1>
                    </div>
                  </div>

                  <div className="bg-white w-[80px] h-[45px] rounded-full text-center border-2 hover:border-black cursor-pointer transition ease-in-out delay-100">
                    <div className="flex items-center justify-center mt-2">
                      <h1> Pool </h1>
                    </div>
                  </div>

                  <div className="bg-white w-[80px] h-[45px] rounded-full text-center border-2  hover:border-black cursor-pointer transition ease-in-out delay-100">
                    <div className="flex items-center justify-center mt-2">
                      <h1> Wifi </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  search button  */}
            <div className="">
              <button className="text-white w-full text-lg bg-rose-600 font-bold flex items-center justify-center py-3 rounded-xl space-x-2">
                <div>
                  <BiSearch />{" "}
                </div>
                <div> Search</div>
              </button>
            </div>
          </form>
        </article>

        {/* picture article  */}

        <article>
          <div className="hidden md:h-[850px] md:bg-house md:flex md:rounded-xl md:bg-cover md:w-[1119px]"></div>
        </article>
      </div>
    </section>
  );
};

export default FormSection;
