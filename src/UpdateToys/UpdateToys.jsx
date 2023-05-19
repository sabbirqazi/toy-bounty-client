/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const UpdateToys = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5"
      >
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="flex gap-10">
          <div>
            <div>
              <label className="label">
                <span>Name of Toy</span>
              </label>
              <input
                {...register("name")}
                placeholder="Name of Toy"
                className="input input-bordered input-secondary w-96"
                defaultValue={props?.toy?.name}
              />
            </div>{" "}
            */
            <div>
              <input
                className="text-input hidden"
                {...register("_id")}
                value={props?.toy?._id}
              />
              <label className="label">
                <span>Photo Url of Toy</span>
              </label>
              <input
                {...register("photoUrl", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered input-secondary w-96"
                defaultValue={props?.toy?.photoUrl}
              />
            </div>
            <div>
              <label className="label">
                <span>Seller Phone</span>
              </label>
              <input
                {...register("sellerphone", { required: true })}
                placeholder="Seller Phone"
                className="input input-bordered input-secondary w-96"
                defaultValue={props?.toy?.sellerphone}
              />
            </div>
          </div>

          <div>
            <div>
              <label className="label">
                <span>Sub Category</span>
              </label>
              <select
                className="input input-bordered input-secondary w-96"
                {...register("subcategory")}
                defaultValue={props?.toy?.subcategory}
              >
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span>Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered input-secondary w-96"
              />
            </div>
            <div>
              <label className="label">
                <span>Available Quantity</span>
              </label>
              <input
                {...register("quantity", { required: true })}
                placeholder="Available Quantity"
                className="input input-bordered input-secondary w-96"
              />
            </div>
            <div>
              <label className="label">
                <span>Ratings</span>
              </label>
              <input
                {...register("rating", { required: true })}
                placeholder="Ratings"
                className="input input-bordered input-secondary w-96"
              />
            </div>
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Update Toy" />
      </form>
    </div>
  );
};

export default UpdateToys;
