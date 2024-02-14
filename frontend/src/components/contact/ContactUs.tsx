import $ from 'jquery';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";

const ContactUs = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                // setResult(data);
                // alert("Thank you for contacting us, we will get back to you soon!");
                alert(data)
            },
        });
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
            <form className="flex flex-col gap-5 md:w-1/2 p-5 w-full" method="post" action="send_mail.php" onSubmit={(event) => handleSubmit(event)}>
                <input type="text" placeholder="Your Name" name="name" className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <input type="text" placeholder="Email Address" name="email" className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <input type="text" placeholder="Phone Number" name="phone" className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <input type="text" placeholder="Subject" name="subject" className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <textarea name="message" id="" placeholder="Your Message" className="focus:border-blue-500 resize-none h-52 contact-input-container rounded-lg indent-5 placeholder:text-lg outline-none border-2 border-slate-300">

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