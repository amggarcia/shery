import { GetServerSidePropsContext } from "next";
import { auth } from "~/utils/FirebaseAdminHelper";
import nookies from "nookies";
export const AuthenticatedRoute = async (
  context: GetServerSidePropsContext
) => {
  try {
    let cookies = nookies.get(context);
    const { uid } = await auth.verifyIdToken(cookies.userToken);

    return {
      props: {
        authenticatedUserId: uid,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: `/auth/login?from=${encodeURIComponent(
          context.resolvedUrl
        )}`,
      },
      props: {} as never,
    };
  }
};
