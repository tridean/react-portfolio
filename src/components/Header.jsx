import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Tristan Carl</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Full Stack Web Developer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">I am a passionate junior full-stack developer aiming to
      break into the industry. I love building all of my projects from the ground up, and using
      the newest technologies to make my workflow more efficient so that I can realise as
      many of my ideas as possible.
      <br />
      <br />
      You can check out all of my current projects at my{' '} 
      <a 
      href="https://github.com/tridean"
      target="_blank"
      className="text-cyan-600 hover:underline
      underline-offset-2 decoration-2 decoration-red-600"
      rel="noreferrer noopener">GitHub.</a>
      </p>
    </div>
  );
}

export default Header;
