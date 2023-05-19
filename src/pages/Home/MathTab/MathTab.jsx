import { useEffect, useState } from "react";


const MathTab = () => {

    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/Math`)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setToys(result);
          });
      }, []);
    return (
        <div>
            <div>
            {toys?.map((toy) => 
                <div key={toy._id}>
              <h1>{toy.name}</h1>
            <p>{toy.sellername}</p>
            <p>{toy.selleremail}</p>
            <p>{toy.sellerphone}</p>
            <p>{toy.price}</p>
            <p>{toy.quantity}</p>
            <p>{toy.rating}</p>
            <img src={toy.photoUrl} alt="" />
                </div>
            )}
            </div>
        </div>
    );
};

export default MathTab;