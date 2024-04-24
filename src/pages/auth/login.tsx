import { GetServerSideProps } from "next";
import LoginForm from "~/components/auth/LoginForm";
import { UnAuthenticatedRoute } from "~/utils/AuthenticationHelper";

export const getServerSideProps: GetServerSideProps = UnAuthenticatedRoute;
export default function loginPage() {
  return <LoginForm></LoginForm>;
}
