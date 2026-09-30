import "./Register.css";

function Register() {
  return (
    <div
     className="register-page">
        
        <img
        src="/images/Vector.png"
        alt="ByteSpace"
        className="Register-logo"
        />

      <div className="register-left">
        <h2>Sign up and come in</h2>

        <p>
          The registration process is straightforward, uncomplicated,
          and efficient, allowing users to sign up quickly, easily, and at
          no cost.
        </p>

        <div className="register-visual">

          {/* cone shape */}
          
          <img
          src="images/Mask Group.png"
          alt=""
          className="Cone-shape"       
         />

          {/* Yellow triangle */}
          <img
          src="images/Mask Group1.png"
          alt=""
          className="Cone-04"       
         />

          {/* Back course card */}
          <img
            src="/images/Course_Card_2.png"
            alt="Course Card 2"
            className="course-card-back"
          />

          {/* Happy Students box */}
          <img
            src="/images/Auto Layout Verticall.png"
            alt="Happy Students"
            className="happy-students-image"
          /> 

          {/* Front course card */}
          <img
            src="/images/Mask Group3.png"
            alt=""
            className="cone_03"
          />

          {/* White shape */}
          <img
            src="/images/Course_Card_1.png"
            alt="Course Card 1"
            className="course-card-front"
          />


        </div>
      </div>

      <div className="register-card">

        <p className="register-small-title">Create an Account</p>

        <h1>
          Welcome to
          <br />
          ByteSpace
        </h1>

        <form>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Jamie Davis"
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="designer@example.com"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="********"
          />

          <button type="submit">
            Continue
          </button>

        </form>

        <p className="login-text">
          Already have an account? <span>Login</span>
        </p>

      </div>

    </div>
  );
}

export default Register;