import { FaGithub } from "react-icons/fa";

const FrontDisplay = ({
  linkSite,
  heroImage,
  textHeroImage,
  siteName,
  presentation,
  createdWith,
  linkGithub,
}) => {
  return (
    <>
      {/* Website presentation: Hero section + Tex */}
      <div className="mt-10 grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-8 ">
        <a href={linkSite} target="_blank" rel="noopener">
          <div data-aos="fade-right">
            <img
              src={heroImage}
              alt={textHeroImage}
              className="rounded-2xl shadow-2xl transition duration-200 hover:scale-103 hover:shadow-[0px_7px_35px_rgba(0,20,233,1)] active:scale-100"
            />
          </div>
        </a>

        <div
          className="flex flex-col items-center"
          data-aos="fade-left"
        >
          <h2 className="montserrat-strong mb-5 text-center text-2xl max-lg:pt-5 max-lg:mb-2">
            {siteName}
          </h2>
          <div className="montserrat-regular flex flex-col items-center justify-center gap-5 max-lg:gap-2">
            <p className="text-xl">{presentation}</p>

            <p className="text-lg">{createdWith}</p>
          </div>
          {/* https://github.com/djaman01/fisatex */}
          <div className="mt-5 flex flex-col items-center justify-center gap-2 max-lg:mt-3">
            <p className="montserrat-regular text-lg underline">Code source:</p>
            <a
              href={linkGithub}
              target="_blank"
              rel="noopener"
              className="transition hover:scale-110 active:scale-100"
            >
              <FaGithub size={37} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontDisplay;
