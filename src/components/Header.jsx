import React from 'react'
import {useNavigate} from 'react-router-dom';
import { googleLogout} from '@react-oauth/google';


function Header() {
  const navigate= useNavigate();
  const picture= JSON.parse(localStorage.getItem("user"));

  const logOut =() =>{
    var txt;
    if (window.confirm("Do you wish to LogOut!")) {
      txt = "You pressed OK!";
      localStorage.removeItem("user");
      googleLogout();
      navigate('/');
    } else {
      txt = "You pressed Cancel!";
    }
   console.log(txt);
}
  return (
    <div>Dashboard
        <div>
        <input type="search" placeholder='Search...' />
        <img src="/assets/search.svg" alt="search" />
        </div>
        <img src="/assets/notifications.svg" alt="notific" />
        <div>
          <img src={picture.data.picture} alt="userImg" onClick={logOut} />
        </div>
       


    </div>
  )
}

export default Header