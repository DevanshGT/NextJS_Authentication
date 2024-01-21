"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
const Home = () => {
  const router = useRouter()
  // Assuming you have a function to handle logout
  const handleLogout = async () => {
    await fetch('http://localhost:3000/api/users/logout')
    router.push('/form/login')
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to My Next.js Projects</h1>
        <p className="text-lg mb-8">Create projects with Devansh Gondaliya !</p>
        <button className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-full text-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:border-blue-300">
          Get Started
        </button>
        {/* Logout button */}
        <button
          className="bg-red-500 text-white py-2 px-6 rounded-full text-lg ml-4 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
