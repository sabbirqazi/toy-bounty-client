/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */


const ToysRow = ({toy, index, handleDelete}) => {

const { _id, sellername,name,subcategory,price,quantity} = toy;
    return (
        <tr  className="bg-gray-100 hover:bg-gray-200 text-center">
        <td className="px-6 py-4">{index + 1}</td>
        <td className="px-6 py-4">{sellername}</td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{subcategory}</td>
        <td className="px-6 py-4">{price}</td>
        <td className="px-6 py-4">{quantity}</td>
        <td className="px-6 py-4">
      {/*   <Link to={`/${toy?._id}`}>
                <button className="btn btn-primary ">
                 Edit
                </button>
              </Link> */}
          
         {/*  <UpdateToys 
          toy={toy} 
          handleToyUpdate={handleToyUpdate}
          ></UpdateToys> */}
        </td>
        <td className="px-6 py-4">
          <button  onClick={() => handleDelete(_id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" >
            Delete
          </button>
        </td>
      </tr>
    );
};

export default ToysRow;