import { BsPlus } from "react-icons/bs";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 left-0 py-4 lg:py-2 border-none select-none z-[1000] xl:p-4 rounded-b-xl drop-shadow-md h-fit bg-headerBG">
        <div className="container relative flex items-center justify-between">
          <img
            src="./logo.png"
            alt="logo"
            onClick={() => navigate("/")}
            className="object-contain w-[8rem]"
          />

          <div className="absolute z-50 items-center justify-center hidden text-3xl font-bold text-white transform -translate-x-1/2 -translate-y-1/2 border-none rounded-full cursor-pointer md:flex bg-primary top-10 left-1/2 size-10 bg-button-gradient">
            <BsPlus />
          </div>

          <Profile />
        </div>
      </header>

      <div className="fixed z-50 flex items-center justify-center text-3xl font-bold text-white border-none rounded-full shadow-md cursor-pointer drop-shadow-md bottom-5 right-5 md:hidden size-12 bg-button-gradient">
        <BsPlus />
      </div>
    </>
  );
};

export default Header;
