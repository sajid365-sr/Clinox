import { Avatar, Carousel, Rating } from "flowbite-react";
import React, { useEffect, useState } from "react";


const ClientSay = ({ service }) => {
  
  const [clients, setClients] = useState([]);

  const { _id } = service;

  useEffect(() => {
    fetch(`https://clinox.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
      });
  }, [_id, clients]);

  return (
    <div className="container mx-auto mb-24 lg:mt-32 mt-24">
      <h1 className="lg:text-5xl text-4xl text-[#0E3D4B] text-center mb-10 font-medium">
        Whats my clients say
      </h1>

      <div className="grid lg:h-56 h-96  grid-cols-1 lg:grid-cols-2  gap-4 2xl:h-96">
        <Carousel>
          {clients.length > 0
            ? clients.map((client) => (
                <div
                  key={client._id}
                  className="bg-[#0E3D4B] rounded-lg lg:p-32 py-10 px-5 w-11/12 lg:w-full  text-gray-400"
                >
                  <div className="flex justify-center items-center flex-col">
                    {<Avatar img={client.photo} rounded={true} size="lg" />}
                    <Rating className="my-5">
                      {[...new Array(client.ratings).keys()].map((rating) => (
                        <span key={rating}>
                          <Rating.Star />
                        </span>
                      ))}
                    </Rating>
                    <p className="text-center mb-5">{client.feedback}</p>
                    <p className="text-white">{client.name}</p>
                    <p className="text-center">{client.address}</p>
                  </div>
                </div>
              ))
            : [...new Array(3).keys()].map((fClient) => (
                <div
                  key={fClient}
                  className="bg-[#0E3D4B] rounded-lg lg:p-32 py-10 px-5 w-11/12 lg:w-full  text-gray-400"
                >
                  <div className="flex justify-center items-center flex-col">
                    <Avatar rounded={true} size="lg" />

                    <Rating className="my-5">
                      {[...new Array(5).keys()].map((number) => (
                        <span key={number}>
                          <Rating.Star />
                        </span>
                      ))}
                    </Rating>
                    <p className="text-center mb-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolores eveniet pariatur, ipsam necessitatibus porro
                      cumque qui numquam beatae ullam ut ratione iure ea ad
                      distinctio eaque similique sed temporibus nisi.
                    </p>
                    <p className="text-white">Unknown</p>
                    <p className="text-center">Unknown</p>
                  </div>
                </div>
              ))}
        </Carousel>

        <Carousel>
          {clients.length > 0
            ? clients.map((client) => (
                <div
                  key={client._id}
                  className="bg-[#0E3D4B] rounded-lg lg:p-32 py-10 px-5 w-11/12 lg:w-full  text-gray-400"
                >
                  <div className="flex justify-center items-center flex-col">
                    {<Avatar img={client.photo} rounded={true} size="lg" />}
                    <Rating className="my-5">
                      {[...new Array(client.ratings).keys()].map((rating) => (
                        <span key={rating}>
                          <Rating.Star />
                        </span>
                      ))}
                    </Rating>
                    <p className="text-center mb-5">{client.feedback}</p>
                    <p className="text-white">{client.name}</p>
                    <p className="text-center">{client.address}</p>
                  </div>
                </div>
              ))
            : [...new Array(3).keys()].map((fClient) => (
                <div
                  key={fClient}
                  className="bg-[#0E3D4B] rounded-lg lg:p-32 py-10 px-5 w-11/12 lg:w-full  text-gray-400"
                >
                  <div className="flex justify-center items-center flex-col">
                    <Avatar rounded={true} size="lg" />

                    <Rating className="my-5">
                      {[...new Array(5).keys()].map((number) => (
                        <span key={number}>
                          <Rating.Star />
                        </span>
                      ))}
                    </Rating>
                    <p className="text-center mb-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolores eveniet pariatur, ipsam necessitatibus porro
                      cumque qui numquam beatae ullam ut ratione iure ea ad
                      distinctio eaque similique sed temporibus nisi.
                    </p>
                    <p className="text-white">Unknown</p>
                    <p className="text-center">Unknown</p>
                  </div>
                </div>
              ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientSay;
