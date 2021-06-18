import { auth } from "~/utils/FireBaseHelper";
import { Input } from "~/components/interface/Input";
import { Button } from "~/components/interface/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "~/utils/AuthContext";
import { Card } from "~/components/interface/Card";
import { useRouter } from "next/router";

type SignupFormInputType = {
  email: string;
  password: string;
  confirmPassword: string;
};
export default function SignupForm() {
  const { register, handleSubmit } = useForm<SignupFormInputType>();
  const [authError, setAuthError] = useState<string>(undefined);
  const router = useRouter();
  const submitHandler = async (data: SignupFormInputType) => {
    setAuthError(undefined);
    await auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredentials) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthError(error.message);
      });
  };
  //Temp just for testing
  return (
    <Card>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input label="Email" type="email" {...register("email")}></Input>
        <Input
          label="Password"
          type="password"
          {...register("password")}
        ></Input>
        <Input
          label="Confirm Password"
          type="password"
          {...register("password")}
        ></Input>
        {authError && <div className="text-red-600">{authError}</div>}
        <div className="grid gird-cols-1">
          <Button type="submit">Signup</Button>
        </div>
      </form>
    </Card>
  );
}
