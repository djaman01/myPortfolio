import { FaGithub } from "react-icons/fa";

const BackDisplay = ({
  linkSite,
  heroImage,
  textHeroImage,
  hoverScale,
  activeScale,
  hoverBg,
  siteName,
  presentation,
  presentation2,
  frontend,
  backend,
  database,
  frontTechnos,
  backTechnos,
  dbTechnos,
  linkGithubFront,
  linkGithubBack,
  displayCode,
}) => {
  return (
    <>
      {/* Website presentation: Hero section + Tex */}
      <div className="grid grid-cols-2 max-lg:mt-12 max-lg:grid-cols-1">
        <a href={linkSite} target="_blank" rel="noopener">
          <div data-aos="fade-right">
            <img
              src={heroImage}
              alt={textHeroImage}
              className={`rounded-2xl shadow-2xl transition duration-200 ${hoverScale} ${activeScale} ${hoverBg}`}
            />
          </div>
        </a>

        <div className="flex flex-col items-center" data-aos="fade-left">
          <h2 className="montserrat-strong mb-5 text-center text-2xl max-lg:mb-2 max-lg:pt-5 max-sm:w-96">
            {siteName}
          </h2>
          <div className="montserrat-regular flex flex-col items-center justify-center gap-5 max-lg:gap-2">
            <div className="flex h-max w-150 flex-col gap-2 max-sm:w-90">
              <p className="text-xl">{presentation}</p>
              <p className="text-xl">{presentation2}</p>
            </div>

            <div className="flex h-max flex-col gap-2 text-lg max-lg:mt-5">
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
            <div className="mt-5 flex w-100 items-center justify-around">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="montserrat-regular text-lg underline">
                  Code front-end:
                </p>
                <a
                  href={linkGithubFront}
                  target="_blank"
                  rel="noopener"
                  className="transition hover:scale-110 active:scale-100"
                >
                  <FaGithub size={37} />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="montserrat-regular text-lg underline">
                  Code back-end:
                </p>
                <a
                  href={linkGithubBack}
                  target="_blank"
                  rel="noopener"
                  className="transition hover:scale-110 active:scale-100"
                >
                  <FaGithub size={37} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BackDisplay;
