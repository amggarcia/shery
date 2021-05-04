import { GetServerSideProps } from "next";
import ShareEditor from "~/components/share/ShareEditor";
import { AuthenticatedRoute } from "~/utils/AuthenticationHelper";

export const getServerSideProps: GetServerSideProps = AuthenticatedRoute;
export default function EditShare() {
  return <ShareEditor></ShareEditor>;
}
