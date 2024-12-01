"use client";
import React, { useState } from "react";
import axios from "axios";

const IpLookup = () => {
  const [ip, setIp] = useState(""); // State to store the IP input
  const [ipInfo, setIpInfo] = useState(null); // State to store the fetched IP info
  const [error, setError] = useState(""); // State for error handling

  // Function to handle form submission
  const handleIpSearch = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    setError("");
    setIpInfo(null);

    if (!ip) {
      setError("Please enter a valid IP address.");
      return;
    }

    try {
      // Example API request (replace YOUR_API_KEY with your actual API key)
      const response = await axios.get(
        `https://ipinfo.io/${ip}?token=YOUR_API_KEY`
      );
      setIpInfo(response.data); // Store the response data
    } catch (err) {
      setError("Failed to fetch IP information. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">IP Lookup Tool</h1>
      
      <form onSubmit={handleIpSearch} className="mb-6">
        <input
          type="text"
          placeholder="Enter an IP address"
          className="border p-2 rounded-lg w-full"
          value={ip}
          onChange={(e) => setIp(e.target.value)} // Update the IP state on input change
          style={{ color: "black" }} // Ensure the text typed in the input is black
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search IP
        </button>
      </form>

      {/* Display Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display IP Info */}
      {ipInfo && (
        <div className="mt-6 border p-4 rounded-lg bg-gray-100">
          <h2 className="text-xl font-semibold mb-2">IP Information:</h2>
          <p><strong>IP:</strong> {ipInfo.ip}</p>
          <p><strong>Location:</strong> {ipInfo.city}, {ipInfo.region}, {ipInfo.country}</p>
          <p><strong>Organization:</strong> {ipInfo.org}</p>
          <p><strong>Timezone:</strong> {ipInfo.timezone}</p>
          <p><strong>Coordinates:</strong> {ipInfo.loc}</p>
        </div>
      )}
    </div>
  );
};

export default IpLookup;
git init
