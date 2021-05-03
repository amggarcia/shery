import { useContext } from "react";
import { InstanceContext } from "~/utils/InstanceContext";

export default function ContextStatus() {
  const context = useContext(InstanceContext);
  return <div>{!context.keyPair && <div> No CryptoContext loaded</div>}</div>;
}
