import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllToys = () => {
  /*   const loadeAlltoys = useLoaderData(); */
  /* console.log(loadeAlltoys) */

  const [activeTab, setActiveTab] = useState("ascending");
  const [alltoys, setAlltoys] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);
  const [searchText, setSearchText] = useState("");
  /*   console.log(searchText) */

  const handleSearch = () => {
    fetch(`http://localhost:5000/getToyByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
        console.log(data);
      });
  };
  /* sort */
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        /* console.log(result); */
        setAlltoys(result);
      });
  }, [activeTab]);

  const handleSeeMore = () => {
    setDisplayCount(alltoys?.length);
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      
      <div className="input-group flex justify-center my-10">
        
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search…"
          className="input input-bordered"
        />{" "}
        <button onClick={handleSearch} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {/* sort */}
      <h1 className="text-center text-md">Sorting...</h1>
      <div className="flex justify-center">

        <div
          onClick={() => handleTabClick("ascending")}
          className="px-4 py-2 border btn-main rounded-lg m-2 cursor-pointer "
        >
          Ascending
        </div>
        <div
          onClick={() => handleTabClick("descending")}
          className="px-4 py-2 border btn-main rounded-lg m-2 cursor-pointer "
        >
          Discending
        </div>
      </div>
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
            {alltoys?.slice(0, displayCount).map((toys, index) => (
              <tr
                key={toys._id}
                className="bg-gray-100 hover:bg-gray-200 text-center transition-colors duration-200"
              >
                {" "}
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  <h3 className="font-semibold">{toys.sellername}</h3>
                </td>
                <td className="px-6 py-4">{toys.name}</td>
                <td className="px-6 py-4">{toys.subcategory}</td>
                <td className="px-6 py-4">{toys.price}</td>
                <td className="px-6 py-4">{toys.quantity}</td>
                <td className="px-6 py-4">
                  <Link to={`/alltoys/${toys?._id}`}>
                    <button className=" btn-second">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center my-5">
        <button onClick={handleSeeMore} className="btn-main">
          See More
        </button>
      </div>
    </div>
  );
};

export default AllToys;
