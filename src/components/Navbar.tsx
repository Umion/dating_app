import { useState } from "react";
import Logo from "../assets/logo.svg";
import InstIcon from "../assets/instagram.svg";

interface LinkModel {
  title: string;
  link: string;
}

const navigation: LinkModel[] = [
  {
    title: "Головна",
    link: "#",
  },
  {
    title: "Про нас",
    link: "#",
  },
  {
    title: "Наша команда",
    link: "#",
  },
  {
    title: "Контакти",
    link: "#",
  },
];

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="fixed top-0 left-0 z-40 text-secondary right-0 bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src={Logo} className="w-12 mr-2.5" alt="Website Logo" />
          <span className="self-center text-xsm font-bold whitespace-nowrap ">
            <span className="text-primary">Любов </span>
            сьогодні
          </span>
        </a>
        <div className="flex md:order-2">
          <button type="button" className="hidden md:flex">
            <img src={InstIcon} className="h-7" alt="Intagram icon" />
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={openMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#F93064"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
            showMenu ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium xl:text-xl p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            {navigation.map((item, i) => (
              <NavLink key={i} active={!i} link={item} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  active: boolean;
  link: LinkModel;
}

const NavLink: React.FC<NavLinkProps> = ({ active, link }) => {
  const activeClasses =
    "text-white bg-primary rounded md:bg-transparent md:text-black";
  const inactiveClasses =
    "text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900";

  return (
    <li>
      <a
        href={link.link}
        className={`${
          active ? activeClasses : inactiveClasses
        } block py-2 pl-3 pr-4 text-secondary rounded md:p-0 `}
      >
        {link.title}
      </a>
    </li>
  );
};

export default Navbar;
