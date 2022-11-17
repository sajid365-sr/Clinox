


import React, { useContext, useState } from "react";


import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import google from '../../../../Assets/Login/google.png';
import facebook from '../../../../Assets/Login/facebook.png';
import { UserContext } from "../../../../contexts/AuthContext/AuthContext";
import loginGraphic from '../../../../Assets/Login/Login.jpg';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";



const Login = () => {
    const { providerLogin, signIn } = useContext(UserContext);

    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

const handleSubmit = (event) =>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // email-password login
    signIn(email, password)
      .then((result) => {
        console.log(result.user)
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(e.message);
      })
      

}

// Google sign in
const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then( result =>{
        console.log(result.user)
        navigate(from, { replace: true });
    })
    .catch((e) => console.error(e));
}

//  Facebook sign in
const handleFacebookSignIn = () =>{
    providerLogin(facebookProvider)
    .then(result =>{
        console.log(result.user)
        navigate(from, {replace:true});
    })
    .catch(e => console.error(e))
}

    return (
        <div className="flex justify-evenly container my-24">
            <div>
                <img src={loginGraphic} className='w-[500px] mx-auto' alt="" />
            </div>
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form onSubmit={handleSubmit} className="space-y-6" action="#">
        <h5 className="text-3xl text-center font-medium text-gray-900 dark:text-white">Login</h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <Link href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

        <div className="text-center">
          <p className="mb-2 font-semibold">Or</p>
          <p>Login Using</p>
          <div className="flex justify-center gap-3 mt-5">
          <span><img onClick={handleGoogleSignIn} width='30px' src={google} alt="" /></span>
          <span><img onClick={handleFacebookSignIn} width='30px' src={facebook} alt="" /></span>
          </div>
        </div>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link to='/signup' className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
        </div>
    </form>
</div>

        </div>
    );
};

export default Login;