import React from "react";

import { Icon } from "semantic-ui-react";

const Skills = ({ SkillsRef }) => {
  return (
    <>
      <h3 className="ml-20 underline underline-offset-4 font-mono">Skills</h3>
      <div
        className="flex w-full justify-center text-center space-y-10 "
        ref={SkillsRef}
      >
        <section className="w-full justify-center">
          <div className=" space-x-10">
            <h4 className="m-auto p-5 w-44 ">Frontend skills</h4>

            <div className=" flex justify-center h-1/4">
              <span className="">
                <Icon name="html5" size="big" color="teal" />
                <p>HTML</p>
              </span>
              <span>
                <Icon name="css3 alternate" size="big" color="silver" />
                <p>CSS</p>
              </span>
              <span>
                <Icon name="js square" size="big" color="orange" />
                <p>JAVASCRIPT</p>
              </span>
            </div>
          </div>
          <div className=" space-x-10 mt-4">
            <h4 className="p-5 m-auto h-fit w-44">Backend skills</h4>
            <div className="flex justify-center space-x-4 ">
              <span className="  flex flex-col">
                <img
                  src=" https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                  width={40}
                  className="justify-center "
                  alt="Mongodb"
                />
                <label>MONGODB</label>
              </span>

              <span className=" flex flex-col">
                <img
                  src="https://img.icons8.com/?size=100&id=VNbNTkww38qS&format=png&color=#fffff"
                  alt="SQL"
                  width={40}
                />
                <lbale>SQL</lbale>
              </span>
              <span className="flex flex-col">
                <img
                  src="https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"
                  width={40}
                />
                <p className="font-bold">EXPRESS JS</p>
              </span>
              <span className="flex flex-col pt-3">
                <Icon name="node js" size="big" />
                <label>NODE JS</label>
              </span>
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=JAOzEPu9w5iE&format=png&color=000000"
                  width={40}
                  alt="PHP"
                />
                PHP
              </span>
            </div>
          </div>
          <div className=" flex-grid space-x-10 mt-4">
            <h4 className="p-5 m-auto w-44">version control</h4>
            <div className=" flex justify-center space-x-4">
              <span className="flex flex-col ">
                {" "}
                <Icon name="git" size="big" />
                <label>GIT</label>
              </span>
              <span className="flex flex-col">
                {" "}
                <Icon name="github" size="big" />
                <label>GITHUB</label>
              </span>
            </div>
          </div>
          <div className=" flex-grid space-x-10 mt-4">
            <h4 className="p-5 m-auto w-44">Porgramming skills</h4>
            <div className="flex justify-center space-x-4">
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=5OD485koNIrb&format=png&color=000000"
                  alt="JAVA"
                  width={40}
                />
                <label>JAVA</label>
              </span>
              <span className="flex flex-col pt-3">
                <Icon name="python" size="big" color="yellow" />
                <label>PYTHON</label>
              </span>
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
                  alt="C++"
                  width={40}
                />
                <label>C++</label>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
