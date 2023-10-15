import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";

import { Button, Input, Textarea } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { AlertCustomStyles } from "../components/Alertcustom";


const Contact = () => {
  //kiri getter
  //kanan setter

  const [stateAlert,setstateAlert] = useState(false);

  const notif = () => {
    setstateAlert(true);
    setTimeout(()=>{
    setstateAlert((q)=>!q);
    },2000)
  }

  

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dhm1h8u",
        "template_537x4tg",
        form.current,
        "HVTXybqOWoCIBjTkB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
          notif();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className=" bg-slate-600 pt-[60px] pb-[10px]"
      >
        <h1 className="flex justify-center drop-shadow-lg ">My Contact</h1>
        <div className="flex justify-center mt-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form bg-[#f0f0f0] my-10 p-10 rounded-2xl drop-shadow-lg"
          >
            <div className="flex hp:flex-col tablet:flex-row laptop:flex-row gap-3">
              <Input color="indigo" label="Your name" name="user_name" />
              <Input colot="indigo" label="Your email" name="email_name" />
            </div>
            <div>
              <div className="mt-3">
                <Textarea color="indigo" label="Your Message" name="message" />
              </div>
              <div className="mt-3 flex justify-center mb-4">
                <Button type="submit" value="Send">
                  Send Message
                </Button>
              </div>
            </div>
          </form>
          {stateAlert?<AlertCustomStyles/>:""} 


        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
