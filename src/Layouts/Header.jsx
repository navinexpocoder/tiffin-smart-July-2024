import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import ExArrow from "../assets/icons/ExArrow.png";
import Search from "../assets/icons/Search.png";
// import Person from "../assets/icons/Person.png";
import Safety from "../assets/icons/Safety.png";
import FastCart from "../assets/icons/FastCart.png";

function Header() {
  return (
    <header className=" w-full  ">
      <div className="flex xl:h-[84px] h-[74px] xl:mx-[30px] mx-[25px] xl:my-[16px] my-[12px] ">
        <div className="bg-red-100 w-[50%] flex h-full">
          <span>
            <img src={logo} alt="" />
          </span>
          <div className="flex items-center ml-2   ">
            <h2 className="font-bold font-lato mr-1  ">Pardesipura</h2>
            <p className="font-lato">Electronic Complex</p>
            <img src={ExArrow} alt="" />
          </div>
        </div>
        <div className="bg-green-400 w-[50%] h-full    ">
          <div className=" flex place-content-end h-10 mx-auto      ">
            <button className="absolute mt-2 mr-16">
              <img src={Search} alt="Search" />
            </button>
            <input
              type="text"
              className="h-10 w-24 pl-8  placeholder-black font-lato outline-none rounded-full"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="bg-blue-400 w-[50%] h-full flex ">
          <span>
            <Link className="flex">
              <img src={Safety} alt="" />
              <h3 className="font-lato">Help</h3>
            </Link>
          </span>
          <span>
            <Link className="font-lato flex">
              <img src={FastCart} alt="" />
              <h3 className="font-lato">Cart</h3>
            </Link>
          </span>
          <br />
          <span>
            <Link to="/register" className="font-lato ">
              Register
            </Link>
            <br />
            <br />
            <Link to="login" className="font-lato ">
              LogIn
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
//ds
