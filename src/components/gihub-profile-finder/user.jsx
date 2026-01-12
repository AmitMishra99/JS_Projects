import React from "react";
import './github-style.css'

const User = ({ user }) => {
  const { avatar_url, name, followers, following, public_repos, login , company } = user;
  return (
    <div className="user">
      <div className="img">
        <img className="avatar" height={200} src={avatar_url} alt="User_Image" />
      </div  >
       <div className="main">
         <a  href={`https://github.com/${login}`}>{name || login}</a>
       </div>
      <div className="user-info">
        <p>{`About : ${company}`}</p>
        <p>{`No of followers : ${followers}`}</p>
        <p>{`No of following : ${following}`}</p>
        <p>{`No of Public Repository : ${public_repos}`}</p>
      </div>
    </div>
  );
};

export default User;
