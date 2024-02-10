"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="lg:py-16 ">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <br></br>
                Dahlia James
                {/* <TypeAnimation
                  sequence={[
                    "Judy",
                    1000,
                    "Web Developer",
                    1000,
                    "Mobile Developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                /> */}
              </h1>
              <p className="text-gray-900 dark:text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
                Technical Support.          Software Development.
              </p>
              <div>
                {/* <Link
                  href="/#contact"
                  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                >
                  Hire Me
                </Link> */}
                {/* <Link
                  href="Dahlia_James_Resume.pdf"
                  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                >
                  <img src="resume-thumbnail.png" alt="Resume thumbnail"
                  width="200"
                  height="200"
                   className="block bg-[#121212] hover:bg-slate-800 px-5 py-2">
                  </img>
                </Link> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
              <div className="rounded-full bg-gray-200 dark:bg-gray-800 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image
                  src="/images/lotus-background.jpeg"
                  alt="lotus image"
                  className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  width={400}
                  height={400}
                />
              </div>
            </motion.div>
          </div>
          <div className="text-white mt-4">
  <button type="button" className="bg-transparent border border-indigo-800 text-indigo-800 px-4 py-2 rounded-full hover:bg-indigo-800 hover:text-white transition-all duration-300">English</button>
  <button type="button" className="bg-transparent border border-indigo-800 text-indigo-800 px-4 py-2 rounded-full hover:bg-indigo-800 hover:text-white transition-all duration-300 ml-2">French</button>
</div>
        </section>
    );
};

export default Banner;

