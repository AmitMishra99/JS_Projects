import { useEffect, useState } from "react";
import "./github-style.css";
import User from "./user";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("amitmishra99");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
    console.log(data);
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading Data !! Plz wait ....</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="git">
        <h1>Github Profile Finder</h1>
        <input
          type="text"
          placeholder="Enter github Username... "
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
        <User user={userData} />
      </div>
    </div>
  );
}
