"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "Projeto freelance realizado juntos com a equipe da CodeWorks, com o intuito de criar um site para uma clínica de estética.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/portfolio-1.png",
    live: "https://waleriatayres.com.br/",
    gitgub: "https://github.com/CodeWorks-BR/Elayane-Estetica",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project 2",
    description:
      "O site da NetVIP Telecom é uma plataforma moderna desenvolvida com React.js, utilizando Styled-Components para estilização e React Router DOM para a navegação entre páginas.",
    stack: [
      { name: "React.js" },
      { name: "Styled-components" },
      { name: "React Router Dom" },
    ],
    image: "/assets/work/netviptelecom.png",
    live: "https://www.netviptelecom.com.br/",
    gitgub: "https://github.com/ivanizidoro/netvip-telecom-2.0",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description:
      "Nesse projeto foi criado tudo em React, Styled-components. Com o intuito de fortalecer minha habilida",
    stack: [{ name: "React.js" }, { name: "Styled-components" }],
    image: "/assets/work/portfolio-4.png",
    live: "",
    gitgub: "https://github.com/ivanizidoro/Instagram-React",
  },
  {
    num: "04",
    category: "frontend",
    title: "Project 4",
    description: "",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/portfolio-6.png",
    live: "https://ivanizidoro.github.io/PORTFOLIO-1/",
    gitgub: "https://github.com/ivanizidoro/PORTFOLIO-1",
  },
  {
    num: "05",
    category: "frontend",
    title: "Project 5",
    description:
      "Nesse projeto tem o intuito dos clientes realizarem um breve cadastro, e foram utilizado CSS3 e HTML5",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/portfolio-7.png",
    live: "https://ivanizidoro.github.io/Tela-de-Login/",
    gitgub: "https://github.com/ivanizidoro/Tela-de-Login",
  },
  {
    num: "06",
    category: "frontend",
    title: "Project 6",
    description: "Conversor de Moedas",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/portfolio-9.png",
    live: "https://ivanizidoro.github.io/PROJETO-JAVASCRIPT-1/",
    gitgub: "https://github.com/ivanizidoro/PROJETO-JAVASCRIPT-1",
  },
  {
    num: "07",
    category: "frontend",
    title: "Project 7",
    description: "",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/portfolio-11.png",
    live: "https://ivanizidoro.github.io/Portfolio/",
    gitgub: "https://github.com/ivanizidoro/Portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handlesSlideChange = (swiper) => {
    // get the current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on the current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                projeto {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index < project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white/5 group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.gitgub} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white/5 group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handlesSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
