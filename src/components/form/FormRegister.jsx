import InputLabel from "../ui/InputLabel";
import Button from "../ui/Button";

function FormRegister() {
  return (
    <form>
      <InputLabel
        type="text"
        name="fullname"
        placeholder="Please Input Your Fullname ..."
      >
        Fullname
      </InputLabel>
      <InputLabel
        type="email"
        name="email"
        placeholder="Please Input Your Valid Email Here"
      >
        Email
      </InputLabel>
      <InputLabel type="password" name="password" placeholder="********">
        Password
      </InputLabel>
      <InputLabel type="password" name="confirmPassword" placeholder="********">
        Password
      </InputLabel>
      <Button className="bg-blue-500 w-full" children="Register">
        Register
      </Button>
    </form>
  );
}

export default FormRegister;
