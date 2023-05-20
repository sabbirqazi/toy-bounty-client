import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ScienceTab = () => {

    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/Science`)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setToys(result);
          });
      }, []);
    return (
        <div>
           <div className="flex justify-center gap-10 my-10">
        {toys?.map(
          (toy) => (
            <div key={toy._id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={toy.photoUrl}
                  alt="Toy"
                  className="object-fit"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{toy.name}</h2>
                <p>Price: ${toy.price}</p>
                <p>Rating: {toy.rating}</p>
                <div className="card-actions justify-end">
             <Link to={`/alltoys/${toy?._id}`}>
                    <button className="btn btn-primary ">
                     View Details
                    </button>
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