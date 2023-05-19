import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const alltoys = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl text-center mt-10">All Toys</h1>

      <div className="m-10">
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
            {alltoys?.map((toys, index) => (
              <tr
                key={toys._id}
                className="bg-gray-100 hover:bg-gray-200 text-center transition-colors duration-200"
              > <td className="px-6 py-4">{index +1}</td>
                <td className="px-6 py-4">
                  <h3 className="font-semibold">{toys.sellername}</h3>
                </td>
                <td className="px-6 py-4">{toys.name}</td>
                <td className="px-6 py-4">{toys.subcategory}</td>
                <td className="px-6 py-4">{toys.price}</td>
                <td className="px-6 py-4">{toys.quantity}</td>
                <td className="px-6 py-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
