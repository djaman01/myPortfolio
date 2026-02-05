import { Link, useLocation } from "react-router-dom";
import TheSidebar from "./TheSidebar";

import { logoJDev } from "../assets/images/logo";

const Header = () => {
  const location = useLocation();

  const isHomepage = location.pathname === "/";
  return (
    <>
      <div className="max-container flex h-13 w-full items-center justify-between">
        <div className="flex justify-center">
          <Link to="/">
            <img
              src={logoJDev}
              alt="logo JDev"
              className={`${isHomepage ? "hidden" : "ml-4 w-28 cursor-pointer bg-white max-lg:w-31"}`}
            />
          </Link>
        </div>

        {/* ! Il faut mettre les padding et border (transparent) avant le hover ou active pour ne pas qu'il y ait de chgts de marges après hover */}
        <div className="font-roboto mr-24 flex flex-1 justify-center gap-14 text-xl leading-normal max-lg:hidden">
          <Link to="/">
            <p
              className={`${isHomepage ? "hidden" : "cursor-pointer rounded-lg border border-transparent px-2 py-1 hover:bg-[#dde7f6] active:border-[#1F2A44]"}`}
            >
              Accueil
            </p>
          </Link>

          <div className="group relative">
            <p
              className={`${isHomepage ? "cursor-pointer border border-transparent px-2 py-1 text-white" : "cursor-pointer rounded-lg px-2 py-1 hover:bg-[#dde7f6]"}`}
            >
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
            <div
              className={`${isHomepage ? "cursor-pointer border border-transparent px-2 py-1 text-white active:text-blue-500" : "cursor-pointer rounded-lg border border-transparent px-2 py-1 hover:bg-[#dde7f6] active:border-[#1F2A44]"}`}
            >
              Technologies
            </div>
          </Link>
          <Link to="/CV">
            <p
              className={`${isHomepage ? "cursor-pointer border border-transparent px-2 py-1 text-white active:text-blue-500" : "cursor-pointer rounded-lg border border-transparent px-2 py-1 hover:bg-[#dde7f6] active:border-[#1F2A44]"}`}
            >
              CV
            </p>
          </Link>
          <Link to="/contact">
            <p
              className={`${isHomepage ? "cursor-pointer border border-transparent px-2 py-1 text-white active:text-blue-500" : "cursor-pointer rounded-lg border border-transparent px-2 py-1 hover:bg-[#dde7f6] active:border-[#1F2A44]"}`}
            >
              Contact
            </p>
          </Link>
        </div>

        <div className="mr-7 hidden max-lg:ml-auto max-lg:flex">
          <TheSidebar />
        </div>
      </div>
    </>
  );
};

export default Header;
