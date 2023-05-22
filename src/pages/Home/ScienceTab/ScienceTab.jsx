/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScienceTab = ({tabIndex}) => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys1/${tabIndex}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setToys(result);
      });
  }, []);

  const displayedToys = toys.slice(0, 2); // Display only the first two toys

  return (
    <div>
      <div className="flex flex-col ml-3  gap-4 md:flex-row md:justify-center my-10">
        {displayedToys.map((toy) => (
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
        ))}
      </div>
    </div>
  );
};

export default ScienceTab;
