"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "Sobre min",
  description:
    "Sou um programador dedicado, apaixonado pela excelência e pela entrega de resultados de alta qualidade. Com ampla experiência em diversas tecnologias, destaco-me pela capacidade de criar soluções eficientes, inovadoras e sob medida para cada desafio. Trabalho com profissionalismo, atenção aos detalhes e foco em superar expectativas, garantindo sempre o melhor resultado.",
  info: [
    { fieldName: "Nome", fieldValue: "Ivan Izidoro" },
    { fieldName: "Telefone", fieldValue: "(81) 98288-3978" },
    { fieldName: "Experiência", fieldValue: "1+ Anos" },
    { fieldName: "Email", fieldValue: "contato@ivanizidoro.com.br" },
    { fieldName: "Nacionalidade", fieldValue: "Brasileiro" },
    { fieldName: "Freelance", fieldValue: "Disponível" },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha experiência",
  description: `Sou um desenvolvedor com experiência em tecnologias modernas para web e mobile, expecializado em:
  HTML5 E CSS5: Criação de interfaces responsivas e otimizadas.
  JavaScript e TypeScript: Desenvolvimento de aplicações seguras, escaláveis e fácil manutenção.
  Node.js: Construção de APIs eficientes e servidores esccláveis.
  React.js e Next.js: Criação de aplicações web rápidas, dinâmicas e otimizadas para SEO.
  React Native: Desenvolvimento de aplicações móveis multiplataforma com experiência nativa.
  SQL e MySQL: Modelagem, gestão e otimização de bases de dados relacionais.
  `,
  items: [
    {
      company: "WORSCODE",
      position: "SEO / Desenvolovedor FULL STACK",
      duration: "2024 - Atual",
    },
    {
      company: "Freelance",
      position: "Desenvolovedor FULL STACK",
      duration: "2023 - Atual",
    },
    {
      company: "Pipoca Ágil",
      position: "Devenvolvedor Back-End - Voluntário",
      duration: "2024",
    },
    {
      company: "NETVIP TELELCOM",
      position: "Supervisor Tecnico",
      duration: "2022 - Atual",
    },
    {
      company: "BBG TELECOM",
      position: "Tecnico Instalador",
      duration: "2019 - 2022",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Meus cursos",
  description: `Com a formação em Programação de Computadores pelo DevClub, pude aprimorar minhas habilidades em desenvolvimento Full Stack, adquirindo conhecimentos sólidos em tecnologias como HTML, CSS, JavaScript, React, Node.js, Git/GitHub, Insomnia, PostgreSQL, Sequelize e Docker.
O aprendizado é baseado em projetos práticos, sob a orientação do experiente mentor Rodolfo Mori, o que me permitiu desenvolver projetos de alta qualidade e aprimorar minhas habilidades de resolução de problemas. Essa formação me forneceu as habilidades necessárias para construir interfaces atraentes e funcionais no front-end, bem como criar infraestrutura escalável e robusta no back-end. Estou constantemente atualizando meus conhecimentos e habilidades para oferecer o melhor serviço aos meus clientes e criar soluções inovadoras e eficientes.`,
  items: [
    {
      institution: "DEVCLUB",
      dagree: "Desenvolovedor Web FULL STACK",
      duration: "2023 - 2024",
    },
    {
      institution: "Santander | Open Academy",
      dagree: "Python",
      duration: "2024",
    },
  ],
};

// skills data
const skills = {
  title: "Minhas Hbilidadea",
  description:
    "Sou um desenvolvedor full stack com experiência em criar e manter aplicações web completas, desde o design e implementação do frontend até a gestão e desenvolvimento do backend. Tenho habilidades em diversas tecnologias como HTML, CSS, JavaScript, frameworks modernos como React ou Angular, e stacks backend como Node.js, Django ou Laravel. Além disso, possuo conhecimentos sólidos em bancos de dados relacionais e não relacionais, integração de APIs e metodologias ágeis.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaFigma />, name: "figma" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Meus cursos</TabsTrigger>
            <TabsTrigger value="skills">Minhas Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0 sm:py-3">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dat */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0 sm:py-3">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.dagree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dat */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* abount */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-h-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
