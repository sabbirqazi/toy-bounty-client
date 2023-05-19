/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import UpdateToys from "../../UpdateToys/UpdateToys";
import { Link } from "react-router-dom";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

   const url = `http://localhost:5000/mytoys?selleremail=${user?.email}`
 /*  const [control, setControl] = useState(false); */
//get the data using email for specific user
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);

//update data for specific user 

const handleToyUpdate = (data) => {
    console.log(data);

  };
  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`http://localhost:5000/mytoys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = toys.filter(toy => toy._id !== id);
                    setToys(remaining);
                }
            })
    }
}

  return (
    <div className="m-10">
    <h1 className="text-2xl mb-10 text-center">My Selected Toys</h1>

    <table className="table-auto w-full bg-white shadow-md">
      <thead>
        <tr>
          <th className="px-6 py-4">#</th>
          <th className="px-6 py-4">Seller Name</th>
          <th className="px-6 py-4">Toy Name</th>
          <th className="px-6 py-4">Sub-category</th>
          <th className="px-6 py-4">Price</th>
          <th className="px-6 py-4">Available Quantity</th>
          <th className="px-6 py-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {toys.map((toy, index) => (
          <tr key={toy._id} className="bg-gray-100 hover:bg-gray-200 text-center">
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">{toy.sellername}</td>
            <td className="px-6 py-4">{toy.name}</td>
            <td className="px-6 py-4">{toy.subcategory}</td>
            <td className="px-6 py-4">{toy.price}</td>
            <td className="px-6 py-4">{toy.quantity}</td>
            <td className="px-6 py-4">
            <Link to={`/${toy?._id}`}>
                    <button className="btn btn-primary ">
                     Edit
                    </button>
                  </Link>
              
             {/*  <UpdateToys 
              toy={toy} 
              handleToyUpdate={handleToyUpdate}
              ></UpdateToys> */}
            </td>
            <td className="px-6 py-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

   
  </div>
  );
};

export default MyToy;
