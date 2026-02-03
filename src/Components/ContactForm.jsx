import emailjs from "@emailjs/browser";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  //function pour envoyer données formulaire à emailJs
  const sendEmail = (data) => {
    //we pass to the "data" parameter, the values of the Form captured by Formik thanks to the "values" property in onSubmit
    return emailjs.send(
      //respecter cet ordre: 1)service_id 2) template_id 3) values du formulaire 4) publicKey
      "", // service_id => A trouver dans Section Email services
      "", // template_id => A trouver dans section Email templates => Settings
      data, //values of the Form
      "", // publicKey: A trouver dans account => API Keys
    );
  };

  return (
    <div>
      <div className="mx-auto mb-4 pt-5 pb-8">
        <div className="prose mx-auto mb-10">
          <h1 className="montserrat-medium text-2xl text-gray-800">
            Envoyez un mail via ce formulaire
          </h1>
        </div>

        <Formik
          initialValues={{
            name: "",
            societe: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(30, "Doit comporter 30 caractères maximum")
              .required("Requis"),
            societe: Yup.string().max(
              50,
              "Doit comporter 50 caractères maximum",
            ),
            email: Yup.string()
              .email("Adresse email invalide")
              .required("Requis"),
            message: Yup.string()
              .min(30, "Doit comporter 30 caractères minimum")
              .required("Requis"),
          })}
          onSubmit={async (values, { resetForm }) => {
            // En 1er: le paramètre "values" capture les valeurs écrites dans le formulaire, donc même si on reset le form avant envoie, values stockera toujours les valeurs
            alert("Formulaire envoyé:\nJe vous répondrais dès que possible");
            console.log("Form submitted with values: ", values); //Permet de voir dans la console ce qui a été rempli dans le formulaire après avoir cliquer sur envoyer
            resetForm(); //Reset l'affichage des valeurs sur la page, mais values store toujours les valeurs écrites dans le formulaire

            try {
              const result = await sendEmail(values); //Appel de la function sendEmail avec pour argument 'values' => valeurs du formulaire capturés par Formik
              console.log("Email sent successfully", result);
            } catch (error) {
              console.error("Error sending Email:", error);
            }
          }}
        >
          <Form>
            <div className="">
              <div className="mb-10">
                <label htmlFor="name" className="montserrat-strong text-lg">
                  Nom
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="montserrat-regular mx-auto block w-150 border-b  px-3 py-2 text-left leading-tight focus:border-blue-500 focus:outline-none"
                />
                {/* ErrorMessage est ce qui permet de voir "Requis", si on appuie sur le champ mais qu'on ne le remplit pas et qu'on passe à un autre champ */}
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error text-sm text-red-500"
                />
              </div>

              <div className="mb-10">
                <label htmlFor="societe" className="montserrat-strong text-lg">
                  Société
                </label>
                <Field
                  id="societe"
                  name="societe"
                  type="text"
                  placeholder="Company"
                  className="montserrat-regular mx-auto block w-150 border-b px-3 py-2 text-left leading-tight focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="mb-10">
                <label
                  htmlFor="email"
                  className="montserrat-strong text-lg max-lg:text-xl"
                >
                  E-mail
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  className="montserrat-regular mx-auto block w-150 border-b px-3 py-2 text-left leading-tight focus:border-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error text-sm text-red-500"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="montserrat-strong text-lg max-lg:text-xl"
                >
                  Message
                </label>
                <Field
                  id="message"
                  name="message"
                  as="textarea"
                  placeholder="Message"
                  rows="10"
                  className="pl-3 pt-1 montserrat-regular mx-auto block w-150 rounded border leading-tight focus:border-blue-500 focus:outline-none max-lg:w-72"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error text-sm text-red-500"
                />
              </div>
            </div>
            <button
              type="submit" //Dans un Formulaire Formik, lorsqu'on clique sur un bouton de type="submit", il appelle automatiquement la fonction onSubmit définie dans le composant Formik
              className="mt-5 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:ring-blue-500 focus:outline-none"
            >
              Envoyer
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
