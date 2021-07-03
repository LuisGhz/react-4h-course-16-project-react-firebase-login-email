import { useRef } from 'react';
import { auth } from 'config/firebase';
import './Signin.css';

const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const singUp = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then( user => console.log(user) )
    .catch( err => console.error(err) );
  }
  return (
  <div className="signin">
    <form action="">
      <h1>Sign in</h1>
      <input type="email" ref={ emailRef } autocomplete="username" />
      <input type="password" ref={ passwordRef } autocomplete="current-password" />
      <button>Sign in</button>
      <h6>Not yet register? <span className="signin-link" onClick={ singUp } >Sign up</span></h6>
    </form>
  </div>);
}

export default Signin;