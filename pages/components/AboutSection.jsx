"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  // {
  //   title: "Skills",
  //   id: "skills",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Node.js</li>
  //       <li>Express</li>
  //       <li>PostgreSQL</li>
  //       <li>Sequelize</li>
  //       <li>JavaScript</li>
  //       <li>React</li>
  //     </ul>
  //   ),
  // },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science Technology. Champlain College, Saint-Lambert</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Dean's List - 90% + average, Semester 1 </li>
        <li>Honours List - 85% + average, Semester 2</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/setup-desk.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hi, my name is Dahlia, and I'm 20 years old. In my third year of Computer Science, 
          I've developed a genuine interest in IT Support and Software Development. 
          I've been lucky enough to work with JavaScript, React, Git, Java, and C# among other technologies, and I'm always eager to expand my toolkit.
           I thrive  on the energy and creativity that come from teamwork and working together to solve problems. 
          With a positive attitude and always ready for a challenge, 
          I'm eager to work on amazing applications and projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {/* <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {/* {TAB_DATA.find((t) => t.id === tab).content} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
