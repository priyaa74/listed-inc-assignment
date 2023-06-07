import React from 'react'
import styles from  './SignIn.module.css'
import {DiApple} from 'react-icons/di'
import OAuth from '../components/GoogleOAuth'


function SignIn() {
  return (
    <div>
        <div className={styles.leftSide}>
            <div className={styles.board}>Board.</div>
        </div>
        <div className={styles.rightSide}>
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
            <OAuth/>
            <div> <DiApple/> Sign in with Apple</div>

            <form>
            <label>Email address</label>
            <input  type="email" placeholder='johndoe@gmail.com'/>
            <label>Password</label>
            <input type="password" placeholder='password'/>
            <p>Forgot password?</p>
            <input type="submit" value="Sign In" />
            </form>

            <p>Don't have an account? <a href="#">Register here</a></p>
        </div>
    </div>
  )
}

export default SignIn