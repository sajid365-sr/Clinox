import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import signUpGraphic from "../../../../Assets/Login/SignUp.jpg";
import { UserContext } from "../../../../contexts/AuthContext/AuthContext";

const SignUp = () => {

    const [error, setError] = useState("");
    const [accepted, setAccepted] = useState(false);
    const {createUser, setUser} = useContext(UserContext);
    const navigate = useNavigate();



    const handleSubmit = event =>{
        event.preventDefault();

    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

        if(password === confirm){
            createUser(email, password)
    .then((result) => {
    console.log(result.user)
      setError("");
      form.reset();
      setUser(null);
      navigate('/login');
    })
    .catch((e) => {
      setError(e.message);
    });
        }else{
            setError('Password does not match')
        }

    
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
      };
    

  return (
    <div className="flex justify-evenly container my-24">
      <div className="hidden lg:block">
        <img src={signUpGraphic} className="w-[500px] mx-auto" alt="" />
      </div>
      <div className="lg:w-1/3 w-10/12">
        <Card>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h5 className="text-3xl text-center font-medium text-gray-900 dark:text-white">
            SignUp
          </h5>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput id="name" name="name" type="text" required={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                placeholder="example@abc.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                name="password"
                placeholder="••••••••"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Confirm password" />
              </div>
              <TextInput
                id="password2"
                type="password"
                name="confirm"
                placeholder="••••••••"
                required={true}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember"  onClick={handleAccepted} />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button className="my-5" type="submit" disabled={!accepted}>Submit</Button>
            <div className="text-sm font-medium text-gray-500 text-center dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login
            </Link>
          </div>
         <p className="text-red-600 text-center font-sans">{error}</p>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
