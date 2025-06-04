import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full min-h-[789px] relative flex flex-col justify-center items-center gap-5 overflow-hidden py-12">
      <div className="container mx-auto px-4 flex flex-col justify-start items-center gap-4 text-center">
        <h2 className="text-primary-400 text-2xl font-bold uppercase leading-loose">
          Studio digital
        </h2>
        
        <div className="flex flex-col items-center">
          <h1 className="text-text-primary-bright text-6xl md:text-8xl font-black leading-[114px]">
            Smart
          </h1>
          <div className="h-28 px-2.5 py-1.5 origin-top-left -rotate-1 bg-primary-400 rounded-md shadow-[2px_2px_0px_0px_rgba(18,18,20,1.00)] inline-flex justify-center items-center">
            <h1 className="text-text-white-bright text-6xl md:text-8xl font-black leading-[114px]">
              Alternative
            </h1>
          </div>
        </div>

        <p className="max-w-[648px] text-text-neutral-bright text-xl font-light leading-loose">
          Design agile, centré utilisateurs, orienté livraison
        </p>

        <Link 
          to="/contact"
          className="mt-8 px-6 py-4 bg-action-tertiary rounded-2xl text-text-neutral-dim text-base font-bold hover:bg-tertiary-600 transition-colors"
        >
          Discuter de votre projet
        </Link>
      </div>

      {/* Background Circles */}
      <div className="absolute left-[-359px] top-[603px] w-[760px] h-[760px] opacity-5 rounded-full outline outline-[226px] outline-primary-400" />
      <div className="absolute right-[-359px] top-[-401px] w-[760px] h-[760px] opacity-5 rounded-full outline outline-[226px] outline-primary-400" />
    </section>
  );
};

export default Hero;
