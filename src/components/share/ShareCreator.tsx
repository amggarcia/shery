import { Card } from "~/components/interface/Card";
import { Button } from "~/components/interface/Button";
import { useRouter } from "next/router";
import { InstanceContext } from "~/utils/InstanceContext";
import { useContext } from "react";
import { db } from "~/utils/FireBaseHelper";
import { ShareType } from "~/types/ShareType";
import { GenerateKeyPair } from "~/utils/CryptoHelper";
import SheryLogo from "~/components/logos/shery";
export default function ShareCreator() {
  const router = useRouter();
  const instanceContext = useContext(InstanceContext);
  const collectionRef = db.collection("share");
  const createShare = async function () {
    const keyPair = GenerateKeyPair();
    instanceContext.setKeyPair(keyPair);

    const shareToUpload: ShareType = {
      data: null,
      publicKey: keyPair.exportKey("public"),
      status: "created",
      validUntil: null,
    };
    const newShare = await collectionRef.add(shareToUpload);
    router.push(`/share/${newShare.id}`);
  };

  return (
    <Card title="testing">
      <div className="flex justify-center">
        <SheryLogo width="100" height="100"></SheryLogo>
      </div>
      <div className="grid grid-cols-1 mt-2">
        <Button
          onClick={() => {
            createShare();
          }}
        >
          Create new Shery
        </Button>
      </div>
    </Card>
  );
}
