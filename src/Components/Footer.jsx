import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center gap-5 bg-gray-900 text-white py-2">
        <div className="mt-5 w-96 text-center">
          <p className="martian-mono text-lg">Jaafar Bendahou</p>
          <p className="font-roboto">
            {" "}
            Full-stack developer - React • Node • SQL • NoSQL
          </p>
          <p className="font-roboto">Freelance</p>
        </div>
        {/* rel="noopener" coupe la connexion entre l'onglet nouvellement ouvert grace à target="_blank" et la page d'origine, pour eviter tout problemes */}
        <div className="flex w-96 items-center justify-center gap-10">
          <a
            href="https://www.linkedin.com/in/jaafar-bendahou-b1b884289/"
            target="_blank"
            rel="noopener"
            className="transition active:scale-110"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/djaman01"
            target="_blank"
            rel="noopener"
            className="transition active:scale-110"
          >
            <FaGithub size={30} />
          </a>
          {/* mailto: opens a new tab by default so no need of target="_blank" */}
          <a
            href="mailto:jaafar.devnet@gmail.com"
            aria-label="Send me an email"
            className="transition active:scale-110"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        <div className="mb-2">
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
