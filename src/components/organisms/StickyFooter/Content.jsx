import React from 'react';
import { FooterNavLink } from '../../atoms';

export default function Content() {
  return (
    <div className="bg-[#0E0E0C] py-8 px-12 h-full w-full flex flex-col justify-between">
      <SectionNav />
      <SectionInfo />
    </div>
  );
}

const SectionNav = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const SectionInfo = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[12vw] leading-[0.8] mt-10 text-[#DDDDD5]">
        My Portfolio
      </h1>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20 text-[#DDDDD5]">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase">About</h3>
        <FooterNavLink href="/#hero">Home</FooterNavLink>
        <FooterNavLink href="/#services">Services</FooterNavLink>
        <FooterNavLink href="/#works">Projects</FooterNavLink>
        <FooterNavLink href="/#contact">Contact</FooterNavLink>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase">My bio</h3>
        <FooterNavLink href="https://github.com/Cyndie-Lauper">Github</FooterNavLink>
        <FooterNavLink href="mailto:diLauper0@gmail.com">Gmail</FooterNavLink>
        <FooterNavLink href="https://twitter.com/iuyj1223">Twitter</FooterNavLink>
        <FooterNavLink href="https://www.facebook.com/no.iloveher/">Facebook</FooterNavLink>
      </div>
    </div>
  );
};
