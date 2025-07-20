import InputLabel from "../ui/InputLabel";
import Button from "../ui/Button";
import { login } from "../../services/auth.service";
import { useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputLabel type="username" name="username" placeholder="Username">
        Username
      </InputLabel>
      <InputLabel type="password" name="password" placeholder="Password">
        Password
      </InputLabel>
      <Button
        className="bg-blue-500 w-full px-3 py-3"
        children="Login"
        type="submit"
      ></Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
