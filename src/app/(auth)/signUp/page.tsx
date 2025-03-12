import { ProfileForm } from "../_components/CreateAcc";
import CreatePass from "../_components/CreatePass";
import { LoginForm } from "../_components/LogIn";

export default function signUp() {
  return (
    <div className="flex flex-col gap-10">
      <ProfileForm />
      <CreatePass />
      <LoginForm />
    </div>
  );
}
