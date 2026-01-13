import { useEffect, useState } from "react";
import "./search.css";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  }

  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data?.users?.length) {
        setUsers(data.users.map((user) => user.firstName));
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  function handleClick(event) {
    console.log(event.target.innerText);
    setDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(users, filteredUsers);

  return (
    <div className="auto-complete-container">
      <div className="box-sac">
        <input
          value={searchParam}
          type="text"
          className="user"
          placeholder="Enter User Name....."
          onChange={handleChange}
        />
        <button className="user">Search</button>
      </div>
      {dropDown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
