import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [backendData, setBackendData] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api");
      setBackendData(response.data.users);
      console.log("Response from backend:", response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  // console.log("Backend Data:", backendData);

  return (
    <>
      <div>
        {backendData.length > 0 ? (
          backendData.map((user, index) => (
            <div key={index}>
              <h2>
                User {index + 1}: {user}
              </h2>
            </div>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </>
  );
}

export default App;
