import React from 'react'
import styles from  './SignIn.module.css'
import OAuth from '../components/GoogleOAuth'
import { Link } from 'react-router-dom'


function SignIn() {
  const linkStyle={
    textDecoration:"none",
    color: "#346BD5",
  }
  return (
    <div className={styles.signIn}>
        <div className={styles.leftSide}>
            <div className={styles.board}>Board.</div>
        </div>
        <div className={styles.rightSide}>
        <div className={styles.formContainer}>
            <p className={styles.heading}>Sign In</p>
            <p className={styles.heading2}>Sign in to your account</p>
            <div className={styles.accounts}>
            <OAuth/>
            <button> <img src="/assets/apple.svg" alt="" /> Sign in with Apple</button>
            </div>
            <form className={styles.form}>
            <label>Email address</label>
            <input  type="email" placeholder='johndoe@gmail.com'/>
            <label>Password</label>
            <input type="password" placeholder='password'/>
            <Link style={linkStyle}>Forgot password?</Link>
            <input  style={{backgroundColor:"#000000", color:"#FFFFFF",fontFamily: 'Montserrat',
fontWeight: 700}} type="submit" value="Sign In" />
            </form>
            <p style={{marginTop:"20px",textAlign:"center"}}>Don't have an account? <Link style={linkStyle} href="#">Register here</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignIn