import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import axios from "axios"

interface FormData {
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
}

const ContactUs = () => {

    const spreadsheetId = '12LLCf-BglolGl80vDFobwMBgrVt0OMhnej99IgL71Y4';
    const range = 'Sheet1!A1:E1';
    const accessToken = 'ya29.a0AfB_byDTAnkV4l7PmrqO6WpdBehw51dH_kTFJCYaVVJWBttYM_OFaNQVhx7O-0U0CyolFG_5yfrdWSCbN06sqVaTdrgKtu4-qKYfT2AbeQqsHGEHsngC5Vdq-N5fVbwpgP8TewR2Siq-nddqmtZPT7xwnKUwknU8_hGgaCgYKAWkSARMSFQHGX2MilzXXkcUz-k-_SP-wOssuwQ0171';

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            values: [
                ['Name', 'Email', 'Phone', 'Subject', 'Message'],
                [formData.name, formData.email, formData.phone, formData.subject, formData.message]
            ]
        };

        axios.post(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => {
                console.log('Data posted successfully:', response.data);
            })
            .catch(error => {
                console.error('Error posting data:', error.response.data);
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
            <form className="flex flex-col gap-5 md:w-1/2 p-5 w-full" onSubmit={handleSubmit} >
                <input type="text" value={formData.name} onChange={handleChange} required placeholder="Your Name" name="name" className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <input type="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" name="email" className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <input type="text" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" name="phone" className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <input type="text" value={formData.subject} onChange={handleChange} required placeholder="Subject" name="subject" className="focus:border-blue-500 outline-none border-2 border-slate-300 h-16 indent-5 placeholder:text-lg contact-input-container rounded-lg" />
                <textarea name="message" value={formData.message} onChange={handleChange} required id="" placeholder="Your Message" className="focus:border-blue-500 resize-none h-52 contact-input-container rounded-lg indent-5 placeholder:text-lg outline-none border-2 border-slate-300"></textarea>
                <div className="">
                    <button type="submit" className=" text-lg h-16 w-40 rounded-lg contact-button duration-300">
                        Submit Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs