import { Link } from "react-router-dom";
import { logoJDev } from "../assets/images/logo";

const Header = () => {
  return (
    <>
      <div className="max-container flex w-full items-center">
        <div className="flex justify-center">
          <Link to="/">
            <img
              src={logoJDev}
              alt="logo JDev"
              width={130}
              className="cursor-pointer bg-white"
            />
          </Link>
        </div>

        {/* ! Il faut mettre les padding et border (transparent) avant le hover ou active pour ne pas qu'il y ait de chgts de marges après hover */}
        <div className="font-roboto mr-24 flex flex-1 justify-center gap-14 text-xl leading-normal">
          <Link to="/">
            <p className="cursor-pointer rounded-lg border border-transparent px-2 py-1 hover:bg-[#dde7f6] active:border-[#1F2A44]">
              Accueil
            </p>
          </Link>

          <div className="group relative">
            <p className="cursor-pointer rounded-lg px-2 py-1 hover:bg-[#dde7f6]">
              Portfolio
            </p>

            {/* Toujours mettre les listes <ul><li> dans un dropdown, pour que les bordures des textes prennent la même place */}
            <div className="absolute z-10 hidden w-72 rounded-xl bg-white shadow-xl ring-1 ring-black/5 group-hover:block">
              <ul className="py-2">
                <Link to="/frontSites">
                  <li>
                    <p className="cursor-pointer rounded-lg border border-transparent px-3 py-2 hover:bg-[#dde7f6] active:ring-1 active:ring-[#1F2A44]">
                      Sites Front-end
                    </p>
                  </li>
                </Link>
                <Link to="/fullStackSites">
                  <li>
                    <p className="cursor-pointer rounded-lg px-3 py-2 hover:bg-[#dde7f6] active:ring-1 active:ring-[#1F2A44]">
                      Sites Full-stack
                    </p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <Link to="/technologies">
            <div className="cursor-pointer rounded-lg border border-transparent px-2 py-1 hover:bg-[#dde7f6] active:border-[#1F2A44]">
              Technologies
            </div>
          </Link>
          <Link to="/CV">
            <p className="cursor-pointer rounded-lg border border-transparent px-2 py-1 hover:bg-[#dde7f6] active:border-[#1F2A44]">
              CV
            </p>
          </Link>
          <p className="cursor-pointer rounded-lg border border-transparent px-2 py-1 hover:bg-[#dde7f6] active:border-[#1F2A44]">
            Contact
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
