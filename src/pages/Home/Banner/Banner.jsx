import { HiChevronDoubleLeft, HiChevronDoubleRight} from "react-icons/hi2";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/close-up-boy-touching-digital-tablet-screen-white-desk_23-2148039919.jpg"
            className="w-full"
          />
          <div className="absolute w-full flex items-center h-full bg-gradient-to-b from-[#1a2a6c] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 flex flex-col items-center justify-center lg:ml-48">
              <h2 className="text-6xl font-bold text-center">
                Interesting Toys For Learning
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                 Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle  text-purple-400">
            <HiChevronDoubleLeft className="h-5 w-5"></HiChevronDoubleLeft>
            </a>
            <a href="#slide2" className="btn btn-circle text-purple-400">
            <HiChevronDoubleRight className="h-5 w-5"></HiChevronDoubleRight>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-vector/christmas-toys-background-flat-design_23-2148350472.jpg?w=1380&t=st=1684617137~exp=1684617737~hmac=8fe159291217397adac9b2c3387be5748a500ab147412183653a99bd81a6e6ad"
            className="w-full"
          />
          <div className="absolute w-full flex items-center h-full bg-gradient-to-b from-[#1a2a6c] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 flex flex-col items-center justify-center lg:ml-48">
              <h2 className="text-6xl font-bold text-center">
                Learn Easy, Play Cozy
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                 Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle  text-purple-400">
            <HiChevronDoubleLeft className="h-5 w-5"></HiChevronDoubleLeft>
            </a>
            <a href="#slide3" className="btn btn-circle  text-purple-400">
            <HiChevronDoubleRight className="h-5 w-5"></HiChevronDoubleRight>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-vector/young-girl-fixing-robot_1308-80979.jpg?w=826&t=st=1684617635~exp=1684618235~hmac=9ed5c7d806d9fb743b7c1e7605603933d11e864ae9a796c3273ee79b347ceb38"
            className="w-full"
          />
          <div className="absolute w-full flex items-center h-full bg-gradient-to-b from-[#1a2a6c] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 flex flex-col items-center justify-center lg:ml-48">
              <h2 className="text-6xl font-bold text-center">
                Do some Experiment and Learn
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle  text-purple-400">
            <HiChevronDoubleLeft className="h-5 w-5"></HiChevronDoubleLeft>
            </a>
            <a href="#slide1" className="btn btn-circle  text-purple-400">
            <HiChevronDoubleRight className="h-5 w-5"></HiChevronDoubleRight>
            </a>
          </div>
        </div>

        
      
      </div>
    </div>
  );
};

export default Banner;
