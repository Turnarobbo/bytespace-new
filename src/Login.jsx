import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <img
        src="/images/Vector.png"
        alt="ByteSpace"
        className="login-logo"
      />

      <div className="login-left">
        <h2>Sign up and come in</h2>

        <p>
          The registration process is straightforward, uncomplicated,
          and efficient, allowing users to sign up quickly, easily, and at
          no cost.
        </p>

        <div className="login-visual">

          {/* Cone shape */}
          <img
            src="/images/Mask Group.png"
            alt=""
            className="Cone-shape"
          />

          {/* Yellow triangle */}
          <img
            src="/images/Mask Group1.png"
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

          {/* White shape */}
          <img
            src="/images/Mask Group3.png"
            alt=""
            className="cone_03"
          />

          {/* Front course card */}
          <img
            src="/images/Course_Card_1.png"
            alt="Course Card 1"
            className="course-card-front"
          />

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-card">

        <p className="login-small-title">Sign In</p>

        <h1>
          Welcome
          <br />
          Back
        </h1>

        <form>

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
            Sign In
          </button>

        </form>

        <p className="login-text">
          New User <span>Create an Account</span>
        </p>

      </div>

    </div>
  );
}

export default Login;