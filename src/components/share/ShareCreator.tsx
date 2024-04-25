import { Card } from "~/components/interface/Card";
import { Button } from "~/components/interface/Button";
import { useRouter } from "next/router";
import { InstanceContext } from "~/utils/InstanceContext";
import { useContext, useEffect, useState } from "react";
import { db } from "~/utils/FireBaseHelper";
import { ShareType } from "~/types/ShareType";
import { GenerateKeyPair } from "~/utils/CryptoHelper";
import { useAuth } from "~/utils/AuthContext";
import SheryLogo from "~/components/logos/shery";
export default function ShareCreator() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const router = useRouter();
  const instanceContext = useContext(InstanceContext);
  const collectionRef = db.collection("share");
  useEffect(() => {
    async function createShare() {
      try {
        const keyPair = GenerateKeyPair();
        instanceContext.setKeyPair(keyPair);

        const shareToUpload: ShareType = {
          data: null,
          publicKey: keyPair.exportKey("public"),
          status: "created",
          validUntil: null,
          createdBy: user.uid,
        };
        const newShare = await collectionRef.add(shareToUpload);
        router.push(`/share/${newShare.id}`);
        return { success: true };
      } catch (error) {
        return { success: false, error };
      }
    }

    createShare().then(({ success, error }) => {
      setLoading(false);
      if (!success) {
        console.log(error);
        setError(error);
      }
    });
  }, []);

  return (
    <Card title="testing">
      <div className="text-8xl font-bold text-center pb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-red-500">
          Shery
        </span>
      </div>
      <div className="flex justify-center">
        {loading ? (
          <div className="flex flex-1 flex-col justify-center items-center">
            <SheryLogo
              className="animate-bounce"
              width="100"
              height="100"
            ></SheryLogo>
            <p className="pb-6">Creating your shery ...</p>
          </div>
        ) : error ? (
          <div className="text-red-600 text-center">
            Oops something wen't wrong, refresh the page and try again
          </div>
        ) : (
          <div>Shery created, redirecting</div>
        )}
      </div>
    </Card>
  );
}
