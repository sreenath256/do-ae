"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Globe } from "../../components";

const Contact = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [phn, setPhn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_inkkj5n";
    const templateId = "template_jgdcpd8";
    const publicKey = "kj60QfQm-VcE4717P";

    // Create a new object that contains dynamic template params
    const templateParams = {
      msg_name: name,
      msg_phn_code: value,
      msg_phn: phn,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.dark("Message sent successfully", response);
        setName("");
        setValue("");
        setPhn("");
      })
      .catch((error) => {
        toast.error("Error sending email", error);
      });
  };

  return (
    <>
      <div className="w-11/12 xl:w-10/12 mx-auto pt-10 xl:pt-20 xl:pb-10 grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden">
        <div className="h-full  flex flex-col gap-5 justify-center">
          <h1 className="text-4xl xl:text-7xl font-medium">READY TO WORK WITH US?</h1>
          <form
            onSubmit={handleSubmit}
            className="xl:w-[80%] flex flex-col border border-gray-600 rounded-4xl p-5 py-10"
          >
            <div className="mb-5 flex flex-col gap-5 w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 pl-0 border-b border-gray-600  bg-transparent placeholder:text-gray-600 outline-none"
                name="msg_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="w-full flex p-2 pl-0 bg-transparent border-b border-gray-600 ">
                <PhoneInput
                  required
                  className="phonecode w-24 outline-none !bg-transparent"
                  international
                  name="msg_phn_code"
                  defaultCountry="IN"
                  value={value}
                  onChange={setValue}
                />
                <input
                  className="w-full bg-transparent outline-none placeholder:text-gray-600"
                  type="number"
                  inputMode="numeric"
                  placeholder="Mobile"
                  name="msg_phn"
                  value={phn}
                  onChange={(e) => setPhn(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="!bg-[#AEFE00] mt-3 w-fit text-black text-xs px-5 py-2 rounded-full cursor-pointer "
            >
              Get Started
            </button>
          </form>
        </div>
        {/* globe */}
        <div className="">
          <Globe/>
        </div>
      </div>
    </>
  );
};

export default Contact;
