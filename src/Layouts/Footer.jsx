import { Link } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";

function Footer() {
  return (
    <footer className="flex h-[350px] w-full flex-col bg-black lg:h-[400px]">
      <div className="flex w-full flex-grow flex-row p-1 text-white bg-black">
        <div className=" w-[30%] p-10   place-content-center text-center">
          <h2 className="text-global-orange text-lg font-salsa">
            {" "}
            Tiffinsmart
          </h2>
          <p className="mt-3 font-salsa">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quae at ipsam.
          </p>
          <div className=" flex flex-row justify-evenly mt-3 px-10">
            <Link className="" href="#">
              <img src={facebook} alt="" />
            </Link>
            <Link href="#">
              <img src={instagram} alt="" />
            </Link>
            <Link href="#">
              <img src={twitter} alt="" />
            </Link>
          </div>
        </div>
        <div className=" place-content-center text-center pl-10 font-salsa   flex flex-col  w-[20%] ">
          <h2 className="text-global-orange font-salsa text-lg   mb-3">
            Company
          </h2>
          <Link className="mb-1" href="#">
            About us
          </Link>
          <Link className="mb-1" href="#">
            Service us
          </Link>
          <Link className="mb-1" href="#">
            Contact
          </Link>
          <Link className="mb-1" href="#">
            company
          </Link>
        </div>
        <div className=" place-content-center font-salsa pr-10  flex flex-col text-center w-[20%] ">
          <h2 className="text-global-orange font-salsa mb-3 text-lg ">Legal</h2>
          <Link className="mb-1" href="">
            Cookie Policy
          </Link>
          <Link className="mb-1" href="">
            Term of Use
          </Link>
          <Link className="mb-1" href="">
            Privacy Policy
          </Link>
          <Link className="mb-1" href="">
            Site Map
          </Link>
        </div>
        <div className="place-content-center text-center font-salsa p-10 flex flex-col  w-[30%] ">
          <h2 className="text-global-orange font-salsa text-lg mb-3">
            Get in Touch
          </h2>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur deserunt officia?
          </p>
          <div className="flex flex-row justify-center">
            <input
              type="text"
              placeholder="Email"
              className="pl-2 mr-1  text-black outline-none rounded-2xl"
            />
            <button className="bg-global-orange font-salsa rounded-lg w-16 ">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="mb-1 h-[30px] w-full text-center r">
        <span className="inline-flex">
          <h3 className="text-[#FFFCF9]">Copy Right &copy; 2023</h3>
          <h3 className="ml-1 font-medium text-orange-700">Tiffinsmart.</h3>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
