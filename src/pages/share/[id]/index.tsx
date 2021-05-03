import { useRouter } from "next/router";
import { db } from "~/utils/FireBaseHelper";
import { useDocumentData } from "react-firebase-hooks/firestore";
import FireBaseStatusInfo from "~/components/FirebaseStatusInfo";
import ContextStatus from "~/components/ContextStatus";
import LocalQRCode from "~/components/LocalQRCode";
import { ShareType } from "~/types/ShareType";
import ShareViewer from "~/components/ShareViewer";
export default function Share() {
  const router = useRouter();
  const { id } = router.query;
  const [share, loading, error] = useDocumentData<ShareType>(
    db.doc(`share/${id}`)
  );

  return (
    <div>
      {share && (
        <div>
          <ShareViewer share={share}></ShareViewer>
        </div>
      )}
      <LocalQRCode targetRoute={`/share/${id}/edit`}></LocalQRCode>
      <ContextStatus></ContextStatus>
      <FireBaseStatusInfo error={error} loading={loading}></FireBaseStatusInfo>
    </div>
  );
}

/*
      {context.keyPair ? (
        <QRCode value={window.location.href}></QRCode>
      ) : (
        <div>
          NoKeyForU <Button href="/">Go Back</Button>
        </div>
      )}
      */
