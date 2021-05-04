import QRCode from "qrcode.react";
import { useEffect, useState } from "react";

interface Props {
  targetRoute: string;
}
export default function LocalQRCode(props: Props) {
  const [urlTarget, setUrlTarget] = useState<string>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrlTarget(window.location.origin + props.targetRoute);
    }
  }, []);
  function copyToClipBoard() {
    navigator.clipboard.writeText(urlTarget);
  }
  return (
    <div>
      {urlTarget && (
        <div className="flex justify-center">
          <QRCode
            value={urlTarget}
            onClick={copyToClipBoard}
            className="ring-white ring-4 rounded-lg"
          ></QRCode>
        </div>
      )}
    </div>
  );
}
