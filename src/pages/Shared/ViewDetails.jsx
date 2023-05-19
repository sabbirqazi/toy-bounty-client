 /* eslint-disable react-hooks/exhaustive-deps */
/* import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
    const [toy, setToy] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/${id}`)
          .then((res) => res.json())
          .then((data) => setToy(data));
          console.log(toy)
      }, []);
    return (
        <div>
            <h1>This is secret</h1>
        </div>
    );
};

export default ViewDetails;   */