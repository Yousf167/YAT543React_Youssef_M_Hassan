import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [btnTxt, setBtnTxt] = useState('Send')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnTxt("Sending...")
    emailjs
      .sendForm('service_rhalabw', 'template_jjqe89i', form.current, {
        publicKey: 'Tp4QYrqChr6ZnGwZu',
      })
      .then(
        () => {
          alert("Message Sent Successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
      .finally(() => setBtnTxt("Send"))
  };
  return (
    <>
      <h1 className="text-center my-5 w-50 container
           text-white py-3 rounded bg-dark">Contact Us</h1>
      <section className="my-5 w-50 container mx-auto">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group my-2">
            <label htmlFor="name" className="fw-bold">Name</label>
            <input type="text" id="name"
              name="name"
              className="form-control"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="email" className="fw-bold">Email Address</label>
            <input type="email" id="email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="message" className="fw-bold">Message</label>
            <textarea id="message" name="message"
              className="form-control" />
          </div>
          <input type="submit" value={btnTxt} className="btn btn-dark mt-2" />
        </form>
      </section>
    </>
  );
}

export default Contact;