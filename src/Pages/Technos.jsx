import {
  atlasLogo,
  expressLogo,
  mongoDBlogo,
  mongooseLogo,
  mySQLlogo,
  nodeLogo,
  phpmyadminLogo,
  reactLogo,
  SQLlogo,
  tailwindLogo,
  viteLogo,
} from "../assets/images/logo";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TechnoCards from "../Components/TechnoCards";

const Technos = () => {
  const frontLogos = [
    {
      imgLogo: reactLogo,
      nomTechno: "React.js",
      bgAnimatedColor: "bg-blue-500",
    },
    {
      imgLogo: viteLogo,
      nomTechno: "Vite.js",
      bgAnimatedColor: "bg-blue-500",
    },
    {
      imgLogo: tailwindLogo,
      nomTechno: "Tailwind CSS",
      bgAnimatedColor: "bg-blue-500",
    },
  ];

  const backLogos = [
    {
      imgLogo: nodeLogo,
      nomTechno: "Node.js",
      bgAnimatedColor: "bg-lime-500",
    },
    {
      imgLogo: expressLogo,
      nomTechno: "Express.js",
      bgAnimatedColor: "bg-lime-500",
    },
    {
      imgLogo: mongooseLogo,
      nomTechno: "Mongoose.js",
      bgAnimatedColor: "bg-lime-500",
    },
    { imgLogo: SQLlogo, nomTechno: "SQL", bgAnimatedColor: "bg-lime-500" },
  ];

  const dataBasesLogos = [
    {
      imgLogo: mySQLlogo,
      nomTechno: "MySQL",
      bgAnimatedColor: "bg-yellow-500",
    },
    {
      imgLogo: phpmyadminLogo,
      nomTechno: "PHPmyAdmin",
      bgAnimatedColor: "bg-yellow-500",
    },
    {
      imgLogo: mongoDBlogo,
      nomTechno: "Mongo DB",
      bgAnimatedColor: "bg-yellow-500",
    },
    {
      imgLogo: atlasLogo,
      nomTechno: "Mongo DB Atlas",
      bgAnimatedColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mt-4 mb-2">
        <Header />
      </div>


      {/* div de tout le corps du component en une grid */}
      <div className="grid grid-cols-1 gap-12 bg-gray-100">
        {/* Page description */}

        <div className="mt-5 text-center">
          <h1 className="martian-mono text-3xl text-[#214b9b]">Technologies</h1>

          <p className="montserrat-regular mt-2 text-lg text-gray-500">
              Outils et technologies utilisés dans mes projets web.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#1F2A44]" />
        </div>

        {/* 1ere row de la grid avec les logos des techno front-end */}
        <div className="flex flex-col items-center">
          <h2 className="montserrat-strong mb-12 text-2xl">
            Front-end Technologies
          </h2>
          <div className="flex w-full items-center justify-around">
            {frontLogos.map((e) => (
              <div key={e.nomTechno}>
                <TechnoCards
                  imgLogo={e.imgLogo}
                  nomTechno={e.nomTechno}
                  bgAnimatedColor={e.bgAnimatedColor}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2eme row: Pas la peine de mettre le <h1> dans un div, car il sera seul et on utilise un div quand il y a plusieurs élements */}
        <div className="mt-10 flex flex-col items-center">
          <h2 className="montserrat-strong mb-12 text-2xl">
            Back-end Technologies
          </h2>
          <div className="flex w-full items-center justify-around">
            {backLogos.map((e) => (
              <div key={e.nomTechno}>
                <TechnoCards
                  imgLogo={e.imgLogo}
                  nomTechno={e.nomTechno}
                  bgAnimatedColor={e.bgAnimatedColor}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3eme row */}
        <div className="mt-10 mb-20 flex flex-col items-center">
          <h2 className="montserrat-strong mb-12 text-2xl">
            Databases Technologies & Management Tools
          </h2>
          <div className="flex w-full items-center justify-around">
            {dataBasesLogos.map((e) => (
              <div key={e.nomTechno}>
                <TechnoCards
                  imgLogo={e.imgLogo}
                  nomTechno={e.nomTechno}
                  bgAnimatedColor={e.bgAnimatedColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Technos;
