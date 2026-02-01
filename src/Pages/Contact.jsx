import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

import * as Yup from "yup";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mt-4 mb-2">
        <Header />
      </div>

      <main>
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
            className="flex h-12 w-72 items-center justify-center rounded-3xl border border-[#6D6D6D] shadow-lg transition hover:scale-103 active:scale-100"
          >
            <FaEnvelope size={30} />
            <span className="ml-3" href="">
              jaafar.devnet@gmail.com
            </span>
          </a>
          <a
            href=""
            className="flex h-12 w-72 items-center justify-center rounded-3xl border border-[#6D6D6D] shadow-lg transition hover:scale-103 active:scale-100"
          >
            <FaPhoneAlt size={30} />
            <span className="ml-3" href="">
              +212 6 19 63 53 36
            </span>
          </a>
          <a
            href=""
            className="flex h-12 w-72 items-center justify-center rounded-3xl border border-[#6D6D6D] shadow-lg transition hover:scale-103 active:scale-100"
          >
            <FaLinkedin size={30} />
            <span className="ml-3" href="">
              Jaafar Bendahou
            </span>
          </a>
        </div>

        <div className="mx-auto max-w-xl px-6 py-20 text-center">
          {/* Form */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().min(2, "Trop court").required("Champ requis"),
              email: Yup.string()
                .email("Adresse email invalide")
                .required("Champ requis"),
              message: Yup.string()
                .min(20, "Le message est trop court")
                .required("Champ requis"),
            })}
            onSubmit={async (values, { resetForm }) => {
              try {
                console.log("Message envoyé :", values);
                alert(
                  "Merci pour votre message, je vous répondrai rapidement.",
                );
                resetForm();
              } catch (error) {
                console.error("Erreur lors de l’envoi", error);
              }
            }}
          >
            <Form className="mt-12 flex flex-col gap-8 text-left">
              {/* Name */}
              <div>
                <Field
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-lg focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Email */}
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-lg focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Message */}
              <div>
                <Field
                  as="textarea"
                  name="message"
                  rows="5"
                  placeholder="Votre message"
                  className="w-full resize-none border-b border-gray-300 bg-transparent py-3 text-lg focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mx-auto mt-10 rounded-full bg-blue-600 px-10 py-3 text-white transition hover:bg-blue-700 active:scale-95"
              >
                Envoyer le message
              </button>
            </Form>
          </Formik>
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
