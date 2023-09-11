import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-10 md:pb-20">
      <h1 className="text-4xl md:text-6xl mb-2 md:mb-4 font-bold text-gray-800">Tristan Carl</h1>
      <p className="text-base md:text-lg mb-4 md:mb-6 font-medium text-gray-600">Full Stack Web Developer</p>
      <p className="text-sm max-w-2xl mb-8 font-normal text-gray-700">
        I am a passionate junior full-stack developer aiming to break into the industry.
        I love building all of my projects from the ground up and using the newest technologies to make my workflow more efficient
        so that I can realize as many of my ideas as possible.
        <br /><br />
        You can check out all of my current projects on my{' '}
        <a 
          href="https://github.com/tridean"
          target="_blank"
          className="text-cyan-600 hover:underline"
          rel="noreferrer noopener"
        >
          GitHub
        </a>.
      </p>
    </div>
  );
}

export default Header;
