import { Avatar, Carousel, Rating } from "flowbite-react";
import React, { useEffect, useState } from "react";

const ClientSay = () => {

    const [clients1, setClients1] = useState([]);
    const [clients2, setClients2] = useState([]);


    useEffect( () =>{
        fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => setClients1(data.results))
    } , [])
    
    useEffect( () =>{
        fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => setClients2(data.results))
    } , [])

    

  return (
    <div className="container mx-auto mb-24 lg:mt-32 mt-24">
      <h1 className="lg:text-5xl text-4xl text-[#0E3D4B] text-center mb-10 font-medium">
        Whats my clients say
      </h1>
      
      <div className="grid lg:h-56 h-96  grid-cols-1 lg:grid-cols-2  gap-4 2xl:h-96">
        <Carousel>
          {
              clients1.map(client =>
            
                <div key={client.id.value} className="bg-[#0E3D4B] rounded-lg lg:p-32 py-10 px-5 w-11/12 lg:w-full  text-gray-400">
            <div className="flex justify-center items-center flex-col">
              <Avatar
                img={client.picture.large}
                rounded={true}
                size="lg"
                
              />
              <Rating className="my-5">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
              <p className="text-center mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi incidunt dolorum alias consequuntur dolores officiis!
              </p>
              <p className="text-white">{client.name.first + ' ' + client.name.last}</p>
              <p className="text-center">{client.location.state + ' ' + client.location.country}</p>
            </div>
          </div> )
          }
         
          
        </Carousel>
       
      
        <Carousel className="hidden lg:block">
          {
              clients2.map(client =>
                
                <div key={client.id.value}  className="bg-[#0E3D4B] p-32 text-gray-400">
            <div className="flex justify-center items-center flex-col">
              <Avatar
                img={client.picture.large}
                rounded={true}
                size="lg"
                
              />
              <Rating className="my-5">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
              <p className="text-center mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi incidunt dolorum alias consequuntur dolores officiis!
              </p>
              <p className="text-white">{client.name.first + ' ' + client.name.last}</p>
              <p className="text-center">{client.location.state + ' ' + client.location.country}</p>
            </div>
          </div> )
          }
         
          
        </Carousel>
       
      
      </div>
      
    </div>
  );
};

export default ClientSay;
