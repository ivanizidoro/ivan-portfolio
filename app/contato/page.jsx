"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(81) 98288-3978",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contato@ivanizidoro.com.br",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Endereço",
    description: "Carpina - PE",
  },
];

import { motion } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contato = () => {
  const form = useRef(); // Referência para o formulário

  // Função para enviar o e-mail
  const sendEmail = (e) => {
    e.preventDefault(); // Evitar recarregamento da página

    emailjs
      .sendForm(
        "service_qyirb41", // Substitua pelo seu Service ID do EmailJS
        "template_lxeqkot", // Substitua pelo seu Template ID do EmailJS
        form.current, // Referência ao formulário
        "QGqRIKmHo0X_nYhkl" // Substitua pela sua Public Key do EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviado com sucesso!");
          form.current.reset(); // Limpar o formulário após o envio
        },
        (error) => {
          console.log(error.text);
          alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              ref={form}
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
              <p className="text-white/60">
                Programar em conjunto é transformar ideias em soluções
                poderosas, unindo mentes brilhantes para criar códigos que
                impactam o mundo!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Nome"
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Sobrenome"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Endereço de e-mail"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Numero de telefone"
                  required
                />
              </div>
              {/* select */}
              <Select name="service" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel value="">Selecione um serviço</SelectLabel>
                    <SelectItem value="Full Stack">
                      Desenvolvedor Full Stack
                    </SelectItem>
                    <SelectItem value="Front-end">Desenvolvedor Front-end</SelectItem>
                    <SelectItem value="Back-end">Desenvolvedor Back-end</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Digite sua mensagem aqui."
                required
              />
              {/* btn */}
              <Button className="max-w-40" type="submit">
                Enviar
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contato;
