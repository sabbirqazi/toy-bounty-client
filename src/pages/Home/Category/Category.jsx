/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Category = ({ toy }) => {
  // Display only the first two toys
  return (
    <div>
      <div className="flex flex-col ml-3 gap-4 md:flex-row md:justify-center my-10">
        <div key={toy._id} className="card w-64 bg-base-100 shadow-xl">
          <figure>
            <img src={toy.photoUrl} alt="Toy" className="object-fit" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{toy.name}</h2>
            <p>Price: ${toy.price}</p>
            <p>Rating: {toy.rating}</p>
            <div className="card-actions justify-end">
              <Link to={`/alltoys/${toy?._id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;