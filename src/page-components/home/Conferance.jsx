import React from "react";
import bg from "@/app/images/Conferance.png";

const Conference = () => {
  return (
    <section className="relative px-4 md:px-[120px] py-12 bg-primaryBg  w-screen">
      <div
        className="absolute top-0 right-8 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #6853DB 10%, #6853DB 90%)",

          filter: "blur(100.8px)",
        }}></div>
      <div
        className="max-w-6xl mx-auto flex rounded-3xl  justify-end items-start p-10 h-[500px]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className=" rounded-lg float-left max-w-[500px]">
          <h2 className="text-[52px] font-extrabold text-white ">Conference</h2>
          <p className="text-white  m-0">
            Join us for an engaging conference where industry leaders share
            insights and explore the latest trends in logistics and supply chain
            management. Don't miss the opportunity to connect and learn from the
            best!
          </p>
          <button className="  bg-white mt-4  text-[#27293B] px-6 py-3  flex items-center border border-gray-200 rounded-full">
            {" "}
            Talk to Sales{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4 max-w-[80%] mx-auto  mt-14">
        <h2 class="text-2xl font-extrabold text-[#27293B] ">
          Get an Instant Quote Online
        </h2>

        <div class="flex items-center  justify-between mt-2">
          <input
            type="text"
            class="flex-grow px-4 max-w-[70%] py-2 border border-t-0 border-l-0 border-r-0 border-b-gray-200 rounded-md"
            placeholder="Your email or phone number"
          />
          <button class="bg-primary rounded-full  text-white font-bold py-2 px-4  ml-2">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Conference;
