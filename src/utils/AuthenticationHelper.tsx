import { GetServerSidePropsContext } from "next";
import { auth } from "~/utils/FirebaseAdminHelper";
import { parse } from 'cookie';
export const AuthenticatedRoute = async (
  context: GetServerSidePropsContext
) => {
  try {
    const cookies = parse(context.req.headers.cookie || '');
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

export const UnAuthenticatedRoute = async (
  context: GetServerSidePropsContext
) => {
  const cookies = parse(context.req.headers.cookie || '');
  if (cookies.userToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {} as never,
    };
  } else {
    return { props: {} as never };
  }
};
