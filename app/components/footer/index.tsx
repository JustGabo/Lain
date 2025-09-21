import React from 'react'

const Footer = () => {
  return (
    <div 
        className='relative h-[100dvh]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[200dvh] -top-[100vh]'>
            <div className='h-[100dvh] sticky top-[calc(100vh-100dvh)]'>
                <Content />
            </div>
        </div>
    </div>
  )
}

export default Footer;

function Content() {
  return (
    <div className="bg-[#EDEDED] py-8 px-[30px] h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end text-[#00000080] tracking-wide">
      <h1 className="text-[12vw] leading-[0.8] mt-10">Lain Footer</h1>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20 pt-20">
      <div className="flex flex-col gap-2 text-[#00000080] tracking-wide">
        <h3 className="mb-2 uppercase ">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2 text-[#00000080] tracking-wide">
        <h3 className="mb-2 uppercase ">Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
