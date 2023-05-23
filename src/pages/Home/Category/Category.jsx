/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
const Category = ({ toy }) => {
  // Display only the first two toys
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="flex flex-col ml-3 gap-4 md:flex-row md:justify-center my-10">
        <div
          key={toy._id}
          className="card lg:card-side  bg-base-100 hover:bg-[#E0F4F5] shadow-xl"
          data-aos="fade-left"
        >
          <figure>
            <img src={toy.photoUrl} alt="Toy" className="w-56 h-56 p-5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{toy.name}</h2>
            <p>Price: ${toy.price}</p>
            <p className="flex items-center gap-1">
              {" "}
              Rating: {toy.rating}{" "}
              <span>
                <AiOutlineStar className="h-5 w-5 text-yellow-400"></AiOutlineStar>
              </span>{" "}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/alltoys/${toy?._id}`}>
                <button className="btn-second">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
