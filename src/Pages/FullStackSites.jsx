import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  phenixDealsHomepage,
  portailVMHomepage,
} from "../assets/images/autresImages";
import BackDisplay from "../Components/BackDisplay";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const FullStackSites = () => {
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
      <div className="flex min-h-screen flex-col">
        <div className="mt-4 mb-2">
          <Header />
        </div>

        <div className="mt-5 text-center">
          <h1 className="martian-mono text-3xl text-[#214b9b]">
            Sites Full-Stack
          </h1>

          <p className="montserrat-regular mt-2 text-lg text-gray-500">
            Projets réalisés intégrant un back-end et une base de données.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1F2A44]" />
        </div>

        {/* Flex container for the 2 grids so that i can make a gap */}
        <main className="mx-9 mt-10 mb-24 flex flex-1 flex-col gap-20">
          {/* Phenixdeals.com */}
          <BackDisplay
            linkSite="https://www.phenixdeals.com/"
            heroImage={phenixDealsHomepage}
            textHeroImage="Phenixdeals.com: Galerie d'art virtuelle"
            siteName="Phenixdeals.com"
            presentation="Site de vente d'œuvres d'art créé pour une galerie"
            frontend="Front-end:"
            backend="Back-end:"
            database="Database:"
            frontTechnos=" React.js / Vite.js / Tailwind CSS"
            backTechnos=" Node.js / Express.js / Mongoose"
            dbTechnos=" Mongo DB / Mongo DB Atlas"
            linkGithub="https://github.com/djaman01/Phenixdeals-Vite"
            displayCode="Yes"
          />

          {/* portailvmsynthemedic.com */}
          <BackDisplay
            heroImage={portailVMHomepage}
            textHeroImage="SaaS Synthemedic: labo pharmaceutique"
            siteName=" Laboratoire pharmaceutique Synthemedic"
            presentation="SaaS privé développé pour un usage métier interne "
            frontend="Front-end:"
            backend="Back-end:"
            database="Database:"
            frontTechnos=" React.js / Vite.js / Tailwind CSS"
            backTechnos=" Node.js / Express.js / SQL"
            dbTechnos=" MySQL / PHPmyAdmin"
            displayCode="No"
          />
        </main>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FullStackSites;
