"use client";
const SkillsSection = () => {
return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-around items-start">
      <div className="mt-4">
    <h3 className="text-xl font-semibold text-white">Software Development Tools</h3>
    <ul className="list-disc pl-5 text-white">
      <li>Git</li>
      <li>Docker</li>
      <li>Jira</li>
      <li>IntelliJ</li>
      <li>VS Code</li>
    </ul>
  </div>
  
  <div className="mt-4">
    <h3 className="text-xl font-semibold text-white">Databases</h3>
    <ul className="list-disc pl-5 text-white">
      <li>MySQL</li>
      <li>MongoDB</li>
      <li>PostgreSQL</li>
      <li>Firebase</li>
    
    </ul>
  </div>
  
  <div className="mt-4">
    <h3 className="text-xl font-semibold text-white">Programming Languages</h3>
    <ul className="list-disc pl-5 text-white">
      <li>JavaScript</li>
      <li>Python</li>
      <li>Java</li>
      <li>C#</li>
      <li>Swift</li>
    </ul>
  </div>

  
  <div className="mt-4">
    <h3 className="text-xl font-semibold text-white">Frameworks</h3>
    <ul className="list-disc pl-5 text-white">
        <li>SpringBoot</li>
      <li>React.js</li>
      <li>.NET</li>
      <li>Angular</li>
    </ul>
  </div>
  
  <div className="mt-4">
    <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
    <ul className="list-disc pl-5 text-white">
      <li>Effective Communication</li>
      <li>Teamwork and Collaboration</li>
      <li>Problem-Solving</li>
    </ul>
  </div>
  </div>
      </section>
)
}
export default SkillsSection;