import { Link } from "react-router-dom";
import React from "react";

const AtemMaestroAwesomations: React.FC = () => {
    return (
        <section className="w-full flex flex-col content-center items-center min-h-[42.5rem] bg-white py-10 my-2 px-10">
        <div className="flex flex-col  max-w-screen-2xl mt-0  pb-24 pt-24 sm:w-screen ~p-6/2 overflow-auto items-center justify-center">
          {/* flex flex-col min-h-[698px] max-w-4xl mt-0  pb-24 pt-24 sm:w-screen p-6 */}
          <h2 className="bg-clip-text text-transparent ~text-5xl/7xl text-center font-bold bg-gradient-to-l from-emerald-300 to-blue-500 ">
            Awesomations
            <br />
            Delivered.
          </h2>
          <h2 className="~text-5xl/7xl text-center font-bold text-black">
            Impressively
            <br />
            Fast.
          </h2>
          <div className="max-w-screen-xl">
            <p className="~text-xl/2xl font-medium tracking-wide pt-8 text-center">
              Introducing
              <span className="text-gray-500"> Maestro Automations </span>— Elevate
              your workflow with our easy and reliable subscription-based DEX
              services tailored to meet your evolving automation needs.
              <span className="text-gray-700">
                The ultimate automation experience is here.
              </span>
            </p>
            </div>
            <div className="py-6 flex flex-col">
            
            <Link to="/maestro" className="text-white text-center">
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl  focus:outline-none focus:ring-2 focus:ring-blue-500 ~text-sm/xl">
        <span>Learn more</span>
        
      </button>...........
            </Link>
            
  
          </div>
        </div>
      </section>
    );

}

export default AtemMaestroAwesomations;