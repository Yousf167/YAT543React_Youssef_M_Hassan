import { useEffect, useRef } from "react";

function Contact() {
  const email = useRef("")
  const message = useRef("")

  // {current : "value"}
  // email {current : input:email}
  // emai.current

  useEffect(() => {
    //console.log(email.current.value)
    email.current.focus();
    // email.current.style.color = "blue";
  }, [])

  return (
    <>
      <h1 className="text-center my-5 w-50 container
           text-white py-3 rounded bg-dark">Contact Us</h1>
      <section className="my-5 w-50 container mx-auto">
        <form action="">
          <div className="form-group my-2">
            <label htmlFor="email" className="fw-bold">Email Address</label>
            <input type="email" id="email" name="email"
              className="form-control" ref={email}
              onChange={(e) => email.current = e.target.value}
              value={email.current}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="message" className="fw-bold">Message</label>
            <textarea id="message" name="message"
              className="form-control" ref={message} />
          </div>
          <input type="submit" value="Send Message" className="btn btn-dark mt-2" />
        </form>
      </section>
    </>
  );
}

export default Contact;