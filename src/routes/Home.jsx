import { auth } from "config/firebase";

const Home = () => {
  return (
  <div>
    <h1>Welcome back</h1>
    <p><button onClick={ () => auth.signOut() } >Sign out</button></p>
  </div>);
}

export default Home;