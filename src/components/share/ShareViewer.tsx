import { useContext, useEffect, useState } from "react";
import { ShareType } from "~/types/ShareType";
import { DecryptData } from "~/utils/CryptoHelper";
import { InstanceContext } from "~/utils/InstanceContext";
import { Button } from "~/components/interface/Button";
import { useRouter } from "next/router";
import { useDocument, useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "~/utils/FireBaseHelper";
import { doc } from "firebase/firestore";
import FireBaseStatusInfo from "~/components/FirebaseStatusInfo";
import ContextStatus from "~/components/ContextStatus";
import LocalQRCode from "~/components/LocalQRCode";
import ShareData from "./ShareData";
import { Card } from "~/components/interface/Card";
export default function ShareViewer() {
  const [decryptedText, setDecryptedText] = useState<string>(null);
  const router = useRouter();
  const context = useContext(InstanceContext);
  const { id } = router.query;

  const [share, loading, error] = useDocumentData(
    doc(db, `share/${id}`)
  );

  useEffect(() => {
    setDecryptedText(null);
  }, [share]);

  async function decryptData() {
    const decryptedData = DecryptData(context.keyPair, (share as ShareType).data);
    setDecryptedText(decryptedData);
  }

  return (
    <Card>
      <ContextStatus></ContextStatus>
      {context.keyPair && (
        <div className="space-y-5">
          <ShareData share={share as ShareType} decryptedData={decryptedText}></ShareData>
          <FireBaseStatusInfo
            error={error}
            loading={loading}
          ></FireBaseStatusInfo>
          {share && (share as ShareType).data && !decryptedText && (
            <div className="grid grid-cols-1">
              <Button onClick={() => decryptData()}>Decrypt Text</Button>
            </div>
          )}
          {share && !(share as ShareType).data && (
            <div className="flex justify-center bg-yellow-400 bg-opacity-80 rounded-xl p-2">
              <p className="font-semibold text-3xl">
                Waiting for shery data...
              </p>
            </div>
          )}
          <LocalQRCode targetRoute={`/share/${id}/edit`}></LocalQRCode>
          <p className="text-center text-sm">
            Use (or click to copy) the QR code URL to open a new instance of
            Shery to share data from
          </p>
        </div>
      )}
    </Card>
  );
}
