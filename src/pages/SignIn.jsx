import React from 'react'
import styles from  './SignIn.module.css'

function SignIn() {
  return (
    <div>
        <div className={styles.leftSide}>
            <div className={styles.board}>Board.</div>
        </div>
        <div className={styles.rightSide}>
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
            <div>Sign in with Google</div>
            <div>Sign in with Apple</div>

            <form>
            <label htmlFor="">Email address</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <p>Forgot password?</p>
            <input type="submit" value="Sign In" />
            </form>

            <p>Don't have an account? <a href="#">Register here</a></p>
        </div>
    </div>
  )
}

export default SignIn