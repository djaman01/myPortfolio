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
      <div className="mt-4 mb-2">
        <Header />

        <div className="bg-animated-gradient mt-5 flex min-h-screen flex-col items-center justify-center">
          <p className="mb-10 text-3xl text-neutral-200">
            Jaafar Bendahou, développeur web Freelance
          </p>
          <TypewriterEffect words={words} />
          <div className="mt-10 flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4">
            <button className="h-10 w-40 rounded-xl border border-transparent bg-black text-md text-white dark:border-white">
              Portfolio
            </button>
            <button className="h-10 w-40 rounded-xl border border-black bg-white text-md text-black">
              Contact
            </button>
          </div>


        </div>
      </div>
    </>
  );
};

export default HomePage;
