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

  return (
    <>
      {/* flex flex-col pour que le header et la "Hero Section" soit l'un en-dessous de l'autre et je mets min-h-screen ici pour ne pas avoir de possibilité de scrolldown  */}
      <div className="flex min-h-screen flex-col">
        <div className="mt-2">
          <Header />
        </div>

        <div className="bg-animated-gradient flex flex-1 flex-col items-center justify-center">
          <p className="mb-10 text-3xl text-neutral-200">
            Jaafar Bendahou, développeur web Freelance
          </p>
          <TypewriterEffect words={words} />
          <div className="mt-10 flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4">
            <button className="text-md h-10 w-40 cursor-pointer rounded-xl border border-transparent bg-black text-white active:scale-105 dark:border-white">
              Technologies
            </button>
            <button className="text-md h-10 w-40 cursor-pointer rounded-xl border border-black bg-white text-black active:scale-105">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
