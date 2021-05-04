import { GetServerSideProps } from "next";
import ShareCreator from "~/components/share/ShareCreator";
import { AuthenticatedRoute } from "~/utils/AuthenticationHelper";

export const getServerSideProps: GetServerSideProps = AuthenticatedRoute;
export default function createShare() {
  return <ShareCreator></ShareCreator>;
}
