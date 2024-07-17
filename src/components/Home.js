import React, { useEffect, useRef, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Button, Icon } from "semantic-ui-react";
import { motion } from "framer-motion";
import Qualification from "./Qualification";
import AboutMe from "./AboutMe";
const Home = ({
  projectRef,
  scrollToSection,
  ExperienceRef,
  SkillsRef,
  CertificateRef,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [showParagraphs, setShowParagraphs] = useState([false, false, false]);
  const email = "sid15shinde@gmail.com"; // Replace with the desired email address
  const subject = "Subject "; // Replace with the desired subject
  const body = "type";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const [text] = useTypewriter({
    words: [
      "hii,",
      "I am siddharth shinde",
      "I'm a Full Stack Developer",
      "with a knack for the MERN stack.",
      "From crafting sleek front-ends to robust back-ends,",
      "I turn ideas into interactive web experiences",
      "Dive in to see my creations in action",
    ],
    loop: {},
  });
  const handleclickMore = () => {
    setShowMore(!showMore);
    setRotation(rotation + 45);
    setShowParagraphs([false, false, false]);
    setTimeout(() => setShowParagraphs([true, false, false]), 500);
    setTimeout(() => setShowParagraphs([true, true, false]), 1000);
    setTimeout(() => setShowParagraphs([true, true, true]), 1500);
  };

  return (
    <>
      <section className="font-mono bg-img p-10 bg-neutral-950 w-full text-white bg-gradient-to-r from-neutral-950 to-neutral-500">
        <div className="fixed h-24 flex flex-col md:flex md:flex-row md:space-x-10">
          <div
            className={`ListNav absolute ${openMenu ? "left-1 " : null}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Icon name="list" size="big" />
          </div>
          <div
            className={`${
              openMenu ? " flex flex-col " : "hidden"
            }  md:flex md:flex-row w-1/2`}
          >
            <span className="flex flex-row md:mt-0 mt-10 ">
              <a
                href={mailtoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Icon
                  name="mail"
                  size="big"
                  color="white"
                  className="hover:underline underline-offset-8"
                />{" "}
              </a>
            </span>
            <span className="flex flex-row mt-2">
              <a
                href="https://www.linkedin.com/in/siddharth-shinde-17a758222"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="linkedin"
                  size="big"
                  color="blue"
                  className="hover:underline underline-offset-8"
                />
              </a>
            </span>
            <span className="flex flex-row mt-2">
              <a
                href="https://github.com/sid1514"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="github"
                  size="big"
                  color="purple"
                  className="hover:underline underline-offset-8"
                />
              </a>
            </span>
            <span className="resumeBt z-50 flex bg-transparent rounded-full w-1/4 md:h-10 ml-6">
              <Button
                inverted
                color="white"
                href="https://drive.google.com/file/d/1ZzEmAigCMtvth-lIEgci4n28M3_NcV7X/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                size="medium"
              >
                Resume
              </Button>
            </span>
          </div>
          <div
            className={`${
              openMenu ? "EPSbt w-1/3 space-x-4 flex " : "hidden"
            } mt-0 text-center w-1/4 md:space-y-0 md:w-1/2 md:flex md:flex-row md:text-center md:space-x-24`}
          >
            <h6
              className="text-neutral-200 md:text-2xl hover:underline underline-offset-4"
              style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
              onClick={() => scrollToSection(ExperienceRef)}
            >
              Experiences
            </h6>
            <h6
              className="text-neutral-200 md:text-2xl hover:underline underline-offset-4"
              style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
              onClick={() => scrollToSection(projectRef)}
            >
              Projects
            </h6>
            <h6
              className="text-neutral-200 md:text-2xl  hover:underline underline-offset-4"
              style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
              onClick={() => scrollToSection(SkillsRef)}
            >
              Skills
            </h6>
          </div>

          <div className="fixed right-1 md:w-1/3 text-right justify-center ">
            <Icon
              name="add"
              size="big"
              color="white"
              onClick={handleclickMore}
              style={{ transform: `rotate(${rotation}deg)` }}
              className="transform transition-transform duration-500 "
            />
            {showMore ? (
              <div className="text-right p-4 flex flex-col">
                <p
                  className={`font-bold font-mono transition-opacity duration-500 ${
                    showParagraphs[0] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <AboutMe />
                </p>
                <p
                  className={`font-bold font-mono transition-opacity duration-1000 ${
                    showParagraphs[1] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Qualification />
                </p>
                <p
                  className={`font-bold font-mono transition-opacity duration-1500 ${
                    showParagraphs[2] ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={() => scrollToSection(CertificateRef)}
                >
                  Certificates
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="justify-center w-full text-center flex flex-col md:flex-row md:flex align-center pt-16">
          <div
            className="overflow-hidden md:w-10/12 bg-gradient-to-r from-neutral-900/25 from-10% via-neutral-500 via-30% to-neutral-400/25 to-90% rounded-full md:flex justify-between place-center"
            style={{
              boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
              className="z-0 md:absolute right-[25%] absolute top-[15%]  md:top-[40%] bgText bg-neutral-800/25 p-1 md:p-8 rounded-2xl md:text-3xl "
            >
              <p
                className="bgText bg-neutral-800/25 p-1 md:p-8 rounded-2xl md:text-2xl flex"
                style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
              >
                {text}
                <Cursor />
              </p>
            </motion.div>
            <motion.img
              src="me.png"
              alt="Sliding"
              initial={{ x: "-100%" }}
              
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
              className=" object-cover md:w-auto w-1/3 image_filter"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
