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

  return (
    <div>
      {urlTarget && (
        <div>
          <QRCode value={urlTarget}></QRCode>
          <p>{urlTarget}</p>
        </div>
      )}
    </div>
  );
}
