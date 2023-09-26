import Input from "../common/input"

const CTA = () => {
    return <div className="flex flex-col sm:flex-row justify-between w-full px-6 sm:pl-52 sm:pr-0 py-20">
        <div className=" w-full sm:w-1/3 ">
            <p className="text-white text-5xl font-semibold mb-20">
            Get a Free Keystroke Quote Now
            </p>
            <form className="flex flex-col gap-8">
                <Input wrapperProps={{

                }} inputProps={{
                    type:"text",
                    placeholder: "Name"
                }} />
                <Input inputProps={{
                    type:"email",
                    placeholder: "Email"
                }} />
                <Input inputProps={{
                    type:"text",
                    placeholder: "Phone"
                }} />
                <Input inputProps={{
                    type:"submit",
                    className: "w-1/3 text-slate-700 font-bold"
                }} />
            </form>
        </div>
        <div className="mt-20 sm:mt-0 bg-center bg-cover flex items-center w-full sm:w-1/2 bg-[url(/static/images/landing/cta-max.png)]">
            <img className="w-1/2 my-auto ml-[-80px]" src="/static/images/landing/cta-min.png"/>
        </div>
    </div>
}

export default CTA;