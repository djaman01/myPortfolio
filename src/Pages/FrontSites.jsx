import { fisatexHomepage, inesHomepage } from "../assets/images/autresImages";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FrontDisplay from "../Components/FrontDisplay";

const FrontSites = () => {
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
      <title>Sites Front-end | Jaafar Bendahou</title>

      {/* Meta description (150–160 characters) */}
      <meta
        name="description"
        content="Découvrez les sites front-end réalisés par Jaafar Bendahou. Des projets modernes, performants et responsive."
      />

      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jaafarbendahou.com/frontSites" />
      <meta property="og:title" content="Sites Front-end | Jaafar Bendahou" />
      <meta
        property="og:description"
        content="Découvrez les sites front-end réalisés par Jaafar Bendahou. Des projets modernes, performants et responsive."
      />

      <meta
        property="og:image"
        content="https://jaafarbendahou.com/logoJB-media.jpg"
      />
      {/* Canonical URL to avoid duplicate content */}
      <link rel="canonical" href="https://jaafarbendahou.com/frontSites" />

      <div className="flex min-h-screen flex-col overflow-hidden">
        <div className="mt-5 mb-3">
          <Header />
        </div>

        <main className="bg-gray-100">
          <div className="mt-5 text-center">
            <h1 className="martian-mono text-3xl text-[#214b9b]">
              Sites Front-end
            </h1>

            <p className="montserrat-regular mt-2 text-lg text-gray-500 max-lg:mx-6">
              Une sélection de sites vitrines que j'ai réalisés.
            </p>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1F2A44]" />
          </div>

          {/* Flex container for the 2 grids so that i can make a gap */}
          <div className="mx-9 mb-28 flex flex-1 flex-col gap-20 max-lg:mx-3 max-lg:mt-0 max-md:gap-10 max-sm:gap-5">
            {/* Fisatex.com */}
            <FrontDisplay
              linkSite="https://www.fisatex.com/"
              heroImage={fisatexHomepage}
              textHeroImage="Fisatex.com: société Textile"
              siteName="Fisatex.com"
              presentation="Site vitrine développé pour une entreprise du secteur textile."
              createdWith="Créé avec React.js / Vite.js / Tailwind CSS"
              linkGithub="https://github.com/djaman01/fisatex"
            />

            {/* inesandaloussi.com */}
            <FrontDisplay
              linkSite="https://www.inesandaloussi.com/"
              heroImage={inesHomepage}
              textHeroImage="inesandaloussi.com: Portfolio Architecte"
              siteName="Inesandaloussi.com"
              presentation="Site-Portfolio développé pour une architecte."
              createdWith="Créé avec React.js / Vite.js / Tailwind CSS"
              linkGithub="https://github.com/djaman01/inesPortfolio"
            />
          </div>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FrontSites;
