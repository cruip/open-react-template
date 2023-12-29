"use client"

import React from 'react';

// style
import "./connectFormStyle.css"
import axios from "axios";
import toast from "react-hot-toast";


function ConnectForm() {
    const [formData, setFormData] = React.useState({
        name: undefined,
        phone: undefined,
        email: undefined
    })

    // axios
    const TOKEN = "6202126448:AAHJZwM_-SADjEKbRLR9Yux7lTJxD9y6qQk";
    const CHAT_ID = "-1001973814983";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    // handle submit
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        let message = `<b>Sayt orqali yangi xabar aniqlandi: </b>\n`;

        if (formData?.name !== undefined && formData?.phone !== undefined) {
            message += `<b>Ism:</b> ${formData?.name}\n`;
            message += `<b>Telefon raqam:</b> ${formData?.phone}\n`;
            message += `<b>Email:</b> ${formData?.email}\n`;
            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            }).then(res => {
                console.log(res.data.ok)
                if (res.data.ok === true) {
                    toast.success("Sizning malumotingiz muvaffaqiyatli jo'natildi!!!")
                    setFormData({
                        name: undefined,
                        phone: undefined,
                        email: undefined
                    });
                }
            })
        } else {
            toast.error("Barcha maydonlar to'ldirilishi shart!")
        }
    }

    const handleChange = (event: {
        target: any;
        preventDefault: () => void;
    }) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((prevState) => ({...prevState, [name]: value}));
    };
    console.log(formData)
    // @ts-ignore
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Hisoblab berish xizmati mutlaqo bepul</h2>
                        <p className="text-xl text-gray-400">Hoziroq qo'ng'iroq qiling yoki murojaat qoldiring !</p>
                        <form className="connectForm" onSubmit={handleSubmit}>
                            <input type="text" name="name" id="name" className="formInput" placeholder="Ism"
                                   value={formData?.name || ""} onChange={handleChange}
                            />
                            <input type="number" name="phone" id="phone" className="formInput"
                                   placeholder="Telefon raqam" value={formData?.phone || ""} onChange={handleChange}/>
                            <input type="text" name="email" id="email" className="formInput" placeholder="Email"
                                   value={formData?.email || ""} onChange={handleChange}
                            />
                            <button className="formBtn" type="submit">Yuborish</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConnectForm;