"use client";

import React, { use, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


const Mascot = ({isBlurred, isVisible} : {isBlurred: boolean, isVisible: boolean}) => {
  const cloudVariants = {
    visible: {
      opacity: 1,
      scale: [0.95, 0.9, 0.95],
      transition: {
        opacity: { duration: 0.5, delay: 1 },
        // rotate: { repeat: Infinity, duration: 100, ease: "linear", delay: 1 },
        scale: { repeat: Infinity, duration: 3, ease: "linear" },
      },
    },
    hidden: {
      opacity: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const bodyVariants = {
    initial: { y: 20, opacity: 0 },

    animate: {
      y: 0,
      opacity: 1,

      transition: { type: "spring", stiffness: 1000, damping: 20 },
    },
  };
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="64.48 227.88 349.04 246.5"
      style={{ color: "inherit" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-secondary"
        d="M401.639 239.679H76.2808V424.437H401.639V239.679Z"
        id="bg"
        fill="#F6F6F6"
      />
      <motion.path
        className="fill-slate-200 stroke-slate-900"
        d="M266.903 386.377C257.669 381.399 256.464 376.742 256.384 369.756C244.902 371.122 232.376 369.997 221.536 369.516C221.536 376.019 220.412 380.757 212.462 385.494C196.162 395.21 165.65 395.611 165.65 413.919V424.036C165.65 424.839 166.292 425.481 167.095 425.481H310.503C311.387 425.481 312.109 424.758 312.109 423.875V413.116C312.27 396.414 279.188 393.042 266.903 386.377Z"
        strokeWidth="14"
        strokeMiterlimit="10"
        id="shirt"
        variants={bodyVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      />
      <motion.path
        className="fill-white stroke-slate-900"
        d="M238.96 381.881C275.9 381.881 305.846 351.935 305.846 314.996C305.846 278.056 275.9 248.11 238.96 248.11C202.019 248.11 172.073 278.056 172.073 314.996C172.073 351.935 202.019 381.881 238.96 381.881Z"
        fill="white"
        id="head"
        stroke="#0F172A"
        strokeWidth="14"
        strokeMiterlimit="10"
        variants={bodyVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      />
      <motion.path
        className="fill-slate-900 stroke-slate-900"
        d="M259.756 351.931C260.961 352.895 260.881 354.34 259.676 355.223C253.574 359.8 246.989 362.129 240.004 362.129C233.098 362.129 226.032 359.88 218.565 355.303C217.28 354.501 217.039 353.055 218.083 352.011C219.127 350.968 221.054 350.807 222.339 351.61C228.602 355.464 234.463 357.391 239.923 357.391C245.223 357.391 250.362 355.464 255.34 351.771C256.705 350.968 258.552 351.048 259.756 351.931Z"
        strokeWidth="4"
        id="mouth"
        strokeMiterlimit="10"
        variants={bodyVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      />
      <motion.path
        className="fill-slate-900 stroke-slate-900 "
        d="M273.888 322.302C277.924 322.302 281.195 319.031 281.195 314.996C281.195 310.96 277.924 307.689 273.888 307.689C269.853 307.689 266.582 310.96 266.582 314.996C266.582 319.031 269.853 322.302 273.888 322.302Z"
        fill="#0F172A"
        stroke="#0F172A"
        strokeWidth="3"
        id="right-eye"
        strokeMiterlimit="10"
        variants={bodyVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      />
      <motion.path
        className="stroke-slate-900 fill-slate-900"
        d="M203.549 322.302C207.585 322.302 210.856 319.031 210.856 314.996C210.856 310.96 207.585 307.689 203.549 307.689C199.514 307.689 196.242 310.96 196.242 314.996C196.242 319.031 199.514 322.302 203.549 322.302Z"
        strokeWidth="3"
        id="left-eye"
        strokeMiterlimit="10"
        variants={bodyVariants}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      />
      <motion.path
        className="stroke-slate-900  fill-slate-50"
        d="M315.562 309.375C319.256 315.638 321.022 323.427 320.46 331.135C320.058 337.157 318.693 342.938 316.365 347.916C314.036 353.135 310.905 357.391 307.051 360.523C301.751 364.939 295.408 366.304 289.145 364.457C288.502 372.406 285.531 379.472 281.035 384.129C276.94 388.545 272.042 391.516 266.742 393.122C261.523 394.728 256.063 394.889 250.683 393.684C244.099 391.998 238.237 388.064 234.222 381.56C229.324 387.261 223.142 390.151 216.557 389.83C211.338 389.75 206.119 388.144 201.221 385.253C196.483 382.604 191.987 378.348 188.534 373.209C184.841 367.829 182.753 360.844 182.592 353.617C174.482 353.617 166.774 347.836 162.438 338.201C160.35 333.865 158.825 329.127 158.102 324.069C157.219 319.01 157.219 313.952 157.861 308.973C159.467 297.652 164.927 287.695 175.526 284.002C174.804 278.301 175.285 272.439 176.891 267.301C179.22 259.994 182.913 253.651 187.812 249.234C192.87 244.336 198.812 241.446 205.155 240.803C211.9 240.161 218.886 242.57 224.828 247.548C229.726 240.482 238.88 236.468 248.194 235.825C252.209 235.504 256.223 235.905 260.158 236.869C263.852 237.833 267.465 239.599 270.757 242.249C273.888 244.818 276.458 248.672 277.984 253.249C288.261 249.154 297.014 250.599 303.919 255.176C312.912 261.198 319.175 273.082 320.219 286.33C320.701 294.681 319.095 302.951 315.562 309.375Z"
        strokeWidth="14"
        strokeMiterlimit="10"
        variants={cloudVariants}
        initial="hidden"
        animate={isBlurred ? "visible" : "hidden"}
      />

      <motion.path
        className=" stroke-primary fill-primary"
        id="monitor"
        d="M70.4192 227.876H407.581H413.522V233.818V430.299V436.24H407.581H284.809V459.767H305.445V474.38H172.073V459.767H192.709V436.24H70.4192H64.4773V430.299V233.818V227.876H70.4192ZM401.719 239.679H76.2808V424.437H401.639L401.719 239.679Z"
      />
    </svg>
  );
};

const Hero = () => {
  const [isBlurred, setBlurred] = useState(true);
  const [isVisible, setVisible] = useState(true);

  // useEffect(() => {
  //   setVisible(true);
  //   setBlurred(true);
  // }, []);

  return (
    <div
      className="flex flex-col gap-4 md:flex-row  justify-center w-full items-center "
      id="hero"
    >
      <div className="flex flex-col gap-1 md:gap-5 items-center ">
        <div className="text-4xl font-extrabold">
          Communicate Privately, Share Confidently.
        </div>
        <div className="text-2xl ">
          <p>
            Experience seamless face blurring and video delivery with{" "}
            <span className=" font-extrabold">obscurus</span>.
          </p>
        </div>
        <div className="flex flex-row justify-start w-full">
          <Tabs defaultValue="blurred" className="">
            <TabsList className="p-6 px-2">
              <TabsTrigger
                value="notBlurred"
                onClick={() => setBlurred(false)}
                className=""
              >
                <div className="text-xl font-extrabold">Not Blurred</div>
              </TabsTrigger>
              <TabsTrigger value="blurred" onClick={() => setBlurred(true)}>
                <div className="text-xl font-extrabold">Blurred</div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="p-4 md:p-10 min-w-fit">
        <Mascot isBlurred={isBlurred} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default Hero;
