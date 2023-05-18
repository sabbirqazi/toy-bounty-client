import { useLoaderData } from "react-router-dom";


const AllToys = () => {
    const alltoys = useLoaderData();
    return (
        <div>
            <h1>All Toy show here  {alltoys.length}</h1>
        </div>
    );
};

export default AllToys;