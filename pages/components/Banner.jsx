"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="lg:py-16 bg-[url('/images/lotus-background.jpeg')] bg-cover bg-center">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
              <h1 className="text-gray-300 dark:text-gray-100 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold ml-1">
                <br></br>
                Dahlia James

              </h1>
              <p className="text-gray-400 dark:text-gray-300 text-base sm:text-lg mb-6 lg:text-xl ml-2">
                Technical Service.          Software Development.
              </p>
              <div>

              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
              
            </motion.div>
          </div>
          <div className="text-white mt-4 mb">
          <button type="button" className="bg-transparent text-white px-4 py-2 rounded-full border border-purple-500 hover:bg-purple-500 transition-all duration-300 mr-2 ml-2">English</button>
<button type="button" className="bg-transparent text-white px-4 py-2 rounded-full border border-purple-500 hover:bg-purple-500 transition-all duration-300">French</button>
          </div>
        </section>
    );
};

export default Banner;

