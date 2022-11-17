import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto mb-24">
      <h3 className="text-center my-10 lg:text-4xl text-3xl font-semibold">
        Some Important Questions You <br />
        Should Know About !!
      </h3>

      <article className="mx-auto lg:w-3/4 w-10/12 rounded-lg lg:p-10 p-5 mb-5 bg-gray-300 bg-opacity-50">
        <h2 className="text-center font-semibold text-3xl pb-5 text-cyan-800">
          what is the difference between SQL and NoSQL?
        </h2>
        <p>
          Remember that SQL dialects share many properties though they interface
          with distinct databases. Flavors of NoSQL vary far more across their
          attendant systems, so comparison can be more useful between multiple
          non-relational technologies vs. SQL generally.
        </p>
        <br />
        <p>
          Perhaps the most recognizable SQL dialect is MySQL, an open source and
          free RDBMS (though available through proprietary licenses as well).
          Its use is widespread in web applications, and it is known for
          compatibility, support, and good performance in the average case.
          MySQL has also made concessions to NoSQL practitioners with features
          like a JSON data type, the “Document Store,” and support for sharding
          (horizontal scaling).
        </p>
        <br />
        <p>
          On the non-relational side, MongoDB is primarily a document store
          containing JSON-like structures and a JavaScript interface. It’s known
          for being user-friendly (less administration overhead), performant for
          simple queries, and flexible thanks to its NoSQL underpinnings. Great
          for hierarchical data storage, it also supports familiar relational
          concepts from indexing, to aggregation, to some measure of ACID
          compliance.
        </p>
      </article>
      <article className="mx-auto lg:w-3/4 w-10/12 rounded-lg lg:p-10 p-5 mb-5 bg-gray-300 bg-opacity-50">
        <h2 className="text-center font-semibold text-3xl pb-5 text-cyan-800">
          What is the difference between javascript and Node JS?
        </h2>
        <p>
          NodeJS: NodeJS is a cross-platform and opensource Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development.
        </p><br />
        <p>
          Javascript: Javascript is a Scripting language. It is mostly
          abbreviated as JS. It can be said that Javascript is the updated
          version of the ECMA script. Javascript is a high-level programming
          language that uses the concept of Oops but it is based on prototype
          inheritance.
        </p>
      </article>
      <article className="mx-auto lg:w-3/4 w-10/12 rounded-lg lg:p-10 p-5 mb-5 bg-gray-300 bg-opacity-50">
        <h2 className="text-center font-semibold text-3xl pb-5 text-cyan-800">
          What is JWT, and how does it work?
        </h2>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed.
        </p>
        <p>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted. A JWT is a string made
          up of three parts, separated by dots (.), and serialized using base64.
          In the most common serialization format, compact serialization, the
          JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you
          will get two JSON strings: <br />
           1. The header and the payload. <br />
            2. The
          signature.
        </p>
      </article>
      <article className="mx-auto lg:w-3/4 w-10/12 rounded-lg lg:p-10 p-5 mb-5 bg-gray-300 bg-opacity-50">
        <h2 className="text-center font-semibold text-3xl pb-5 text-cyan-800">
        How does Node JS handle multiple requests at the same time?
        </h2>
        <p>
        Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds? No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded. <br />
         Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.
        </p>
      </article>
    </div>
  );
};

export default Blog;
