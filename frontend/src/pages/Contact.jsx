import React, { useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import { Alert } from "../components";
import StarsCanvas from "../components/Stars";
import EarthCanvas from "../models/Earth";
import Footer from "../components/Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    return form.name && form.email && form.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showAlert({
        show: true,
        text: "All fields are required!",
        type: "danger",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });

        setTimeout(() => {
          hideAlert(false);
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      showAlert({
        show: true,
        text: "There was an error sending your message 😢",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-0">
      <StarsCanvas />
      <section className="max-container">
        {alert.show && <Alert {...alert} />}
        <div className="flex flex-col justify-center lg:border-white lg:border lg:rounded-xl lg:flex-row lg:py-10">
          <div className="flex flex-col lg:min-w-[40%] lg:pl-10">
            <h1 className="text-5xl">
              <span className="font-bold orange-gradient-text font-semibold">
                Contact
              </span>
            </h1>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-6 mt-14"
            >
              <label className="text-white-100 text-2xl">
                Name
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Adil Ahmad"
                  required
                  value={form.name}
                  onChange={handleChange}
                  aria-label="Name"
                />
              </label>
              <label className="text-white-100 text-2xl">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  className="input"
                  placeholder="adil@gmail.com"
                  required
                  aria-label="Email"
                />
              </label>
              <label className="text-white-100 text-2xl">
                Your Message
                <textarea
                  name="message"
                  rows="4"
                  className="textarea"
                  placeholder="Write your thoughts here..."
                  value={form.message}
                  onChange={handleChange}
                  aria-label="Your Message"
                />
              </label>
              <button type="submit" disabled={loading} className="btn">
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
          <div className="hidden lg:flex lg:min-w-[60%] lg:h-[75vh] lg:object-cover lg:m-auto">
            <EarthCanvas />
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
