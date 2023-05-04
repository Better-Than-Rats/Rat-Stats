import React, { useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { updateUser, updatePassword } from '../Slices/userSlice';
/**
 *
 * @returns hosts the login page
 *  Has buttons to route user to the signup and the homepage.
 */
export default function Login() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // user12
  // pw: password123
  const handleLoginClick = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const pw = document.getElementById('password').value;
    // console.log('heyy, pw', username, pw);
    //const username = userState;
    // navigate('/homepage');
    try {
      await fetch('/user');
      setIsLoggedIn(true)
      if(username === '' || pw === ''){
        setIsLoggedIn(false);
      }
      console.log("if login works, log the response here: ", response);
    }
    catch (err) {
      console.log("login signup failed");
    }
  };
  return (
    <div className="grid bg-blue-200 shadow w-screen h-screen">
      <div className="self-center justify-self-center border shadow bg-blue-500 p-8 rounded-xl w-1/2 h-1/2">
        <div className="grid gap-2 justify-center content-center h-full w-full">
          <h1 className="text-5xl font-bold text-gray-700 justify-self-center">Rat Stats</h1>
          {/*username input*/}
          <div>
            <input type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            onChange={(e) => dispatch(updateUser(e.target.value))}
            required/>
          </div>
          {/*password input*/}
          <div>
            <input type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            onChange={(e) => dispatch(updatePassword(e.target.value))}
            required/>
          </div>
          <div className="flex flex-row justify-between p-4">
            <a className="border shadow bg-red-500 justify-self-center" href={'/signup'}>Signup</a>
            {/* <button className="border shadow bg-green-500 justify-self-center"  onClick={handleLoginClick} >Login</button> */}
            <button className="border shadow bg-green-500 justify-self-center" onClick={handleLoginClick} 
            >Login {!isLoggedIn ? null : <Navigate to='/homepage'/>}
            </button>
            <a className="border shadow bg-green-500 justify-self-center" href={'/oauth/login'}>Login with Tinder</a>
          </div>
        </div>
      </div>
    </div>
  )
}