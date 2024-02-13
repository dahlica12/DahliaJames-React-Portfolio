"use client";
import Link from "next/link";
import Image from "next/image"; 
import { FaDatabase, FaCode, FaTools, FaReact, FaUsers, FaDesktop} from 'react-icons/fa';
const SkillsSection = () => {
return (
  <section id="skills" className="py-12 px-4">
  <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mt-4 mb-8">
    My Skills
  </h2>
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 dark:text-white">
      <div className="skill-card bg-white dark:bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
        <FaTools className="text-purple-500 dark:text-purple-300 text-3xl mb-2 mx-auto" />
        <h3 className="text-xl font-semibold">Software Development Tools</h3>
        <ul className="list-none">
          <li>Git</li>
          <li>Docker</li>
          <li>Jira</li>
          <li>IntelliJ</li>
          <li>VS Code</li>
        </ul>
      </div>

      <div className="skill-card bg-white dark:bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
        <FaDatabase className="text-purple-500 dark:text-purple-300 text-3xl mb-2 mx-auto" /> 
        <h3 className="text-xl font-semibold">Databases</h3>
        <ul className="list-none">
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Firebase</li>
        </ul>
      </div>
      
      <div className="skill-card bg-white dark:bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
        <FaCode className="text-purple-500 dark:text-purple-300 text-3xl mb-2 mx-auto" /> 
        <h3 className="text-xl font-semibold">Programming Languages</h3>
        <ul className="list-none">
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
          <li>Swift</li>
        </ul>
      </div>
      
      <div className="skill-card bg-white dark:bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
        <FaReact className="text-purple-500 dark:text-purple-300 text-3xl mb-2 mx-auto" />
        <h3 className="text-xl font-semibold">Frameworks</h3>
        <ul className="list-none">
          <li>SpringBoot</li>
          <li>React.js</li>
          <li>.NET</li>
          <li>Angular</li>
        </ul>
      </div>
      
      <div className="skill-card bg-white dark:bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
        <FaDesktop className="text-purple-500 dark:text-purple-300 text-3xl mb-2 mx-auto" /> 
        <h3 className="text-xl font-semibold">Operating Systems</h3>
        <ul className="list-none">
          <li>Windows 11/10</li>
          <li>MacOS</li>
          <li>Linux ( using Windows Virtual Machine)</li>
        </ul>
      </div>

      <div className="skill-card bg-white dark:bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
        <FaUsers className="text-purple-500 dark:text-purple-300 text-3xl mb-2 mx-auto" /> 
        <h3 className="text-xl font-semibold">Soft Skills</h3>
        <ul className="list-none">
          <li>Effective Communication</li>
          <li>Teamwork and Collaboration</li>
          <li>Problem-Solving</li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-8">
          <Link href="/Dahlia_James_Resume.pdf" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out shadow-lg">
            <span className="ml-3">Download Resume</span>
          </Link>
        </div>
      </div>
    </section>
)
}
export default SkillsSection;