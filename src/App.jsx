import "./index.css";

function App() {
  let cards = [
    {
      img: "/card1.png",
      count: "5200+",
      disc: "Projects completed",
    },
    {
      img: "/card2.png",
      count: "500+",
      disc: "Active clients",
    },
    {
      img: "/card3.png",
      count: "4500+",
      disc: "Happy clients",
    },
  ];
  return (
    <div>
      <section className="container !mt-[51px]">
        <div className="navbar flex items-center justify-between ">
          <div className="logo">
            <img src="/logo.png" className=" w-[196px]" alt="My Image" />
          </div>
          <div className="links flex items-center gap-[60px]">
            <a className="font-medium text-sm text-[#F35F2F]" href="/home">
              Home
            </a>
            <a className="font-medium text-sm text-[#3d3d3f]" href="/about">
              Service
            </a>
            <a className="font-medium text-sm text-[#3d3d3f]" href="/design">
              Portfolio
            </a>
            <a className="font-medium text-sm text-[#3d3d3f]" href="/contact">
              Blog
            </a>
          </div>
          <button className="w-[118px] h-[42px] bg-[linear-gradient(180deg,#f35f2f_0%,rgba(243,95,47,0.75)_100%)] opacity-[0.85] px-6 py-3 rounded-[5px] text-white font-medium text-sm  ">
            Contact us
          </button>
        </div>
      </section>
      <section className="container !mt-[100px]">
        <div className="smartagency flex items-center justify-between ">
          <div className="left flex flex-col gap-[40px]">
            <h1 className="font-bold text-7xl text-[#3d3d3f]">
              Smart Web <br />
              Design Agency
            </h1>
            <p className="font-normal text-xl text-[#3d3d3f]">
              We will provide best web design and business devlopment <br />{" "}
              service clients expectation and satisfaction guarantee.
            </p>
            <button className="w-[219px] h-[53px] bg-[linear-gradient(180deg,#f35f2f_0%,rgba(243,95,47,0.75)_100%)] opacity-[0.85] px-6 py-3 rounded-[5px] text-white font-normal text-xl ">
              Free consultation
            </button>
          </div>
          <div className="right">
            <img src="/social.png" alt="" />
          </div>
        </div>
      </section>
      <section className="container !mt-[100px]">
        <h1 className="font-bold text-[40px] text-[#3d3d3f] text-center">
          We Provide the Best Web services
        </h1>
        <div className=" rounded-[17px] cards flex items-center justify-around !mt-[55px] border-2 border-solid border-[rgba(235,235,235,0.8)] h-[314px] w-full">
          {cards.map((card) => (
            <div className="flex flex-col items-center justify-center   ">
              <img className="w-[99px]" src={card.img} alt="" />
              <h1 className="font-bold text-4xl text-[#3d3d3f] !mt-[23px] !mb-[13px]">
                {card.count}
              </h1>
              <p className="font-normal text-2xl text-[#3d3d3f] opacity-70">
                {card.disc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="container !mt-[60px]">
        <h1 className="font-bold text-[40px] text-[#3d3d3f] text-center">
          What Service We’re Offering
        </h1>
        <div className="cards !mt-[100px] flex items-center justify-between">
          <div className="card bg-white rounded-[23px] w-fit  !px-[71px] !py-[75px] relative">
            <div className="forimg absolute left-[33%] top-[-60px] w-fit !p-[47px] bg-white rounded-full">
              <img src="/website-design.svg" alt="" />
            </div>
            <div className="text-center flex flex-col items-center justify-center  !mt-[20px]">
              <h1 className="font-bold text-2xl text-[#3d3d3f]">
                Website design
              </h1>
              <p className="font-normal text-base leading-[162%]  text-[#595959] !mt-[10px] !mb-[27px]">
                Need something changed or is there <br /> something not quite
                working the <br /> best service
              </p>
              <button
                className="flex items-center justify-center 
              bg-[#f1f1f5] rounded-full !px-[10px] !py-[9px]"
              >
                <i class="fa-solid fa-arrow-right text-[#595959]"></i>
              </button>
            </div>
          </div>
          <div className="card bg-white rounded-[23px] w-fit  !px-[71px] !py-[75px] relative">
            <div className="forimg absolute left-[33%] top-[-60px] w-fit !p-[47px] bg-white rounded-full">
              <img src="/website-design.svg" alt="" />
            </div>
            <div className="text-center flex flex-col items-center justify-center  !mt-[20px]">
              <h1 className="font-bold text-2xl text-[#3d3d3f]">
                Web development
              </h1>
              <p className="font-normal text-base leading-[162%]  text-[#595959] !mt-[10px] !mb-[27px]">
                Need something changed or is there <br /> something not quite
                working the <br /> best service
              </p>
              <button
                className="flex items-center justify-center 
              bg-[#f1f1f5] rounded-full !px-[10px] !py-[9px]"
              >
                <i class="fa-solid fa-arrow-right text-[#595959]"></i>
              </button>
            </div>
          </div>
          <div className="card bg-white rounded-[23px] w-fit  !px-[71px] !py-[75px] relative">
            <div className="forimg absolute left-[33%] top-[-60px] w-fit !p-[47px] bg-white rounded-full">
              <img src="/website-design.svg" alt="" />
            </div>
            <div className="text-center flex flex-col items-center justify-center  !mt-[20px]">
              <h1 className="font-bold text-2xl text-[#3d3d3f]">
                Web application
              </h1>
              <p className="font-normal text-base leading-[162%]  text-[#595959] !mt-[10px] !mb-[27px]">
                Need something changed or is there <br /> something not quite
                working the <br /> best service
              </p>
              <button
                className="flex items-center justify-center 
              bg-[#f1f1f5] rounded-full !px-[10px] !py-[9px]"
              >
                <i class="fa-solid fa-arrow-right text-[#595959]"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
