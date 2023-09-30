import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://getform.io/f/347182c6-ae40-488d-990a-dc645f4023f2", {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/347182c6-ae40-488d-990a-dc645f4023f2"
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={handleFormSubmit}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-700 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            jekaterina.zielinska@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          autoComplete="off"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-700 hover:border-pink-700 px-4 py-3 my-8 mx-auto flex items-center">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
