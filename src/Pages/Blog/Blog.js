
import React from "react";

const Blog = () => {
    return (
        <div className="container">
            <h3 className="text-center my-10 lg:text-4xl text-3xl font-semibold">Some Important Questions You <br/>Should Know About !!</h3>

            <article className= "mx-auto lg:w-3/4 w-10/12 rounded-lg p-10 mb-5 bg-gray-300 bg-opacity-50"
        
      >
        <h2 className= "text-center text-3xl pb-5 text-cyan-800">what is `cors`?</h2>
        <p>
          <h4>Cross-Origin Resource Sharing (CORS)</h4>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </article>
        </div>
    );
};

export default Blog;