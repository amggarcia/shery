import { useContext, useState } from "react";
import { ShareType } from "~/types/ShareType";
import { DecryptData } from "~/utils/CryptoHelper";
import { InstanceContext } from "~/utils/InstanceContext";
import { Button } from "./Button";

interface Props {
  share: ShareType;
}
export default function ShareViewer(props: Props) {
  const [decryptedText, setDecryptedText] = useState("");
  const context = useContext(InstanceContext);
  async function test() {
    const decryptedData = DecryptData(context.keyPair, props.share.data);
    setDecryptedText(decryptedData);
  }

  return (
    <div>
      <div>
        <p>SecretText</p>
        <div>{props.share.data}</div>
      </div>
      <div>
        <p>DecryptedText</p>
        <div>{decryptedText}</div>
      </div>
      <Button onClick={() => test()}>DecryptText</Button>
    </div>
  );
}
