import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center gap-5 bg-gray-900 py-2 text-white">
        <div className="mt-5 w-105 text-center max-lg:w-full">
          <p className="martian-mono text-lg">Jaafar Bendahou</p>
          <p className="montserrat-regular mt-2">
            {" "}
            Développeur Full-stack - React • Node.js
          </p>
          <p className="montserrat-regular mt-1">Freelance</p>
        </div>
        {/* rel="noopener" coupe la connexion entre l'onglet nouvellement ouvert grace à target="_blank" et la page d'origine, pour eviter tout problemes */}
        <div className="flex w-96 items-center justify-center gap-10">
          <a
            href="https://www.linkedin.com/in/jaafar-bendahou-b1b884289/"
            target="_blank"
            rel="noopener"
            className="transition hover:scale-110 active:scale-100" //scale-95: retrecit de 5 /scale-110: grandit de 10 / active:scale-100 revient à sa taille initial après avoir cliqu", vu que le hover l'agrandi de 10
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/djaman01"
            target="_blank"
            rel="noopener"
            className="transition hover:scale-110 active:scale-100"
          >
            <FaGithub size={30} />
          </a>
          {/* mailto: opens a new tab by default so no need of target="_blank" */}
          <a
            href="mailto:jaafar.devnet@gmail.com"
            aria-label="Send me an email"
            className="transition hover:scale-110 active:scale-100"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        <div className="mb-2 font-roboto">
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
