export default function Tailwind(){
    return(
        <div className="flex-wrap flex rounded-lg border-2 mx-56">
            <div className="bg-linear-to-t from-sky-500 to-indigo-500 text-white h-22 w-full text-center text-2xl font-bold flex items-center justify-center mb-6 rounded-t">News you can Trust.</div>
            <div className="text-center justify-center h-60 w-full gap-5">
                <h3 className="text-lg font-semibold">Stay up to date with the Latest!</h3>
                <p>Subscribe to our newsLetter for the latest news straight into your inbox.</p>
                <form className="flex-wrap flex">
                    <input className="w-full mx-52 bg-slate-200 placeholder:text-sm text-center my-4 p-2 rounded" type="text" placeholder="your@email.com" />
                    <button className="w-full mx-52 bg-purple-500 text-white p-2 rounded-full cursor-pointer" type="submit">Subscribe Now</button>
                </form>
                <p className="my-5 text-sm">We value your privacy.</p>
            </div>
        </div>
    );
}