/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const UpdateToys = () => {
  const toy = useLoaderData();

  const { _id, price, quantity, details } = toy;

  const handleToyUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const price = form.price.value;

    const updatedToy = { price, quantity, details };

    fetch(`https://learning-toys-server.vercel.app/mytoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  useTitle('UpdateToy')
  return (
    <div className="my-10">
      <form onSubmit={handleToyUpdate} className="flex flex-col space-y-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-info w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-info w-96"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-info w-96"
              />
            </label>
          </div>
        </div>
        <input className="btn-main cursor-pointer" type="submit" value="Update Toy" />
      </form>
    </div>
  );
};

export default UpdateToys;
