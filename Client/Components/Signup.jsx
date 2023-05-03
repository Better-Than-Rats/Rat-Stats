import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { updateUser, updatePassword } from '../Slices/userSlice';
//import homepage from './Homepage'

export default function Signup() {
  const dispatch = useDispatch();
  const [userProvidedPw, setUserProvidedPw] = useState('');
  const [userProvidedPwConfirm, setUserProvidedPwConfirm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSignupClick = async (e) => {
    e.preventDefault();
    const username = document.getElementById('Username').value;
    const pw = document.getElementById('userProvidedPw').value;
    const verified_pw = document.getElementById('verify-userProvidedPw').value;
    //const nav = () => {navigate('/homepage')};
    console.log("all three: ", username, pw, verified_pw);
    try {
      console.log("enters try");
      if (pw === verified_pw) {
        console.log("if condition met");
        const response = await fetch('/user/signup', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: pw }),
      })
      setIsLoggedIn(true)
      console.log("if it works, log the response here: ", response);
      //console.log("url is ", response.url);
      //const data = await response.json();
      //console.log("if it works, log the data here: ", data);
      // if (response !== null || response !== undefined) {
      //   console.log(response.url);
      //   return <Navigate to="/homepage" />;
      // }
      // .then((data) => data.json())
      // .then((parsed) => {
      //   if(parsed.username) {
      //     // redirect here
      //     navigate('/homepage');
      //   }
      console.log("signup post request successful! data is: ", data);
      } 
    } catch (err) {
      console.log("handle signup failed");
    }
  };

  return (
    <div className="grid bg-blue-200 shadow w-screen h-screen">
          <div className="self-center justify-self-center border shadow bg-blue-500 p-8 rounded-xl w-1/2 h-1/2">
            <div className="grid gap-2 justify-center content-center h-full w-full">
              <h1 className="text-5xl font-bold text-gray-700 justify-self-center">Rat Stats</h1>
              <h1 className="text-xl font-bold text-gray-700 justify-self-center">Sign up for an Account</h1>
              {/*username input*/}
              <div>
                <input type="text" 
                id="Username" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Username" 
                required/>
              </div>

              {/*userProvidedPw input*/}
              <div>
                <input type="password" 
                id="userProvidedPw" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Password" 
                required/>
              </div>
              {/*re-enter userProvidedPw*/}
              <div>
                <input type="password" 
                id="verify-userProvidedPw" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Re-Enter Password" 
                required/>
              </div>
              <div className="flex flex-row justify-center p-4">
                <a className="border shadow bg-green-500 justify-self-center" onClick={handleSignupClick} href={'/homepage'}>Create Account {!isLoggedIn ? null : <Navigate to='/homepage'/>} </a>
                {/* {gameStart ? <GameArea /> : <div></div>} */}
              </div>
            </div>
          </div>
        </div>
  );
};