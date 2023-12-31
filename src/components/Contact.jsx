import React from "react";
import Title from './Title';

function Contact() {
  const contactStyles = {
    backgroundColor: 'lightgoldenrodyellow', 
    padding: '20px', 
    borderRadius: '0.5rem', 
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
  };

  return (
    <div style={contactStyles} className="flex flex-col mb-10 mx-auto mt-8">
      <div className="flex justify-center items-center">
        <form 
          action="https://getform.io/f/dc64be51-6cf8-406c-bd3e-aec166c65351"
          method="POST"
          className="flex flex-col w-full md:w-7/12">
            <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />    
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />    
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-yellow-500 drop-shadow-md"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
