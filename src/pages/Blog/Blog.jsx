const Blog = () => {
  return (
    <div className="mx-auto my-10 max-w-2xl bg-gray-100 p-6">
   <h1 className="text-4xl font-bold text-center my-8">Blog For Full Stack Development</h1>
      
      
      
      <div className="my-4">
        <h2 className="text-2xl font-bold mb-2">Access Token and Refresh Token: Understanding their Purpose and Functionality</h2>
        <p>
          <strong>What is an access token and refresh token?</strong><br />
          An access token is a credential that is used to authenticate and authorize a user or an application to access protected resources. Refresh token, on the other hand, is a credential used to obtain a new access token without requiring the user to re-authenticate.
        </p>
        <p>
          <strong>How do they work and where should we store them on the client-side?</strong><br />
          The access token is included in requests to authorize access to protected resources, while the refresh token is stored securely on the client-side. It is commonly stored in an HTTP-only cookie or local storage with appropriate security measures to prevent unauthorized access.
        </p>
      </div>
      
      <div className="my-4">
        <h2 className="text-2xl font-bold mb-2">Comparing SQL and NoSQL Databases: Understanding the Differences</h2>
        <p>
          SQL databases are based on the relational model and use tables to store data, enforcing data consistency through predefined schemas. NoSQL databases, on the other hand, provide a flexible and schema-less approach for data storage, allowing for scalability and dynamic changes to data structure.
        </p>
      </div>
      
      <div className="my-4">
        <h2 className="text-2xl font-bold mb-2">What is Express.js?</h2>
        <p>
          Express.js is a fast and minimalist web application framework for Node.js. It provides a set of robust features for web and mobile applications, making it easier to build APIs, handle routes, and manage middleware.
        </p>
      </div>
      
      <div className="my-4">
        <h2 className="text-2xl font-bold mb-2">What is Nest.js?</h2>
        <p>
          Nest.js is a progressive TypeScript-based web application framework that is built with a focus on developer productivity and scalability. It is inspired by Angular's architecture and uses decorators and modules to create highly maintainable and scalable server-side applications.
        </p>
      </div>
      
      <div className="my-4">
        <h2 className="text-2xl font-bold mb-2">What is MongoDB aggregate and how does it work?</h2>
        <p>
          MongoDB's aggregate function allows you to perform advanced data aggregation operations on a collection. It enables you to process and transform data using various stages such as filtering, grouping, sorting, and performing mathematical operations. Aggregation pipelines are defined as an array of stages, with each stage modifying the data as it passes through the pipeline.
        </p>
      </div>
    </div>
  );
};

export default Blog;
