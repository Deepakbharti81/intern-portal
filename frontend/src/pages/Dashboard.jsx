import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserAlt, FaUniversity, FaBook } from "react-icons/fa";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
     axios.get("https://intern-portal-m2q0.onrender.com/api/user")
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={
              userData?.profileImage ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCEA-EgV4ocW1dEvqPyYwau7oDdeZSXzKkw&s"
            }
            alt="Intern Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md mb-4"
          />
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            Intern Dashboard
          </h1>
        </div>

        {userData ? (
          <div className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-lg shadow flex items-center gap-3">
              <FaUserAlt className="text-blue-600 text-xl" />
              <span className="text-gray-700 font-medium">Name:</span>
              <span className="text-blue-600 font-semibold">{userData.name}</span>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg shadow flex items-center gap-3">
              <FaBook className="text-purple-600 text-xl" />
              <span className="text-gray-700 font-medium">Course:</span>
              <span className="text-purple-600 font-semibold">{userData.course}</span>
            </div>

            <div className="bg-green-50 p-3 rounded-lg shadow flex items-center gap-3">
              <FaUniversity className="text-green-600 text-xl" />
              <span className="text-gray-700 font-medium">College:</span>
              <span className="text-green-600 font-semibold">{userData.college}</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
