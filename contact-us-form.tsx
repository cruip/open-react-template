//contact-us-form
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormInputs) => {
        console.log(data);
        // try {
        //     await resend.sendEmail({
        //         to: "saad@luminate.com",
        //         subject: "New Contact Form Submission",
        //         html: (
        //             <Email>
        //                 <h1>Contact Form Submission</h1>
        //                 <p><strong>Name:</strong> {data.name}</p>
        //                 <p><strong>Email:</strong> {data.email}</p>
        //                 <p><strong>Message:</strong> {data.message}</p>
        //             </Email>
        //         ),
        //     });
        //     alert("Message sent successfully!");
        // } catch (error) {
        //     console.error("Error sending email:", error);
        //     alert("Failed to send message. Please try again later.");
        // }
    };

    return (

        <div className="flex flex-col md:flex-row justify-between p-6 text-white">

            <div className="md:w-1/2 mb-6 flex flex-col items-center">

                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-4xl font-medium text-transparent md:text-5xl text-center">

                    <span className="block">Let&apos;s</span>

                    <span className="block">Connect</span>

                </h2>

                <div className="flex flex-col mt-4 content-center">

                    <div className="flex items-center">

                        <img src="/images/logos/dify.png" alt="Email" className="mr-2" />

                        <span>marketing@luminate.com</span>

                    </div>

                    <div className="flex items-center">

                        <img src="/images/icons/Android-Phone-1.svg" alt="Phone" className="mr-2" />

                        <span>+92 3361000001</span>

                    </div>

                    <div className="flex items-center">

                        <img src="/images/icons/green.svg" alt="Location" className="mr-2" />

                        <span>Islamabad, Pakistan</span>

                    </div>

                </div>

            </div>

            <div className="md:w-1/2">

                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-3xl font-medium text-transparent md:text-3.5xl">

                    Let&apos;s Collaborate to Create Something Extraordinary

                </h2>

                <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{marginBottom: '15px'}}>
                        <label style={{color: 'white', marginBottom: '5px'}}>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name")}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: 'transparent',
                                color: 'white',
                                boxShadow: '0 -3px 5px rgba(0, 162, 112, 0.5), 0 3px 5px rgba(0, 162, 112, 0.5)',
                            }}
                        />
                        {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
                    </div>

                    <div style={{marginBottom: '15px'}}>
                        <label style={{color: 'white', marginBottom: '5px'}}>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: 'transparent',
                                color: 'white',
                                boxShadow: '0 -3px 5px rgba(0, 162, 112, 0.5), 0 3px 5px rgba(0, 162, 112, 0.5)',
                            }}
                        />
                        {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
                    </div>

                    <div style={{marginBottom: '15px'}}>
                        <label style={{color: 'white', marginBottom: '5px'}}>Message</label>
                        <textarea
                            placeholder="Message"
                            {...register("message")}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: 'transparent',
                                color: 'white',
                                boxShadow: '0 -3px 5px rgba(0, 162, 112, 0.5), 0 3px 5px rgba(0, 162, 112, 0.5)',
                            }}
                        />
                        {errors.message && <p style={{color: 'red'}}>{errors.message.message}</p>}
                    </div>



                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center font-raleway mt-8">

                    <div data-aos="fade-up" data-aos-delay={400}>

                        <button type="submit"
                                className="btn group mb-4 w-auto bg-gradient-to-t from-forest-600 to-forest-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 rounded-full px-16">

                                <span className="relative inline-flex items-center">

                                    Send Message

                                    <span
                                        className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">

                                        -&gt;

                                    </span>

                                </span>

                        </button>

                    </div>

                </div>

            </form>

        </div>

</div>

)
    ;

}