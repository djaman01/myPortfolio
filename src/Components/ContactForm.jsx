import emailjs from "@emailjs/browser";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { Slide, ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  //function pour envoyer données formulaire à emailJs
  const sendEmail = (data) => {
    //we pass to the "data" parameter, the values of the Form captured by Formik thanks to the "values" property in onSubmit
    return emailjs.send(
      //respecter cet ordre: 1)service_id 2) template_id 3) values du formulaire 4) publicKey
      "service_6q845o8", // service_id => A trouver dans Section Email services
      "template_3j9k4ij", // template_id => A trouver dans section Email templates => Settings
      data, //values of the Form
      "xpGhdD-cL62xdUk91", // publicKey: A trouver dans account => API Keys
    );
  };

  const notifySuccess = () =>
    toast.success(
      <div className="flex flex-col items-start">
        <p>Formulaires envoyés !</p>
        <p>Je vous répondrais dès que possible</p>
      </div>,
    );

  const notifyError = () =>
    toast.error(
      <div className="flex flex-col items-start">
        <p>Le message n'a pas pu être envoyé</p>
        <p>
          Veuillez vérifier votre connexion ou réessayer dans quelques instants
        </p>
      </div>,
    );

  return (
    <div>
      {/* On met les property dans ToastContainer, pour pouvoir le réutiliser facilement si besoin dans un autre toast.error par exemple dans le même component, sans devoir tout réecrire */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={false}
        progress={undefined}
        theme="colored"
        transition={Slide}
      />

      <div className="mx-auto mb-28 pt-5">
        <div className="prose mx-auto mb-10">
          <h1 className="montserrat-medium text-2xl text-gray-800">
            Envoyez-moi un mail via ce formulaire
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
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            // (state interne de formik: const [isSubmitting, setSubmitting] = useState(false);) devient true automatquement quand on clique sur "envoyer"
            try {
              const result = await sendEmail(values); //Appel de la function sendEmail avec pour argument 'values' => valeurs du formulaire capturés par Formik
              console.log("Email sent successfully", result);

              notifySuccess(); //Lors de l'envoie du formulaire Formik rend setSubmitting = true automatiquement donc isSubmitting = true, donc le bouton envoyer est disabled
              resetForm();
            } catch (error) {
              console.error("Error sending Email:", error);
              notifyError();
            } finally {
              setSubmitting(false); //isSubmitting redevient false et bouton "envoyer" redevient cliquable
            }
          }}
        >
          {/* {{isSubmitting}=> () is what enables us to use the Formik state isSubmitting on the JSX => <button disabled={isSubmitting}>} */}
          {({ isSubmitting }) => (
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
                    className="montserrat-regular mx-auto block w-150 border-b px-3 py-2 text-left leading-tight focus:border-blue-500 focus:outline-none max-md:w-120 max-sm:w-80"
                  />
                  {/* ErrorMessage est ce qui permet de voir "Requis", si on appuie sur le champ mais qu'on ne le remplit pas et qu'on passe à un autre champ */}
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error text-sm text-red-500"
                  />
                </div>

                <div className="mb-10">
                  <label
                    htmlFor="societe"
                    className="montserrat-strong text-lg"
                  >
                    Société
                  </label>
                  <Field
                    id="societe"
                    name="societe"
                    type="text"
                    placeholder="Company"
                    className="montserrat-regular mx-auto block w-150 border-b px-3 py-2 text-left leading-tight focus:border-blue-500 focus:outline-none max-md:w-120 max-sm:w-80"
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
                    className="montserrat-regular mx-auto block w-150 border-b px-3 py-2 text-left leading-tight focus:border-blue-500 focus:outline-none max-md:w-120 max-sm:w-80"
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
                    className="montserrat-regular mx-auto block w-150 rounded border pt-1 pl-3 leading-tight focus:border-blue-500 focus:outline-none max-md:w-120 max-sm:w-80"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error text-sm text-red-500"
                  />
                </div>
              </div>
              <button
                type="submit" //Appelle automatiquement la fonction onSubmit définie dans le composant Formik et rend isSubmitting = true
                disabled={isSubmitting} //If isSubmitting = true, the button "envoyer" is disabled (Donc lors de l'envoie du formulaire, car setSubmitting(true) automatiquement quand on appuie sur "envoyer")
                className="mt-5 cursor-pointer rounded bg-blue-600 px-4 py-2 font-bold text-white transition hover:scale-105 hover:bg-blue-700 focus:ring-blue-500 focus:outline-none active:scale-100 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? "Envoie..." : "Envoyer"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
