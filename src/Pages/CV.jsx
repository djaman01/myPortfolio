import Footer from "../Components/Footer";
import Header from "../Components/Header";

const CV = () => {
  return (
    <>
      {/* React19 native metadata tags */}

      {/* Page title (50–60 characters ideal) */}
      <title>CV | Jaafar Bendahou</title>

      {/* Meta description (150–160 characters) */}
      <meta
        name="description"
        content="Consultez le CV de Jaafar Bendahou, développeur Full-Stack spécialisé en React et Node.js"
      />

      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jaafarbendahou.com/CV" />
      <meta property="og:title" content="CV | Jaafar Bendahou" />
      <meta
        property="og:description"
        content="Consultez le CV de Jaafar Bendahou, développeur Full-Stack spécialisé en React et Node.js"
      />

      <meta
        property="og:image"
        content="https://jaafarbendahou.com/media-logo-JB.png"
      />
      {/* Canonical URL to avoid duplicate content */}
      <link rel="canonical" href="https://jaafarbendahou.com/CV" />

      <div className="flex min-h-screen flex-col">
        <div className="mt-5 mb-3">
          <Header />
        </div>

        <div className="mt-5 mb-16 text-center max-lg:mb-12">
          <h1 className="martian-mono text-3xl text-[#214b9b]">
            Curriculum vitæ
          </h1>

          <p className="montserrat-regular mt-2 text-lg text-gray-500 max-lg:mx-6">
            Consultez, téléchargez ou imprimez mon CV.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1F2A44]" />
        </div>

        <iframe
          src="/CV-JaafarBenda.pdf"
          width="100%"
          className="w-full max-lg:h-170 lg:h-320"
          style={{ border: "none" }}
          title="CV"
        ></iframe>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CV;
