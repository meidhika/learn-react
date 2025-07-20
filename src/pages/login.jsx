import FormLogin from "../components/form/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";

export default function LoginPage() {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
}
