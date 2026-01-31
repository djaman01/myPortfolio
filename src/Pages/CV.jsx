import Footer from "../Components/Footer";
import Header from "../Components/Header";

const CV = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mt-4 mb-2">
        <Header />
      </div>

      <div className="mt-5 mb-10 text-center">
        <h1 className="martian-mono text-3xl text-[#214b9b]">
          Curriculum vitæ
        </h1>

        <p className="montserrat-regular mt-2 text-lg text-gray-500">
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
    </div>
  );
};

export default CV;
