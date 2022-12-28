import React, { useState } from "react";



const RegistrationFrom =()=>
{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
   
    return(
        <div className="register">
          <div className="form flex flex-col justify-center items-center" >
            <h2 className="py-10 font-bold text-3xl uppercase">Register</h2>
        <form id='form'>
           <div className="mb-5">
             <label htmlFor="name" className=" uppercase  text-gray-700  font-bold " >Full name</label><br/>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/><br/>
            </div>
            <div className="mb-5">
            <label htmlFor="email" className=" uppercase  text-gray-700  font-bold ">Email</label><br/>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required /><br/>
            </div>
            <label htmlFor="password" className=" uppercase  text-gray-700  font-bold ">password</label><br/>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"required minLength={8}/><br/><br/>
            <button type="submit" className="bg-purple-500 hover:bg-violet-700 text-white font-bold py-2 px-4  mx-8 rounded ">Sign In</button><button className="link-btn" >Already have an account? Login here.</button>
            <div className="mb-10"></div>
        </form>
       
          </div>
        </div>
    );
}
export default RegistrationFrom;