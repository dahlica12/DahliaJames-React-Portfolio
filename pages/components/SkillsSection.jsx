"use client";
import Link from "next/link";
import Image from "next/image"; 
import { FaDatabase, FaCode, FaTools, FaReact, FaUsers, FaUser } from 'react-icons/fa';
const SkillsSection = () => {
return (
    <section id="Skills" className="text-white mt-4 mb-8 md:mb-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="skill-card bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform">
            <FaTools className="text-3xl mb-2" />
            <h3 className="text-xl font-semibold">Software Development Tools</h3>
            <ul className="list-none">
              <li>Git</li>
              <li>Docker</li>
              <li>Jira</li>
              <li>IntelliJ</li>
              <li>VS Code</li>
            </ul>
  </div>
    
          <div className="skill-card bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform">
            <FaDatabase className="text-3xl mb-2" /> 
    <h3 className="text-xl font-semibold text-white">Databases</h3>
    <ul className="list-none">
      <li>MySQL</li>
      <li>MongoDB</li>
      <li>PostgreSQL</li>
      <li>Firebase</li>
    </ul>
  </div>
          <div className="skill-card bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform">
            <FaCode className="text-3xl mb-2" /> 
    <h3 className="text-xl font-semibold text-white">Programming Languages</h3>
    <ul className="list-disc pl-5 text-white">
      <li>JavaScript</li>
      <li>Python</li>
      <li>Java</li>
      <li>C#</li>
      <li>Swift</li>
    </ul>
  </div>
          <div className="skill-card bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform">
            <FaReact className="text-3xl mb-2" />
    <h3 className="text-xl font-semibold text-white">Frameworks</h3>
    <ul className="list-disc pl-5 text-white">
        <li>SpringBoot</li>
      <li>React.js</li>
      <li>.NET</li>
      <li>Angular</li>
    </ul>
  </div>
          <div className="skill-card bg-[#222222] rounded-lg p-4 hover:scale-105 transition-transform">
            <FaUsers className="text-3xl mb-2" /> 
    <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
    <ul className="list-disc pl-5 text-white">
      <li>Effective Communication</li>
      <li>Teamwork and Collaboration</li>
      <li>Problem-Solving</li>
    </ul>
  </div>
  </div>
        <div className="text-center mt-8">
          <Link href="/Dahlia_James_Resume.pdf"
  className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors"
>
  <div className="flex items-center justify-center">
    <Image src="/resume-thumbnail.png" alt="Resume Thumbnail" width={250} height={250} className="rounded" />
    <span className="ml-2">Download Resume</span>
  </div>
          </Link>
        </div>
        </div>
    </section> 
)
}
export default SkillsSection;