import React from "react";

export default function ContactMe() {
  return (
    <section id="contact">
      <h2 className="text-5xl text-white mb-16 items-center pl-4">Contact Me</h2>
      <form className="border-white border-1  flex flex-col pt-2.5 pr-3.5 rounded-xl ml-2.5 mr-2.5">
        <label className=" ml-3.5 text-white">
          Name:
          <input type="text" name="name" placeholder="USer" className="border-white border-1 m-3.5 bg-white"/>
        </label>
        <label className="ml-3.5 text-white">
          Email:
          <input type="email" name="email" placeholder="abc@example.com" className="border-white border-1 m-3.5 bg-white" />
        </label >
        <label className="flex flex-cols items-center ml-3.5 text-white">
          Message:
          <textarea name="Message" placeholder="All type of queries will be entertained" className="border-white border-1 m-3.5 bg-white ">Message</textarea>
        </label>
        <button type="submit" className=" ml-[48%] mb-4 w-15 bg-white   hover:bg-slate-300 text-black scale-105 transition-all ease-in-out duration-300 " onClick={fetch("google.com")}>Send</button>
      </form>
    </section>
  );
}
