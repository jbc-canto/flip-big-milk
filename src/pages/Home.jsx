import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "../components";

import CiaLogoImg from "../assets/img/home-cia-logo.svg";
import CowImg from "../assets/img/home-cow.svg";
import DiamondImg from "../assets/img/home-diamond.svg";
import AccessibilityImg from "../assets/img/home-accessibility.svg";
import QuestionImg from "../assets/img/home-question.svg";

export function Home() {
  return (
    <div className="bg-[#F5F1DB] flex flex-col items-center gap-[70px] px-[23px]">
      {/* -- Header -- */}

      {/* -- Main Content -- */}
      <section class="flex flex-col sm:items-center gap-[30px] mt-[70px] max-w-[1150px]">
        <div className="flex flex-row gap-[20px] justify-between">
          <img
            src={CiaLogoImg}
            className="sm:w-[117px] w-[75px]"
            alt="cia-logo"
          />
          <p className="sm:text-[40px] text-[18px] text-[#5B4949]">
            <span>DECLASSIFIED: REQUEST OF</span>
            <br className="sm:hidden block" />
            <span className="bg-[#5B4949] w-full sm:px-[200px] px-[92px]"></span>
            <br />
            <span className="uppercase">
              Cultural biohacking project #a0392
            </span>
          </p>
        </div>
        <div className="flex lg:flex-row md:flex-col sm:ml-[149px]  justify-between gap-[10px]">
          <p className="sm:text-[20px] text-[12px] text-[#5B4949] leading-tight max-w-[730px]">
            <span className="bg-[#5B4949] sm:px-[200px] px-[80px]"></span>
            <span>cold war ultimate weapon,</span>
            <span> discovered during Operation Paperclip by</span>
            <span className="bg-[#5B4949] sm:px-[120px] px-[50px]"></span>
            <br />
            <span className="bg-[#5B4949] sm:px-[220px] px-[100px]"></span>
            <span>has been deprecated </span>
            <br />
            <span className="bg-[#5B4949] w-full sm:px-[320px] px-[170px]"></span>
            <br />
            <span>
              and other cognitive breakthroughs during Project Code: MK Ultra.
            </span>
          </p>
          <img src={CowImg} alt="cow" width={154} className="sm:block hidden" />
        </div>
        <Button text="BEGIN COGNITIVE MESMERISM MODULE #A4928" />
        <p className="sm:text-[20px] text-[12px] text-[#5B4949] leading-tight max-w-[800px]">
          <span>WARNING:</span>
          <span className="bg-[#5B4949] sm:px-[130px] px-[86px]"></span>
          <span>and</span>
          <span className="bg-[#5B4949] sm:px-[140px] px-[0px]"></span>
          <br />
          <span> approve subjects available for testing</span>
          <span className="bg-[#5B4949] sm:px-[120px] px-[22px]"></span>
          <br />
          <span className="bg-[#5B4949] sm:px-[80px] px-[26px]"></span>
          <span className="sm:inline hidden">
            range of adverse effects in public applications.
          </span>
          <span className="inline sm:hidden">
            % of adverse effects in public applications.
          </span>
        </p>
      </section>

      <section>
        <div className="flex flex-row justify-center mb-[50px] block sm:hidden">
          <img src={CowImg} alt="cow" width={154} className="" />
        </div>
        <p class="sm:text-[30px] text-[18px] mb-[20px] text-center">
          Non-Military Applications
        </p>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-8 sm:text-[20px] text-[16px]">
          <div class="flex flex-col items-center">
            <img src={DiamondImg} alt="diamond" width={45} />
            <p class="mt-2">Project Code: Diamond Hooves</p>
            <p>Location: New Delhi, India</p>
            <p>Status: Success</p>
            <a href="#" className="text-[#5B4949]">
              SEE FILES
            </a>
          </div>

          <div class="flex flex-col items-center">
            <img src={AccessibilityImg} alt="accessibility" width={45} />
            <p class="mt-2">Project Code: Flip Big Milk</p>
            <p>Location: Wisconsin, USA</p>
            <p>Status: Approved</p>
            <a href="#" className="text-[#5B4949]">
              SEE FILES
            </a>
          </div>

          <div class="flex flex-col items-center">
            <img src={QuestionImg} alt="question" width={45} />
            <p class="mt-2">Project Code: Classified</p>
            <p>Location: Classified</p>
            <p>Status: Pending Approval</p>
            <p>NOT AVAILABLE</p>
          </div>
        </div>
      </section>

      <section class="mb-[70px] px-[40px]">
        <p class="sm:text-[30px] text-[18px] text-center mb-6">
          DECLASSIFIED PUBLICATIONS
        </p>
        <p class="sm:text-[20px] text-[12px]">
          Neuroscience and Cultural Symbols:
          <br />
          &nbsp;&nbsp;•&nbsp; Han, S., & Northoff, G. (2008). Culture-sensitive
          neural substrates of human cognition: A transcultural neuroimaging
          approach. Nature Reviews Neuroscience, 9(8), 646–654.
        </p>
        <p class="sm:text-[20px] text-[12px]">
          Cryptoeconomics and Behavioral Finance:
          <br />
          &nbsp;&nbsp;•&nbsp; Shiller, R. J. (2017). Narrative economics.
          American Economic Review, 107(4), 967–1004.
        </p>
        <p class="sm:text-[20px] text-[12px]">
          Fermat’s Last Theorem:
          <br />
          &nbsp;&nbsp;•&nbsp; Wiles, A. (1995). Modular elliptic curves and
          Fermat’s Last Theorem. Annals of Mathematics, 141(3), 443–551.
        </p>
      </section>
    </div>
  );
}
