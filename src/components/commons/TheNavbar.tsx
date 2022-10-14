import { Link } from "react-router-dom";
import TablerSearch from "@components/icons/TablerSearch";
import Button from "./buttons/Button";
import Input from "./forms/Input";
import MenuLink from "./menus/MenuLink";
import { ChangeEvent, useState } from "react";
import { AuthCheck, ButtonSizes } from "types/Global";
import { Avatar, Image } from "antd";
import { Logout } from "../../firebase/functions";
import { useNavigate } from "react-router-dom";
import MaterialSymbolsPottedPlantOutlineSharp from "~icons/material-symbols/potted-plant-outline-sharp";
import MdiLightbulbOn10 from "~icons/mdi/lightbulb-on-10";
import ClarityMapOutlineAlerted from "~icons/clarity/map-outline-alerted";

type props = {
  isAuthenticated: Boolean;
  loading: Boolean;
  setIsAuthenticated: CallableFunction;
};

function TheNavbar({ isAuthenticated, loading, setIsAuthenticated }: props) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [avatarMenu, setAvatarMenu] = useState<boolean>(false);
  const [btn, setBtn] = useState<string>("sample");

  const navigate = useNavigate();

  const triggerMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const toggleAvatarMenu = () => {
    setAvatarMenu(!avatarMenu);
  };

  function HandleLogout() {
    Logout()
      .then((e) => {
        navigate("/");
        setIsAuthenticated(false);
        alert("Logged out successfully");
      })
      .catch((e) => {
        alert(e);
      });
  }

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="flex justify-between lg:justify-start items-center space-x-5 w-full lg:w-auto">
          <Link
            to="/"
            className="text-xl font-bold text-primary mr-3 hover:text-orange-600"
          >
            CYBERDUDE
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
            onClick={triggerMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden lg:flex items-center space-x-5">
            <MenuLink
              to="/roadmap"
              icon={<ClarityMapOutlineAlerted className=" mr-2" />}
              label="Roadmap"
            />
            <MenuLink
              to="/suggestions"
              icon={<MdiLightbulbOn10 className="mr-2" />}
              label="Ideas"
            />
            {isAuthenticated && (
              <MenuLink
                to="/sessions"
                icon={
                  <MaterialSymbolsPottedPlantOutlineSharp className="mr-2" />
                }
                label="Sessions"
              />
            )}
          </div>
        </div>
        <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center space-x-4 space-y-3 lg:space-y-0 mt-4 lg:mt-0 bg-red-50">
          <Input
            id="search"
            type="search"
            placeholder="Search Ideas..."
            icon={<TablerSearch />}
            name="search"
            value=""
            onChange={function (event: ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
            required={false}
            error={""}
          />
          {!loading ? (
            !isAuthenticated ? (
              <div className="space-x-4 flex items-center">
                <Button
                  variant="secondary"
                  label={"Login"}
                  onClick={() => navigate("/login")}
                />
                <Button label={"Sign Up"} className="cursor-not-allowed" />
              </div>
            ) : (
              <div className="flex items-center relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => {
                    toggleAvatarMenu();
                  }}
                >
                  <span className="mx-4">{"Hello Cyberdude"}</span>
                  <img
                    src="https://joeschmoe.io/api/v1/random"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                {/* <Avatar
                  className="cursor-pointer"
                  src="https://joeschmoe.io/api/v1/random"
                  size={50}
                /> */}
                {avatarMenu && (
                  <div className="absolute left-0 top-10 right-0 max-w-md w-full bg-white rounded p-3">
                    <ul>
                      <li>
                        <Button
                          className="mx-3"
                          variant="secondary"
                          label={"Sign Out"}
                          size={ButtonSizes.sm}
                          onClick={() => HandleLogout()}
                        />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )
          ) : (
            ""
          )}
        </div>
      </div>

      {menuOpened ? (
        <div className="sm:hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 px-3">
          <ul className="flex flex-col p-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li onClick={closeMenu}>
              <MenuLink
                to="/roadmap"
                icon={<ClarityMapOutlineAlerted className="mr-2" />}
                label="Roadmap"
                className="block py-2 pr-4 pl-3 text-gray-400  text-whites bg-blue-700s rounded lg:bg-transparent lg:text-blue-700s lg:p-0"
              />
            </li>
            <li onClick={closeMenu}>
              <MenuLink
                to="/suggestions"
                icon={<MdiLightbulbOn10 className="mr-2" />}
                label="Ideas"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700s lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export default TheNavbar;
