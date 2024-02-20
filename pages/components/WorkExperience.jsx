"use client";
import React from 'react';

const WorkExperience = () => {
    return (
        <section id="work" className="py-12 px-4 mb-6">
      <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mt-4 mb-8">
        Work Experience
      </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 dark:text-white">
          <div className="experience-card bg-white dark:bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
            <div className="font-bold dark:text-white">May 2023 – Aug 2023</div>
            <div className="font-semibold dark:text-gray-300">Wiptec Inc.</div>
            <div className="font-medium dark:text-gray-400">Warehouse Associate</div>
            <ul className="list-disc list-inside dark:text-gray-200">
              <li>Performed warehouse duties, including inventory management, order fulfillment, and collaboration with team members.</li>
              <li>Operated specialized warehouse equipment, contributing to the seamless execution of operations.</li>
            </ul>
          </div>
          <div className="experience-card bg-white dark:bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
            <div className="font-bold dark:text-white">Jun 2022 – Apr 2023</div>
            <div className="font-semibold dark:text-gray-300">Maxi</div>
            <div className="font-medium dark:text-gray-400">Grocery Store Cashier</div>
            <ul className="list-disc list-inside dark:text-gray-200">
              <li>Provided outstanding customer service with a friendly approach.</li>
              <li>Efficiently managed transactions and addressed inquiries.</li>
              <li>Briefly supervised a grocery store team, ensuring smooth operations.</li>
            </ul>
          </div>
          <div className="experience-card bg-white dark:bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
  <div className="font-bold dark:text-white">Aug 2020 – Aug 2021</div>
  <div className="font-semibold dark:text-gray-300">Harvey&apos;s</div>
  <div className="font-medium dark:text-gray-400">Cashier</div>
  <ul className="list-disc list-inside dark:text-gray-200">
    <li>Provided efficient and friendly customer service, ensuring a positive shopping experience for all customers.</li>
    <li>Handled cash and credit card transactions with accuracy and speed, maintaining a balanced cash drawer.</li>
    <li>Collaborated with team members to maintain a clean and organized store environment.</li>
  </ul>
</div>
        </div>
      </div>
    </section>
    );
  };
  
  export default WorkExperience;