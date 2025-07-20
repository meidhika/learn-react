import InputLabel from "../ui/InputLabel";
import Button from "../ui/Button";

const FormLogin = () => {
  return (
    <form>
      <InputLabel type="email" name="email" placeholder="Email">
        Email
      </InputLabel>
      <InputLabel type="password" name="password" placeholder="Password">
        Password
      </InputLabel>
      <Button
        className="bg-blue-500 w-full"
        children="Login"
        type="submit"
      ></Button>
    </form>
  );
};

export default FormLogin;
