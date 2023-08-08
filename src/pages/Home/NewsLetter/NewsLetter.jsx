 const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#A7D1D2] rounded-lg lg:p-20 p-10 mb-4 ">
      <h2 className="text-5xl mb-2">Left <span className="text-6xl text-fuchsia-500 font-bold ">21</span> Days</h2>
      <p className="text-lg mb-4">We’re working on a new and exciting product that we think you’ll really like! Enter your email address to be the first to know when we launch it.</p>
       <div className="flex gap-2 mx-10 p-5">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary max-w-xs lg:w-96"
          />
          <button className="btn btn-primary w-32">Subscribe</button>
        </div>
    </div>
  );
};

export default NewsLetter;
 

