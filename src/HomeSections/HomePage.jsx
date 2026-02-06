import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { TypewriterEffect } from "../Components/ui/typewriter-effect";

const HomePage = () => {
  const words = [
    { text: "Je" },
    { text: "crée" },
    { text: "des" },
    { text: "solutions", className: "text-blue-500" },
    { text: "web" },
    { text: "adaptées", className: "text-blue-500" },
    { text: "à" },
    { text: "vos" },
    { text: "besoins" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      {/* flex flex-col pour que le header et la "Hero Section" soit l'un en-dessous de l'autre et je mets min-h-screen ici pour ne pas avoir de possibilité de scrolldown  */}
      <div className="bg-animated-gradient flex min-h-screen flex-col">
        <div className="mt-5 mb-3">
          <Header />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          {/* Desktop version: max-lg:hidden because it's in 1 line: so there is a , and developpeur without D */}
          <p className="martian-mono -mt-20 mb-12 text-2xl text-neutral-200 max-lg:hidden">
            Jaafar Bendahou, développeur web Freelance
          </p>
          {/* Mobile version: lg:hidden because in 2 lines, no coma and developpeur with D */}
          <div className="martian-mono -mt-10 mb-12 flex flex-col items-center gap-3 lg:hidden">
            <p className="text-2xl text-neutral-200 max-lg:text-xl">
              Jaafar Bendahou
            </p>
            <p className="text-2xl text-neutral-200 max-lg:text-xl">
              Développeur web Freelance
            </p>
          </div>
          <div className="max-lg:h-20">
            <TypewriterEffect words={words} />
          </div>
          <div className="font-roboto mt-12 flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4">
            <Link to="/CV">
              <button
                onClick={scrollToTop}
                className="text-md h-10 w-40 cursor-pointer rounded-xl border border-transparent bg-black text-white transition hover:scale-105 active:scale-100 dark:border-white"
              >
                CV
              </button>
            </Link>
            <Link to="/contact">
              <button
                onClick={scrollToTop}
                className="text-md h-10 w-40 cursor-pointer rounded-xl border border-black bg-white text-black transition hover:scale-105 active:scale-100"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
