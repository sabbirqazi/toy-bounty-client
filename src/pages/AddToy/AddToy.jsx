import { useForm } from "react-hook-form";
const AddToy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
   
    fetch("http://localhost:5000/alltoys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
   
   
   
   
    console.log(data)
};



  return (
    <div className="my-16 mx-auto flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center font-bold mb-10">Add a new toy</h1>
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
          />
        </div>
        <div>
          <label className="label">
            <span>Photo Url of Toy</span>
          </label>
          <input
          {...register("photoUrl", { required: true })}
          placeholder="PhotoUrl"
          className="input input-bordered input-secondary w-96 "
        />
        </div>
        <div>
          <label className="label">
            <span>Seller Name</span>
          </label>
          <input
            {...register("sellername")}
            placeholder="Seller Name"
            className="input input-bordered input-secondary w-96"
          />
        </div>
        <div>
          <label className="label">
            <span>Seller Email</span>
          </label>
          <input
          {...register("selleremail", { required: true })}
          placeholder="Seller Email"
          className="input input-bordered input-secondary w-96 "
        />
        </div>
        <div>
          <label className="label">
            <span>Category</span>
          </label>
          <input
          {...register("category", { required: true })}
          placeholder="Category"
          className="input input-bordered input-secondary w-96 "
        />
        </div>

        </div>

        {/* row-2 */}
        <div>

        <div>
          <label className="label">
            <span>Sub Category</span>
          </label>
          <input
          {...register("subcategory", { required: true })}
          placeholder="Sub Category"
          className="input input-bordered input-secondary w-96 "
        />
        </div> 
        <div>
          <label className="label">
            <span>Price</span>
          </label>
          <input
          {...register("price", { required: true })}
          placeholder="Price"
          className="input input-bordered input-secondary w-96 "
        />
        </div> 
        <div>
          <label className="label">
            <span>Available Quantity</span>
          </label>
          <input
          {...register("quantity", { required: true })}
          placeholder="Available Quantity"
          className="input input-bordered input-secondary w-96 "
        />
        </div> 
        <div>
          <label className="label">
            <span>Ratings</span>
          </label>
          <input
          {...register("rating", { required: true })}
          placeholder="Ratings"
          className="input input-bordered input-secondary w-96 "
        />
        </div> 
        <div>
          <label className="label">
            <span>Details Description</span>
          </label>
          <input
          {...register("photoUrl", { required: true })}
          placeholder="PhotoUrl"
          className="input input-bordered input-secondary w-96 "
        />
        </div> 
      


        </div>
        </div>
        <input className="btn btn-primary " type="submit" />
   
      </form>
    </div>
  );
};

export default AddToy;
