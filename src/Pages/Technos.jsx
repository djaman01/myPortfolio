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
import Header from "../Components/Header";
import TechnoCards from "../Components/TechnoCards";

const Technos = () => {
  const frontLogos = [
    { imgLogo: reactLogo, nomTechno: "React.js" },
    { imgLogo: viteLogo, nomTechno: "Vite.js" },
    { imgLogo: tailwindLogo, nomTechno: "Tailwind CSS" },
  ];

  const backLogos = [
    { imgLogo: nodeLogo, nomTechno: "Node.js" },
    { imgLogo: expressLogo, nomTechno: "Express.js" },
    { imgLogo: mongooseLogo, nomTechno: "Mongoose.js" },
    { imgLogo: SQLlogo, nomTechno: "SQL" },
  ];

  const dataBasesLogos = [
    { imgLogo: mongoDBlogo, nomTechno: "Mongo DB" },
    { imgLogo: atlasLogo, nomTechno: "Mongo DB Atlas (For MongoDB Databases)" },
    { imgLogo: mySQLlogo, nomTechno: "MySQL" },
    { imgLogo: phpmyadminLogo, nomTechno: "PHPmyAdmin (For MySQL Databases)" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mt-2">
        <Header />
      </div>

      {/* div de tout le corps du component en une grid */}
      <div className="grid grid-cols-1 gap-20 bg-gray-100">
        {/* Page description */}
        <div className="mt-10 flex flex-col items-center px-4 text-center sm:px-10 md:px-20">
          <p className="martian-mono text-lg text-gray-700">
            Voici les technologies que je maîtrise et utilise pour mes projets.
          </p>
          <p className="martian-mono text-lg text-gray-700 mt-5">
            Ces outils me permettent de créer des applications web modernes,
            performantes et évolutives.
          </p>
        </div>

        {/* 1ere row de la grid avec les logos des techno front-end */}
        <div className="flex flex-col items-center">
          <h1 className="martian-mono mb-10 text-2xl">
            Front-end Technologies
          </h1>
          <div className="flex w-full items-center justify-around">
            {frontLogos.map((e) => (
              <div key={e.nomTechno}>
                <TechnoCards imgLogo={e.imgLogo} nomTechno={e.nomTechno} />
              </div>
            ))}
          </div>
        </div>

        {/* 2eme row: Pas la peine de mettre le <h1> dans un div, car il sera seul et on utilise un div quand il y a plusieurs élements */}
        <div className="mt-10 flex flex-col items-center">
          <h1 className="martian-mono mb-10 text-2xl">Back-end Technologies</h1>
          <div className="flex w-full items-center justify-around">
            {backLogos.map((e) => (
              <div key={e.nomTechno}>
                <TechnoCards imgLogo={e.imgLogo} nomTechno={e.nomTechno} />
              </div>
            ))}
          </div>
        </div>

        {/* 3eme row */}
        <div className="mt-10 mb-20 flex flex-col items-center">
          <h1 className="martian-mono mb-10 text-2xl">
            Databases Technologies and Management Tools
          </h1>
          <div className="flex w-full items-center justify-around">
            {dataBasesLogos.map((e) => (
              <div key={e.nomTechno}>
                <TechnoCards imgLogo={e.imgLogo} nomTechno={e.nomTechno} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technos;
