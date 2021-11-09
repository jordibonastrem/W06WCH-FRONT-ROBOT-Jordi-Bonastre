import useUsers from "../../hooks/useUsers";
import { useState } from "react";

const LoginForm = () => {
  const initialValue = {
    name: "",
    password: "",
  };

  const [inputValue, setInputValue] = useState(initialValue);
  // const { loginUser } = useUsers();

  const handleChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // loginUser(inputValue);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        name="username"
        value={inputValue.name}
        className="form-control"
        required
        onChange={handleChange}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        name="password"
        className="form-control"
        required
        onChange={handleChange}
      ></input>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
