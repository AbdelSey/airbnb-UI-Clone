import React from "react";
import { BsStarFill} from "react-icons/bs";


// TODO: "CURSOR POINTER ON ALL THE PICTURES "
const ReviewSection = () => {
  return (
    <section className="">
      <div className="w-[450px] h-[1650px] md:grid md:grid-cols-3 md:justify-items-center md:gap-5  md:w-[1500px] md:h-[700px] md:space-y-0 md:container ">
        <div className="w-[430px] md:col-span-3 md:w-[1500px] md:space-y-4 mt-10 md:mt-0">
          <div>
            <h1 className="text-[20px] font-semibold md:text-[40px]">
              What guests are saying about homes in United States
            </h1>
          </div>

          <div className="mt-3 md:mt-0 w-[450px] md:w-[600px]  md:text-gray-600">
            <p className="text-md md:text-xl">
              Over{" "}
              <span className="font-bold text-gray-700">
                {" "}
                80,000,000 guest reviews{" "}
              </span>{" "}
              with an average of
              <span className="font-bold text-gray-700">
                {" "}
                4.8 out of 5 stars{" "}
              </span>
            </p>
          </div>
        </div>
        {/* first picture and review  */}
        <article className="space-y-3 mt-5">
          {/* section-header-text */}

          {/* picture of bedroom */}
          <div className="bg-room1 w-[450px] h-[350px] bg-cover bg-no-repeat rounded-2xl"></div>
          {/* stars review */}
          <div className="text-rose-600 flex space-x-1">
            <h1>
              <BsStarFill />
            </h1>
            <h1>
              <BsStarFill />
            </h1>
            <h1>
              <BsStarFill />
            </h1>
            <h1>
              <BsStarFill />
            </h1>
            <h1>
              <BsStarFill />
            </h1>
            <h1>
              <BsStarFill />
            </h1>
          </div>

          {/* text - review  */}
          <div>
            <p>
              "Great walking neighborhood! We are in between Ballard and Phinney
              Ridge, with easy access to great North Seattle spots and quick
              access to Downtown Seattle as well."
            </p>
          </div>

          {/* profile header */}

          <header className="flex space-x-3">
            <div className="bg-person1 w-[50px] h-[50px] bg-cover rounded-full">
              {" "}
            </div>

            <div>
              <h1 className="font-bold"> Thomas </h1>
              <p className="text-slate-700"> United States </p>
            </div>
          </header>
        </article>

        {/* second picture and review  */}

        <article className="space-y-3 mt-5">
          {/* picture of bedroom */}
          <div className="bg-room2 w-[450px] h-[350px] bg-cover bg-no-repeat rounded-2xl"></div>
          {/* stars review */}
          <div className="text-rose-600 flex space-x-1">
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
          </div>

          {/* text - review  */}
          <div>
            <p>
              "Little cute place. Amanda was super friendly and responsive. Bed
              is super comfy, love it. Nice neighborhood, pretty quite and safe
              at night. A great time! Highly recommend!"
            </p>
          </div>

          {/* profile header */}

          <header className="flex space-x-3">
            <div className="bg-person2 w-[50px] h-[50px] bg-cover rounded-full">
              {" "}
            </div>

            <div>
              <h1 className="font-bold"> Amanda </h1>
              <p className="text-slate-700"> United States </p>
            </div>
          </header>
        </article>

        {/* third review  */}

        <article className="space-y-3 mt-5">
          {/* picture of bedroom */}
          <div className="bg-room3 w-[450px] h-[350px] bg-cover bg-no-repeat rounded-2xl"></div>
          {/* stars review */}
          <div className="text-rose-600 flex space-x-1">
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
            <h1>
              {" "}
              <BsStarFill />{" "}
            </h1>
          </div>

          {/* text - review  */}
          <div>
            <p>
              "Adorable place, complete with baby chickens! Very comfortable
              with extra little amenities to make your stay even easier. We have
              already recommended it to others!"
            </p>
          </div>

          {/* profile header */}

          <header className="flex space-x-3">
            <div className="bg-person3 w-[50px] h-[50px] bg-cover rounded-full">
              {" "}
            </div>

            <div>
              <h1 className="font-bold"> Rebecca </h1>
              <p className="text-slate-700"> Canada </p>
            </div>
          </header>
        </article>

        {/* importted articles  */}
      </div>
    </section>
  );
};

export default ReviewSection;
