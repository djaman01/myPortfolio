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
    <div className="flex min-h-screen flex-col">
      <div className="mt-4 mb-2">
        <Header />
      </div>

      <div className="mt-5 text-center">
        <h1 className="martian-mono text-3xl text-[#214b9b]">
          Sites Front-end
        </h1>

        <p className="montserrat-regular mt-2 text-lg text-gray-500">
          Une sélection de sites vitrines que j'ai réalisés.
        </p>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1F2A44]" />
      </div>

      {/* Flex container for the 2 grids so that i can make a gap */}
      <main className="mx-9 mt-10 mb-24 flex flex-1 flex-col gap-20">
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
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FrontSites;
