import React,{useState , useEffect} from 'react';
import { useGoogleLogin, googleLogout} from '@react-oauth/google';
import {FcGoogle} from 'react-icons/fc'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function OAuth() {

    const [ user, setUser ] = useState("");
    const [ profile, setProfile ] = useState(null);
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (response) =>{ setUser(response);},
        onError: (error) => console.log('Login Failed: ',error)
    })

    const logOut =() =>{
        googleLogout();
        setProfile(null);
    }

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        localStorage.setItem("user", JSON.stringify(res));
                        navigate('/dashboard');

                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    return (
       <div>
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}> <FcGoogle/> Sign in with Google </button>
            )}

       </div>
    )
}
export default OAuth;