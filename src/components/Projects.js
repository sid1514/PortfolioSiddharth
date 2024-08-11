import React, { useEffect } from "react";
import data from "./data.json";
import { Button } from "semantic-ui-react";

const Projects = ({ projectRef }) => {
  return (
    <>
      <h2 className="pt-16 m-16 font-bold underline underline-offset-4 font-mono">
        Projects
      </h2>
      <div className="w-full justify-center text-center p-10" ref={projectRef}>
        {data.map((p) => (
          <div
            key={p.id}
            className=" shadow-lg md:flex md:flex-row w-10/12 h-1/4 m-5 p-5 text-center justify-center font-mono space-x-3 "
          >
            <div className="md:w-1/3">
              <img src={p.pic} alt={p.name} />
            </div>
            <div className="flex flex-col md:w-1/4 space-y-5">
              <span className="font-bold m-4 md:text-2xl">{p.name}</span>
              <span className="md:flex w-auto">{p.description}</span>
              <span className="flex space-x-3 ml-10 align-center">
                {p.skills.map((s) => (
                  <span className="flex flex-col">
                    <img src={s.icon} width={28} height={25} alt="p.name"/>
                    <lable>{s.name}</lable>
                  </span>
                ))}
              </span>
              <span>
                <Button
                  inverted
                  color="green"
                  href={p.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Button>
                <Button
                  inverted
                  color="teal"
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
              </span>
            </div>
          </div>
        ))}
        <div className="text-xl underline underline-2 text-neutral-400 m-10 ">
          <a
            href="https://github.com/sid1514"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 font-mono"
          >
            View more on github
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
