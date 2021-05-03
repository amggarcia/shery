import { useContext, useState } from "react";
import { ShareType } from "~/types/ShareType";
import { DecryptData } from "~/utils/CryptoHelper";
import { InstanceContext } from "~/utils/InstanceContext";
import { Button } from "~/components/interface/Button";
import { useRouter } from "next/router";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "~/utils/FireBaseHelper";
import FireBaseStatusInfo from "~/components/FirebaseStatusInfo";
import ContextStatus from "~/components/ContextStatus";
import LocalQRCode from "~/components/LocalQRCode";
import ShareData from "./ShareData";

export default function ShareViewer() {
  const [decryptedText, setDecryptedText] = useState("");
  const router = useRouter();
  const context = useContext(InstanceContext);
  const { id } = router.query;

  const [share, loading, error] = useDocumentData<ShareType>(
    db.doc(`share/${id}`)
  );

  async function test() {
    const decryptedData = DecryptData(context.keyPair, share.data);
    setDecryptedText(decryptedData);
  }

  return (
    <div>
      <ShareData share={share} decryptedData={decryptedText}></ShareData>
      <Button onClick={() => test()}>DecryptText</Button>
      <LocalQRCode targetRoute={`/share/${id}/edit`}></LocalQRCode>
      <ContextStatus></ContextStatus>
      <FireBaseStatusInfo error={error} loading={loading}></FireBaseStatusInfo>
    </div>
  );
}
