import Footer from "../Components/Footer";
import Header from "../Components/Header";

const CV = () => {
  return (
    <>
      <div className="mt-4 mb-2">
        <Header />
      </div>

      <div className="mt-5 mb-10 text-center">
        <h1 className="font-roboto-bold text-3xl tracking-widest text-[#214b9b] uppercase">
          Curriculum vitæ
        </h1>

        <p className="font-roboto mt-2 text-lg text-gray-500">
          Consultez, téléchargez ou imprimez mon CV
        </p>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1F2A44]" />
      </div>

      <iframe
        src="/CV-JaafarBenda.pdf"
        width="100%"
        height="1250px"
        style={{ border: "none" }}
        title="CV"
      ></iframe>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default CV;
