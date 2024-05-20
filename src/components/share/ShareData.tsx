import { ShareType } from "~/types/ShareType";
import { Input } from "~/components/interface/Input";
import { useState } from "react";
import { Button } from "../interface/Button";

interface Props {
  share?: ShareType;
  //This one could probably be inside the share
  decryptedData?: string;
}

export default function ShareData(props: Props) {
  const { share, decryptedData } = props;
  const [inputType, setInputType] = useState("password");

  function toggleInputType() {
    if (inputType === "password") {
      setInputType("text");
    } else setInputType("password");
  }

  function copyToClipBoard() {
    if (navigator && navigator.clipboard)
      navigator.clipboard.writeText(decryptedData);
  }

  return (
    <div>
      {props.share && props.share.data && !decryptedData && (
        <div>
          <div className="flex justify-center bg-blue-600 bg-opacity-40 rounded-xl p-2">
            <p className="font-semibold text-3xl">Encrypted Shery received</p>
          </div>
        </div>
      )}
      {decryptedData && (
        <div>
          <Input
            readOnly
            type={inputType}
            label="Shery information"
            value={decryptedData}
          ></Input>
          <div className="flex justify-between space-x-4">
            <Button className="flex-1" onClick={toggleInputType}>
              Display Text
            </Button>
            <Button className="flex-1" onClick={copyToClipBoard}>
              Copy to Clipboard
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
