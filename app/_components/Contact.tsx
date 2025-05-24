'use client';
const Contact = () => {
    return (
        <section id="contact" className=" text-white py-20">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-[#00ff00]">Contact</span> Me
                </h2>
                <p className="text-gray-400 mb-12">
                    Got a project in mind or just want to say hi? Drop a message
                    below!
                </p>

                <form className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 bg-black border border-[#00ff00] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 bg-black border border-[#00ff00] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full p-4 bg-black border border-[#00ff00] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#00ff00] text-black px-6 py-3 rounded-md font-bold hover:bg-white hover:text-black transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
