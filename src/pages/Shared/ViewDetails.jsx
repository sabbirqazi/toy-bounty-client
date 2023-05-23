 /* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const ViewDetails = () => {
    const [toy, setToy] = useState({})
    useTitle('Details')
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`https://learning-toys-server.vercel.app/alltoys/${id}`)
          .then((res) => res.json())
          .then((data) => setToy(data));
          
      }, []);
 

    return (
        <div className="my-20">
        <div className="flex items-center justify-center">
        <div className="flex items-center gap-10 bg-[#A7D1D2] rounded shadow-lg p-8">
          <div className="w-1/2">
            <img src={toy.photoUrl} alt={toy.name} className="h-96 w-96" />
          </div>
          <div className="w-1/2 ml-8">
            <h1 className="text-3xl font-bold mb-4">{toy.name}</h1>
            <p>
              <span className="font-bold">Price:</span> ${toy.price}
            </p>
            <p>
              <span className="font-bold">Quantity:</span> {toy.quantity}
            </p>
            <p>
              <span className="font-bold">Rating:</span> {toy.rating}
            </p>
            <p>
              <span className="font-bold">Seller Email:</span> {toy.selleremail}
            </p>
            <p>
              <span className="font-bold">Seller Name:</span> {toy.sellername}
            </p>
            <p>
              <span className="font-bold">Seller Phone:</span> {toy.sellerphone}
            </p>
            <p>
              <span className="font-bold">Subcategory:</span> {toy.subcategory}
            </p>
          </div>
        </div>
      </div>
      </div>
    );
};

export default ViewDetails;   