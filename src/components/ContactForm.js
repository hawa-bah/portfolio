import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="ContactForm-Div">
        <div></div>

        <div className="form">
          <form>
            <input type="text" name="name" id="name" required />
            <input type="email" name="email" id="email" required />
            <input type="text" name="message" id="message" required />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
