const LoginForm = () => {
  // const initialUser = {
  //   name: "",
  //   password: "",
  // };

  return (
    <form noValidate autoComplete="off">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        name="username"
        className="form-control"
        required
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        name="password"
        className="form-control"
        required
      ></input>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
