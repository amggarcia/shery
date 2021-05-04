import { ShareType } from "~/types/ShareType";
import { Input } from "~/components/interface/Input";

interface Props {
  share?: ShareType;
  //This one could probably be inside the share
  decryptedData?: string;
}

export default function ShareData(props: Props) {
  const { share, decryptedData } = props;
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
            type="text"
            label="Shery information"
            value={decryptedData}
          ></Input>
        </div>
      )}
    </div>
  );
}
