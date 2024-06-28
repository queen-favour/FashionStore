const Login = () => {
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div>
        <h3>Sign Up</h3>
        <div>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p>
          Already have an account? <span>Login</span>
        </p>
        <div>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
