import React from "react";
import hide from "../Assets/hide.png";
import leftdesign from "../Assets/leftdesign.png";
import mail from "../Assets/emailicon.png";
import bgimage from "../Assets/bgimage.png"; //to be replaced by logo later
import lock from "../Assets/lock.png";

export const StandardSignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
  };

  // Header Component
  const Header = () => {
    return (
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto py-4 px-6">
        <div className="flex items-center">
          <img src={bgimage} alt="Logo" className="w-10 h-10" />  
          <span className="ml-3 font-bold text-xl text-[#171a1f]">THUtorium</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 space-y-6 bg-[#f8f9fa] rounded-md shadow-lg"
        >
          <h1 className="text-3xl font-bold text-center text-[#003366]">Welcome back 👋</h1>

          <div>
            <label className="block text-lg font-extrabold text-[#32363c] mb-2">Email</label>
            <div className="flex items-center p-3 bg-gray-100 rounded-md">
              <img className="w-6 h-6 mr-2" alt="Mail" src={mail} />
              <input
                type="email"
                aria-label="Email Address"
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent outline-none text-lg text-[#171a1f]"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-extrabold text-[#2f3237] mb-2">Password</label>
            <div className="flex items-center p-3 bg-gray-100 rounded-md">
              <img className="w-6 h-6 mr-2" alt="Lock" src={lock} />
              <input
                type="password"
                aria-label="Password"
                placeholder="Enter at least 8+ characters"
                required
                className="flex-1 bg-transparent outline-none text-lg text-[#171a1f]"
              />
              <img className="w-6 h-6 ml-2" alt="Hide" src={hide} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-[#171a1f]">
              <input type="checkbox" className="mr-2" />
              Keep me logged in
            </label>
            <a href="#" className="text-sm text-[#003366] hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 text-lg font-semibold text-white bg-[#003366] rounded-md hover:bg-[#002244] transition-colors"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-[#171a1f] mt-4">
            Not a member yet?{" "}
            <a href="#" className="font-bold text-[#003366] hover:underline">
              Register now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default StandardSignIn;
