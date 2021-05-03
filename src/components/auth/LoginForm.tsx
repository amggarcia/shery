import { auth } from "~/utils/FireBaseHelper";
import { Input } from "~/components/interface/Input";
import { Button } from "~/components/interface/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AuthProvider, useAuth } from "~/utils/AuthContext";
type LoginFormInputType = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormInputType>();
  const [authError, setAuthError] = useState<string>(undefined);
  const submitHandler = async (data: LoginFormInputType) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .catch((error) => {
        console.log(error);
        setAuthError(error.message);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input label="Email" type="email" {...register("email")}></Input>
          <Input
            label="Passwork"
            type="password"
            {...register("password")}
          ></Input>
          {authError && <div>{authError}</div>}
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}
