import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mt-4 mb-2">
        <Header />
      </div>

      <main className="bg-gray-200">
        <div className="mt-5 text-center">
          <h1 className="martian-mono text-3xl text-[#214b9b]">Contact</h1>

          <p className="montserrat-regular mt-2 text-lg text-gray-500">
            Un projet, une idée ou simplement une question ? N'hésitez pas à me
            laisser un message.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1F2A44]" />
        </div>

        {/* Mail, telephone et Linkedin */}
        <div className="montserrat-regular mx-auto mt-10 flex h-20 w-250 items-center justify-around">
          <a
            href=""
            className="flex h-12 w-72 items-center justify-center rounded-3xl border border-[#6D6D6D] bg-white shadow-lg transition hover:scale-103 active:scale-100"
          >
            <FaEnvelope size={30} />
            <span className="ml-3" href="">
              jaafar.devnet@gmail.com
            </span>
          </a>
          <a
            href=""
            className="flex h-12 w-72 items-center justify-center rounded-3xl border border-[#6D6D6D] bg-white shadow-lg transition hover:scale-103 active:scale-100"
          >
            <FaPhoneAlt size={30} />
            <span className="ml-3" href="">
              +212 6 19 63 53 36
            </span>
          </a>
          <a
            href=""
            className="flex h-12 w-72 items-center justify-center rounded-3xl border border-[#6D6D6D] bg-white shadow-lg transition hover:scale-103 active:scale-100"
          >
            <FaLinkedin size={30} />
            <span className="ml-3" href="">
              Jaafar Bendahou
            </span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="pb-10 text-center mt-10">
          <ContactForm />
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
