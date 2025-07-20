import FormRegister from "../components/form/FormRegister";
import AuthLayouts from "../components/layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
