import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* React19 native metadata tags */}

      {/* Page title (50–60 characters ideal) */}
      <title>Contact | Jaafar Bendahou</title>

      {/* Meta description (150–160 characters) */}
      <meta
        name="description"
        content="Un projet web ou une collaboration ? Contactez Jaafar Bendahou, développeur Full-Stack spécialisé en React et Node.js."
      />

      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jaafarbendahou.com/contact" />
      <meta property="og:title" content="Contact | Jaafar Bendahou" />
      <meta
        property="og:description"
        content="Un projet web ou une collaboration ? Contactez Jaafar Bendahou, développeur Full-Stack spécialisé en React et Node.js."
      />

      <meta
        property="og:image"
        content="https://jaafarbendahou.com/logo-JB-onglet.png"
      />

      {/* Canonical URL to avoid duplicate content */}
      <link rel="canonical" href="https://jaafarbendahou.com/contact" />

      <div className="flex min-h-screen flex-col">
        <div className="mt-5 mb-3">
          <Header />
        </div>

        <main className="overflow-hidden bg-gray-100">
          <div className="mt-5 text-center">
            <h1 className="martian-mono text-3xl text-[#214b9b]">Contact</h1>

            <p className="montserrat-regular mt-2 text-lg text-gray-500 max-lg:mx-6">
              Pour toute collaboration, n'hésitez pas à me contacter.
            </p>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1F2A44]" />
          </div>

          {/* Mail, telephone et Linkedin */}
          <div className="montserrat-regular mx-auto mt-16 flex w-250 items-center justify-around max-lg:mt-12 max-lg:h-52 max-lg:w-auto max-lg:flex-col max-lg:justify-start max-lg:gap-7">
            <a
              href="mailto:jaafar.devnet@gmail.com"
              aria-label="Send me an email"
              className="flex h-12 w-72 items-center justify-center rounded-3xl border border-[#6D6D6D] bg-white shadow-lg transition hover:scale-103 hover:shadow-[0px_1px_8px_rgba(0,106,202,1)] active:scale-100"
              data-aos="fade-right"
            >
              <FaEnvelope size={30} />
              <span className="ml-3">jaafar.devnet@gmail.com</span>
            </a>
            <a
              href="tel:+212619635336"
              className="flex h-12 w-72 items-center justify-center rounded-3xl border border-[#6D6D6D] bg-white shadow-lg transition hover:scale-103 hover:shadow-[0px_1px_8px_rgba(0,106,202,1)] active:scale-100"
              data-aos="flip-up"
            >
              <FaPhoneAlt size={30} />
              <span className="ml-3">+212 6 19 63 53 36</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jaafar-bendahou-b1b884289/"
              target="_blank"
              rel="noopener"
              className="flex h-12 w-72 items-center justify-center rounded-3xl border border-[#6D6D6D] bg-white shadow-lg transition hover:scale-103 hover:shadow-[0px_1px_8px_rgba(0,106,202,1)] active:scale-100"
              data-aos="fade-left"
            >
              <FaLinkedin size={30} />
              <span className="ml-3">Jaafar Bendahou</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="mt-10 text-center max-lg:mt-8">
            <ContactForm />
          </div>
        </main>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
