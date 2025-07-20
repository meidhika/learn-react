import FormLogin from "../components/form/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";
import { useRedirectIfLoggedIn } from "../hooks/useRedirectIfLoggedIn";

export default function LoginPage() {
  useRedirectIfLoggedIn();
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
}
