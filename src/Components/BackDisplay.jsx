import { FaGithub } from "react-icons/fa";

const BackDisplay = ({
  linkSite,
  heroImage,
  textHeroImage,
  siteName,
  presentation,
  frontend,
  backend,
  database,
  frontTechnos,
  backTechnos,
  dbTechnos,
  linkGithub,
  displayCode,
}) => {
  return (
    <>
      {/* Website presentation: Hero section + Tex */}
      <div className="mt-10 grid grid-cols-2">
        <a href={linkSite} target="_blank" rel="noopener">
          <div data-aos="fade-right">
            <img
              src={heroImage}
              alt={textHeroImage}
              className="rounded-2xl shadow-2xl transition duration-200 hover:scale-[1.02] active:scale-100"
            />
          </div>
        </a>

        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-left"
        >
          <h2 className="montserrat-strong mt-2 mb-5 text-center text-2xl">
            {siteName}
          </h2>
          <div className="montserrat-regular flex flex-col items-center justify-center gap-5">
            <p className="text-xl">{presentation}</p>
            <div className="flex h-32 flex-col justify-around text-lg">
              <p>
                <span className="font-bold">{frontend}</span>
                {frontTechnos}
              </p>
              <p>
                <span className="font-bold">{backend}</span>
                {backTechnos}
              </p>
              <p>
                <span className="font-bold">{database}</span>
                {dbTechnos}
              </p>
            </div>
          </div>
          {displayCode === "Yes" && (
            <div className="mt-6 flex flex-col items-center justify-center gap-2">
              <p className="montserrat-regular text-lg underline">
                Code source front-end:
              </p>
              <a
                href={linkGithub}
                target="_blank"
                rel="noopener"
                className="transition hover:scale-110 active:scale-100"
              >
                <FaGithub size={30} />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BackDisplay;
