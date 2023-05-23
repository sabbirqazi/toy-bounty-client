import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="carousel w-full  h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-vector/children-day-children-are-lying-playing-lawn-with-toys-plants-background_432516-1887.jpg"
            className="w-full"
          />
          <div className="absolute w-full flex items-center h-full ">
            <div className="text-white space-y-10 flex flex-col items-center justify-center lg:ml-44">
              <div data-aos="fade-left">
                <h2 className="text-6xl font-bold text-center">
                  A New Box Of Toy{" "}
                  <span className="text-[#D25380]">Everymonth!!!</span>
                </h2>
              </div>
              <p className="mt-3 mb-20 text-center" data-aos="fade-right">
                Some toys tend to stimulate the sense of humour, wonder,
                discovery, reasoning, etc., <br /> which are vital for the
                proper overall growth of children.
              </p>
              <div className="text-center mr-10 mt-10" data-aos="fade-left">
                <button className="btn-main ">Get Yours</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-[#63898C] text-white"
            >
              <HiChevronDoubleLeft className="h-5 w-5"></HiChevronDoubleLeft>
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#63898C] text-white"
            >
              <HiChevronDoubleRight className="h-5 w-5"></HiChevronDoubleRight>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.kidslovewhat.com/wp-content/uploads/2019/02/ultimate-100-science-experiments-for-kids.jpg"
            className="w-full"
          />
          <div className="absolute w-full flex items-center h-full ">
            <div className="text-white space-y-7 flex flex-col items-center justify-center lg:ml-72">
              <h2
                className="text-6xl font-bold text-center text-[#D25380]"
                data-aos="fade-left"
              >
                <span className="text-white">Learn Easy</span>, Play Cozy!!!
              </h2>
              <p
                className="mt-3 text-[#96dae9] mb-20 text-center"
                data-aos="fade-right"
              >
                Some toys tend to stimulate the sense of humour, wonder,
                discovery, reasoning, etc., <br /> which are vital for the
                proper overall growth of children.
              </p>
              <div className="text-center mr-10 mt-10" data-aos="fade-left">
                <button className="btn-main">Get Yours</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle  bg-[#63898C] text-white"
            >
              <HiChevronDoubleLeft className="h-5 w-5"></HiChevronDoubleLeft>
            </a>
            <a
              href="#slide3"
              className="btn btn-circle  bg-[#63898C] text-white"
            >
              <HiChevronDoubleRight className="h-5 w-5"></HiChevronDoubleRight>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/boy-girl-playing-with-handmade-robot-diy-robotics-projects-fun-development-after-school-leisure_199620-5805.jpg"
            className="w-full"
          />
          <div className="absolute w-full flex items-center h-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center lg:ml-56">
              <h2
                className="text-6xl font-bold text-center text-[#D25380]"
                data-aos="fade-left"
              >
                <span className="text-[#63898C]">Do Some Experiment</span> and
                Learn!!
              </h2>
              <p
                className="mt-3 text-[#3C486B] mb-20 text-center"
                data-aos="fade-right"
              >
                Some toys tend to stimulate the sense of humour, wonder,
                discovery, reasoning, etc., <br /> which are vital for the
                proper overall growth of children.
              </p>
              <div className="text-center mr-10 mt-10" data-aos="fade-left">
                <button className="btn-main">Get Yours</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle  bg-[#63898C] text-white"
            >
              <HiChevronDoubleLeft className="h-5 w-5"></HiChevronDoubleLeft>
            </a>
            <a
              href="#slide1"
              className="btn btn-circle  bg-[#63898C] text-white"
            >
              <HiChevronDoubleRight className="h-5 w-5"></HiChevronDoubleRight>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
