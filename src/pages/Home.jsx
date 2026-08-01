import React from 'react'
import "./Home.css"
import { Link} from 'react-router-dom'
import { useState,  } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword,  } from "firebase/auth";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



const Home = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    
  async function handleSubmit(e) {
    e.preventDefault();

    try {

      if (isLogin) {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("logged in:", user.user);
        navigate("/Form");
      } else {
        
        const user = await createUserWithEmailAndPassword(auth, email, password);

        console.log("signed up :", user.user);
      navigate("/Form");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
    }
  }

  return (

    <div className="portal">

  <header className="navbar">
    <h1 className="logo">MAGNITUDE GROUP OF SCHOOLS</h1>

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  </header>

  <section className="hero">

    <div className="hero-text">
      <h2>Welcome to Magnitude Group of Schools</h2>

      <p>
        Excellence in Learning, Character and Leadership.
        We provide quality education that prepares students
        for a brighter future.
      </p>

      <button>Apply Now</button>
    </div>

    <div className="login-card">

      <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder='Full Name'
       />

        )}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      /> 

      <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />

       <button type='submit'>
        {isLogin ? "Log in" : "Sign up"}
        </button>

        <p className='loll'  onClick={() => setIsLogin(!isLogin)} 
          style={{cursor : "pointer", color : "blue"}}
          >
              {isLogin
              ? "Dont have an account? Sign up " 
            : "Already have an account? Log in"
            }
        </p>

          </form>
         </div>

  </section>

  <section className="features">

    <div className="card">
      <h3>Qualified Teachers</h3>
      <p>Experienced and certified educators.</p>
    </div>

    <div className="card">
      <h3>Modern Library</h3>
      <p>Thousands of educational resources.</p>
    </div>

    <div className="card">
      <h3>Computer Laboratory</h3>
      <p>Modern ICT facilities for students.</p>
    </div>

  </section>

  <footer>
    © 2026 Magnitude Group of Schools. All Rights Reserved.
  </footer>

</div>
  )
}

export default Home;
