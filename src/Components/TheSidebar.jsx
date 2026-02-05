import { useState } from "react";
import { PiReadCvLogo } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

const TheSidebar = () => {
  const [toggled, setToggled] = useState(false);

  const location = useLocation();

  const isHomepage = location.pathname === "/";

  return (
    <div className="prose" style={{ display: "flex", height: "100%" }}>
      <Sidebar
        backgroundColor="#ededed"
        breakPoint="all"
        onBackdropClick={() => setToggled(false)} //permet de mettre faux quand on clique hors de la sidebar
        toggled={toggled} //qd j'ouvre la sidebar et que je met false manuellement puis true, la transition duration marche
        transitionDuration={600}
      >
        <Menu className="mt-10">
          <MenuItem
            component={<Link to="/" />}
            icon={<IoHomeOutline size={20} />}
          >
            Accueil
          </MenuItem>

          <SubMenu icon={<TbWorldWww size={26} />} label="Portfolio">
            <MenuItem component={<Link to="/frontSites" />}>
              Sites Front-end
            </MenuItem>
            <MenuItem component={<Link to="/fullStackSites" />}>
              Sites Full-stack
            </MenuItem>
          </SubMenu>

          <MenuItem
            icon={<FaReact size={24} />}
            component={<Link to="/technologies" />}
          >
            Technologies
          </MenuItem>

          <MenuItem
            icon={<PiReadCvLogo size={24} />}
            component={<Link to="/CV" />}
          >
            CV
          </MenuItem>

          <MenuItem
            icon={<CiPhone size={24} />}
            component={<Link to="/contact" />}
          >
            Contact
          </MenuItem>
        </Menu>
      </Sidebar>
      {/* Le npm est codé de tel sorte à ce que le bouton apparaisse seul, puis quand on appuie la sidebar apparait */}
      <button className={`${isHomepage ? "cursor-pointer text-white" : "cursor-pointer"}`} onClick={() => setToggled(!toggled)}>
        {toggled ? <RxCross1 size={34} /> : <RxHamburgerMenu size={34} />}{" "}
        {/* //Si toggled==true fait apparaitre la Croix, sinon le menu Hamburger*/}
      </button>
    </div>
  );
};

export default TheSidebar;
