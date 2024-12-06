import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderBtnDownIcon from "../assets/img/header-btn-arrow-down.png";
import HeaderBtnUpIcon from "../assets/img/header-btn-arrow-up.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div class="sm:flex text-[#ffffff] bg-[#000000] m-0 p-0 items-center hidden top-0 sticky z-50">
        <Link
          to="/"
          className="w-1/4 hover:bg-[#ffffff] hover:text-[#000000] text-[20px] p-[10px] block"
        >
          HOME
        </Link>
        <a
          href="#"
          class="w-1/4 hover:bg-[#ffffff] hover:text-[#000000] text-[20px] p-[10px]"
        >
          X
        </a>
        <a
          href="#"
          class="w-1/4 hover:bg-[#ffffff] hover:text-[#000000] text-[20px] p-[10px]"
        >
          TELEGRAM
        </a>
        <a
          href="#"
          class="w-1/4 hover:bg-[#ffffff] hover:text-[#000000] text-[20px] p-[10px]"
        >
          BUY $M0000
        </a>
      </div>

      <div className="flex text-[#ffffff] bg-[#000000] m-0 p-0 items-center sm:hidden top-0 sticky z-50">
        {/* Dropdown Menu Container */}
        <div className="relative w-full">
          <div className="p-[10px]" onClick={toggleDropdown}>
            <img
              src={HeaderBtnDownIcon}
              alt="Down Icon"
              className={`w-[15px] ${isOpen ? "hidden" : "block"}`}
            />
            <img
              src={HeaderBtnUpIcon}
              alt="Up Icon"
              className={`w-[15px] ${isOpen ? "block" : "hidden"}`}
            />
          </div>

          {/* Dropdown Menu */}
          <div
            className={`absolute left-0 ${
              isOpen ? "block" : "hidden"
            } bg-[#000000] text-[#ffffff] w-full p-0 m-0`}
          >
            <Link
              to="/"
              className="hover:bg-[#ffffff] hover:text-[#000000] text-[12px] p-[10px] block"
            >
              HOME
            </Link>
            <a
              href="#"
              className="hover:bg-[#ffffff] hover:text-[#000000] text-[12px] p-[10px] block"
            >
              TWITTER
            </a>
            <a
              href="#"
              className="hover:bg-[#ffffff] hover:text-[#000000] text-[12px] p-[10px] block"
            >
              TELEGRAM
            </a>
            <a
              href="#"
              className="hover:bg-[#ffffff] hover:text-[#000000] text-[12px] p-[10px] block"
            >
              BUY $M0000
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
