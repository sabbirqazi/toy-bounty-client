import { useLoaderData } from "react-router-dom";


const AllToys = () => {
    const alltoys = useLoaderData();
    return (
        <div>
            <h1 className="text-5xl text-center mt-10">All Toy show here  {alltoys.length}</h1>

            <div className="m-20 grid grid-cols-4">
                {
                    alltoys.map(toys => 
                        <div key={toys._id} className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between mb-4">
                          <h3 className="text-lg font-semibold">{toys.sellername}</h3>
                        </div>
                        <div className="mb-2">
                          <p className="text-gray-600 mb-1">Toy Name:</p>
                          <p className="font-semibold">{toys.name}</p>
                        </div>
                        <div className="mb-2">
                          <p className="text-gray-600 mb-1">Sub-category:</p>
                          <p className="font-semibold">{toys.subcategory}</p>
                        </div>
                        <div className="mb-2">
                          <p className="text-gray-600 mb-1">Price:</p>
                          <p className="font-semibold">{toys.price}</p>
                        </div>
                        <div className="mb-2">
                          <p className="text-gray-600 mb-1">Available Quantity:</p>
                          <p className="font-semibold">{toys.quantity}</p>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                          View Details
                        </button>
                      </div>
                      
                      )}
            </div>
        </div>
    );
};

export default AllToys;