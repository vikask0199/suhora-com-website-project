// import $ from 'jquery';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";

import { useState } from "react";
// import { event } from "jquery";
import axios from "axios";

const ContactUs = () => {
    // const [formdata, setFormData]=useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
    };
 
    const handleSubmit = (e: React.FormEvent) => {
        
        e.preventDefault();

        axios.post('https://test.suhora.com/send/', {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
    
          },{
            headers: {
                'Content-Type': 'application/json'
              }
          }
          )
        .then((response) => {
            console.log("res" + response.data.errors);
            if (response.data.status === 'success') {
                resetForm();
                alert("Your message was sent successfully. Someone will get back to you!");
                
            } else if (response.data.status == 'error' ) {
                resetForm();
                alert("Message failed to send.");
            }
        })
        .catch((error) => {
            resetForm();
            console.log("error" + error.message);
            //window.alert(error);
        });
            // console.log(Form)
    };



    return (
        <div className="flex flex-col gap-5 root-container-separator items-center py-5">
            <p className="font-semibold text-4xl">Contact Form</p>
            <div className="flex w-full justify-evenly flex-wrap gap-y-5 px-5">
                <div className="p-8 md:w-80 w-full gap-6 flex flex-col rounded-lg cards hover:transform hover:scale-105 duration-300">
                    <SlEarphones className="text-4xl text-blue-500" />
                    <p className="font-bold text-xl">Contact Phone Number</p>
                    <div className="flex gap-2 flex-col">
                        <p>
                            +91 9999664437
                        </p>
                    </div>
                </div>
                <div className="p-8 md:w-80 w-full gap-6 flex flex-col rounded-lg cards hover:transform hover:scale-105 duration-300">
                    <MdOutlineEmail className="text-4xl text-blue-500" />
                    <p className="font-bold text-xl">Our Email Address</p>
                    <div className="flex gap-2 flex-col">
                        <p>
                            <a href="mailto:hello@suhora.com">hello@suhora.com</a>
                        </p>
                    </div>
                </div>
                <div className="p-8 md:w-80 w-full gap-6 flex flex-col rounded-lg cards hover:transform hover:scale-105 duration-300">
                    <IoLocationOutline className="text-4xl text-blue-500" />
                    <p className="font-bold text-xl">Our Location</p>
                    <div className="flex gap-2 flex-col">
                        <p>
                            313, Tower-B, Noida One, Sector-62, Noida,
                            Uttar Pradesh, India
                        </p>
                    </div>
                </div>
            </div>
            <form className="flex flex-col gap-5 md:w-1/2 p-5 w-full" method="post" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <input type="text" placeholder="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <input type="text" placeholder="Phone Number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <input type="text" placeholder="Subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <textarea name="message" id="" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} className="focus:border-blue-500 resize-none h-52 contact-input-container rounded-lg indent-5 placeholder:text-lg outline-none border-2 border-slate-300">

                </textarea>
                <div className="">
                    <button className=" text-lg h-16 w-40 rounded-lg contact-button duration-300">
                        Submit Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs