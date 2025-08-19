import React, { useRef } from "react";
import emailjs from "emailjs-com";
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs.sendForm(
      "service_jlzo4ix",   // replace with your service ID
      "template_rcwqa8f",  // replace with your template ID
      form.current,
      "F7CxIxmfpgoVKuUvQ"    // replace with your public key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset(); // clear form
      },
      (error) => {
        alert("Failed to send message. Try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className="h-screen w-screen bg-black text-white flex">
      {/* Left side heading */}
      <div className="flex-1 flex items-center justify-center px-8">
        <h2 className="text-5xl font-bold tracking-wide">Contact Me<span className="text-blue-500 font-bold">.</span></h2>
      </div>

      {/* Right side form */}
      <div className="flex-1 flex items-center justify-center px-8">
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-md p-8 rounded-lg shadow-lg space-y-6">
          
          <div className="spark-field">
            <input type="text" name="from_name" placeholder="Your Name" className="spark-input" required />
            <span className="underline"></span>
          </div>

          <div className="spark-field">
            <input type="email" name="from_email" placeholder="Your Email" className="spark-input" required />
            <span className="underline"></span>
          </div>

          <div className="spark-field">
            <textarea name="message" placeholder="Your Message" rows="4" className="spark-input" required></textarea>
            <span className="underline"></span>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 font-medium rounded-full text-white hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
