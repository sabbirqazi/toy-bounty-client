const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#A7D1D2] rounded-lg lg:p-20 p-10 mb-4 ">
      <h2 className="text-2xl mb-2">Left <span className="text-5xl text-fuchsia-500 font-bold ">21</span> Days</h2>
      <p className="text-lg mb-4">We’re working on a new and exciting product that we think you’ll really like! Enter your email address to be the first to know when we launch it.</p>
      <form action="your-server-endpoint" method="post" className="flex flex-col sm:flex-row">
        <input type="email" name="email" placeholder="Enter your email address" required className="mb-2 sm:mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        <button className="btn btn-outline bg-fuchsia-400 text-white px-6  rounded-md hover:bg-fuchsia-500 transition duration-300">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
