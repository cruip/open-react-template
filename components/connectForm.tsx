import React, {FormEvent} from 'react';

// style
import "./connectFormStyle.css"
import {Box} from "@mui/system";

function ConnectForm() {
    // const [formData, setFormData] = React.useState({})
    // onsubmit
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        console.log(formData)
    }


    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Hisoblab berish xizmati mutlaqo bepul</h2>
                        <p className="text-xl text-gray-400">Hoziroq qo'ng'iroq qiling yoki murojaat qoldiring !</p>
                        <form className="connectForm">
                            <input type="text" name="name" id="name" className="formInput" placeholder="Ism"
                            />
                            <input type="number" name="phone" id="phone" className="formInput"
                                   placeholder="Telefon raqam"/>
                            <input type="text" name="email" id="email" className="formInput" placeholder="Email"
                            />
                            <button className="formBtn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConnectForm;