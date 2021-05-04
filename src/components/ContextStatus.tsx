import { useContext } from "react";
import { InstanceContext } from "~/utils/InstanceContext";
import { Button } from "~/components/interface/Button";

export default function ContextStatus() {
  const context = useContext(InstanceContext);
  return (
    <div>
      {!context.keyPair && (
        <div>
          <p className="text-red-600 font-semibold text-xl text-center">
            No decrypton keys available, please create a new shery
          </p>
          <Button href="/share/create">Create new shery</Button>
        </div>
      )}
    </div>
  );
}
