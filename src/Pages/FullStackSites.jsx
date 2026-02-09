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
      <div className="flex min-h-screen flex-col overflow-hidden">
        <div className="mt-5 mb-3">
          <Header />
        </div>

        <main className="bg-gray-100">
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
          <div className="mx-9 mb-28 flex flex-1 flex-col gap-20 max-lg:mt-0 max-md:gap-10 max-sm:gap-5">
            {/* Phenixdeals.com */}
            <BackDisplay
              linkSite="https://www.phenixdeals.com/"
              heroImage={phenixDealsHomepage}
              textHeroImage="Phenixdeals.com: Galerie d'art virtuelle"
              hoverScale="hover:scale-103"
              activeScale="active:scale-100"
              hoverBg="hover:shadow-[0px_7px_35px_rgba(0,106,202,1)]"
              siteName="Phenixdeals.com"
              presentation="Site de vente d'œuvres d'art créé pour une galerie:"
              presentation2="présentation des oeuvres en vente et intégration d'une interface d'administration pour leur gestion. "
              frontend="Front-end:"
              backend="Back-end:"
              database="Database:"
              frontTechnos=" React.js / Vite.js / Tailwind CSS"
              backTechnos=" Node.js / Express.js / Mongoose"
              dbTechnos=" Mongo DB / Mongo DB Atlas"
              linkGithubFront="https://github.com/djaman01/Phenixdeals-Vite"
              linkGithubBack="https://github.com/djaman01/Phenixdeals-back"
              displayCode="Yes"
            />

            {/* portailvmsynthemedic.com */}
            <BackDisplay
              heroImage={portailVMHomepage}
              textHeroImage="SaaS Synthemedic: labo pharmaceutique"
              siteName=" Laboratoire pharmaceutique Synthemedic"
              presentation="SaaS privé développé pour un usage métier interne pour:"
              presentation2="la collecte de données via formulaires, leur analyse à travers des statistiques et la gestion des accès utilisateurs"
              frontend="Front-end:"
              backend="Back-end:"
              database="Database:"
              frontTechnos=" React.js / Vite.js / Tailwind CSS"
              backTechnos=" Node.js / Express.js / SQL"
              dbTechnos=" MySQL / PHPmyAdmin"
              displayCode="No"
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

export default FullStackSites;
