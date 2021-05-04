import { useContext, useEffect, useState } from "react";
import { ShareType } from "~/types/ShareType";
import { DecryptData } from "~/utils/CryptoHelper";
import { InstanceContext } from "~/utils/InstanceContext";
import { Button } from "~/components/interface/Button";
import { useRouter } from "next/router";
import { useDocument, useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "~/utils/FireBaseHelper";
import FireBaseStatusInfo from "~/components/FirebaseStatusInfo";
import ContextStatus from "~/components/ContextStatus";
import LocalQRCode from "~/components/LocalQRCode";
import ShareData from "./ShareData";
import { Card } from "~/components/interface/Card";
export default function ShareViewer() {
  const [decryptedText, setDecryptedText] = useState("");
  const router = useRouter();
  const context = useContext(InstanceContext);
  const { id } = router.query;

  const [share, loading, error] = useDocumentData<ShareType>(
    db.doc(`share/${id}`)
  );

  useEffect(() => {
    setDecryptedText(undefined);
  }, [share]);

  async function decryptData() {
    const decryptedData = DecryptData(context.keyPair, share.data);
    setDecryptedText(decryptedData);
  }

  return (
    <Card>
      <ContextStatus></ContextStatus>
      {context.keyPair && (
        <div className="space-y-5">
          <ShareData share={share} decryptedData={decryptedText}></ShareData>
          <FireBaseStatusInfo
            error={error}
            loading={loading}
          ></FireBaseStatusInfo>
          {share && share.data && (
            <div className="grid grid-cols-1">
              <Button onClick={() => decryptData()}>DecryptText</Button>
            </div>
          )}
          {share && !share.data && (
            <div className="flex justify-center bg-yellow-400 bg-opacity-80 rounded-xl p-2">
              <p className="font-semibold text-3xl">
                Waiting for shery data...
              </p>
            </div>
          )}
          <LocalQRCode targetRoute={`/share/${id}/edit`}></LocalQRCode>
        </div>
      )}
    </Card>
  );
}
