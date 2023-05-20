/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

import ToysRow from "./ToysRow";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `http://localhost:5000/mytoys?selleremail=${user?.email}`;
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== toys?._id);
              setToys(remaining);
            }
          });
      }
    });
  };

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
            <ToysRow
              key={toy._id}
              toy={toy}
              index={index}
              handleDelete={handleDelete}
            ></ToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
