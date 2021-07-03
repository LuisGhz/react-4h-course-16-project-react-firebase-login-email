import useRef from 'react';
import './Signin.css';

const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
  <div className="signin">
    <form action="">
      <h1>Sign in</h1>
      <input type="email" ref={ emailRef } />
      <input type="password" ref={ passwordRef } />
      <button>Sign in</button>
      <h6>Not yet register? <span className="signin-link" >Sign up</span></h6>
    </form>
  </div>);
}

export default Signin;