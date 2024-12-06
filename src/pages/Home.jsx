import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "../components";

import CiaLogoImg from "../assets/img/home-cia-logo.svg";
import CowImg from "../assets/img/home-cow.svg";
import DiamondImg from "../assets/img/home-diamond.svg";
import AccessibilityImg from "../assets/img/home-accessibility.svg";
import QuestionImg from "../assets/img/home-question.svg";

export function Home() {
  return (
    <div className="bg-[#F5F1DB] flex flex-col items-center gap-[70px]">
      {/* -- Header -- */}

      {/* -- Main Content -- */}
      <section class="flex flex-col items-center gap-[30px] mt-[70px] max-w-[1150px]">
        <div className="flex flex-row gap-[32px]">
          <img src={CiaLogoImg} width={117} height={117} alt="cia-logo" />
          <p className="text-[40px] text-[#5B4949]">
            <span>DECLASSIFIED: REQUEST OF</span>
            <span className="bg-[#5B4949] w-full px-[200px]"></span>
            <br />
            <span className="uppercase">
              Cultural biohacking project #a0392
            </span>
          </p>
        </div>
        <div className="flex lg:flex-row md:flex-col ml-[149px]  justify-between gap-[10px]">
          <p className="text-[20px] text-[#5B4949] leading-tight max-w-[730px]">
            <span className="bg-[#5B4949] px-[200px]"></span>
            <span>cold war ultimate weapon,</span>
            <span> discovered during Operation Paperclip by</span>
            <span className="bg-[#5B4949] px-[120px]"></span>
            <br />
            <span className="bg-[#5B4949] px-[220px]"></span>
            <span>has been deprecated </span>
            <br />
            <span className="bg-[#5B4949] w-full px-[320px]"></span>
            <br />
            <span>
              and other cognitive breakthroughs during Project Code: MK Ultra.
            </span>
          </p>
          <img src={CowImg} alt="cow" width={154} />
        </div>
        <Button text="BEGIN COGNITIVE MESMERISM MODULE #A4928" />
        <p className="text-[20px] text-[#5B4949] leading-tight max-w-[800px] px-[50px] text-center">
          <span>WARNING:</span>
          <span className="bg-[#5B4949] px-[130px]"></span>
          <span>and</span>
          <span className="bg-[#5B4949] px-[140px]"></span>
          <br />
          <span> approve subjects available for testing</span>
          <span className="bg-[#5B4949] px-[120px]"></span>
          <br />
          <span className="bg-[#5B4949] px-[80px]"></span>
          <span>range of adverse effects in public applications.</span>
        </p>
      </section>

      <section>
        <p class="text-[30px] mb-[20px] text-center">
          Non-Military Applications
        </p>
        <div class="grid grid-cols-3 gap-8 text-[20px]">
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
        <p class="text-[30px] text-center mb-6">DECLASSIFIED PUBLICATIONS</p>
        <p class="text-[20px]">
          Neuroscience and Cultural Symbols:
          <br />
          &nbsp;&nbsp;•&nbsp; Han, S., & Northoff, G. (2008). Culture-sensitive
          neural substrates of human cognition: A transcultural neuroimaging
          approach. Nature Reviews Neuroscience, 9(8), 646–654.
        </p>
        <p class="text-[20px]">
          Cryptoeconomics and Behavioral Finance:
          <br />
          &nbsp;&nbsp;•&nbsp; Shiller, R. J. (2017). Narrative economics.
          American Economic Review, 107(4), 967–1004.
        </p>
        <p class="text-[20px]">
          Fermat’s Last Theorem:
          <br />
          &nbsp;&nbsp;•&nbsp; Wiles, A. (1995). Modular elliptic curves and
          Fermat’s Last Theorem. Annals of Mathematics, 141(3), 443–551.
        </p>
      </section>
    </div>
  );
}
