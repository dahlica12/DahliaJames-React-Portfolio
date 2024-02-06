"use client";
import Image from 'next/image';
const HobbiesSection = () => {
    return (
        <section id="projects">
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Hobbies
          </h2>
          <ul className="text-1xl font-bold text-white mb-4">
            <li>Swimming</li>
            <li>Cooking</li>
            <div className="flex flex-wrap gap-2 mt-4">
  <div className="w-32 h-32 relative rounded-lg overflow-hidden">
    <Image src="/hobbies/pasta.jpg" alt="Cooking 1" layout="fill" objectFit="cover" />
  </div>
  <div className="w-32 h-32 relative rounded-lg overflow-hidden">
    <Image src="/hobbies/rice2.jpg" alt="Cooking 2" layout="fill" objectFit="cover" />
  </div>
  <div className="w-32 h-32 relative rounded-lg overflow-hidden">
    <Image src="/hobbies/palakpaneer.jpg" alt="Cooking 3" layout="fill" objectFit="cover" />
  </div>
  <div className="w-32 h-32 relative rounded-lg overflow-hidden">
    <Image src="/hobbies/paneer.jpg" alt="Cooking 4" layout="fill" objectFit="cover" />
  </div>
  <div className="w-32 h-32 relative rounded-lg overflow-hidden">
    <Image src="/hobbies/tacos.jpg" alt="Cooking 5" layout="fill" objectFit="cover" />
  </div>
  <div className="w-32 h-32 relative rounded-lg overflow-hidden">
    <Image src="/hobbies/brownies.jpg" alt="Cooking 6" layout="fill" objectFit="cover" />
  </div>
  <div className="w-32 h-32 relative rounded-lg overflow-hidden">
    <Image src="/hobbies/curry.jpg" alt="Cooking 7" layout="fill" objectFit="cover" />
  </div>
  </div>
            <li>Learning Languages</li>
          </ul>
          </section>
    )
    }
    export default HobbiesSection;