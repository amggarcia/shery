import { ShareType } from "~/types/ShareType";

interface Props {
  share?: ShareType;
  //This one could probably be inside the share
  decryptedData?: string;
}

export default function ShareData(props: Props) {
  const { share, decryptedData } = props;
  return (
    <div>
      {props.share && (
        <div>
          <div>
            <p>SecretText</p>
            <div>{share.data}</div>
          </div>
          <div>
            <p>DecryptedText</p>
            <div>{decryptedData}</div>
          </div>
        </div>
      )}
    </div>
  );
}
