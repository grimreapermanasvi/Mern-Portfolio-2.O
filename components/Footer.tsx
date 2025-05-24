const Footer = async () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${'manasvisrivastava26@gmail.com'}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {'manasvisrivastava26@gmail.com'}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
