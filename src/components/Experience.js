import React from "react";

const Experience = ({ ExperienceRef }) => {
  return (
    <>
      <h3 className="ml-20 underline underline-offset-4 font-mono">
        Experience
      </h3>
      <div
        className="m-5 flex justify-center md:text-xl h-full"
        ref={ExperienceRef}
      >
        <ul className="p-5">
          <li className="font-bold">Internship</li>
          <li> 31st March to 1 May</li>
          <li>Metainnovix company, pune</li>
          <li>As full stack developer</li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
