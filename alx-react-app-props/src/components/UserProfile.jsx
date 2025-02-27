import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const userData = useContext(UserContext); // Access user data from context

  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100">
      <h2 className="text-lg font-semibold">User Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserProfile;