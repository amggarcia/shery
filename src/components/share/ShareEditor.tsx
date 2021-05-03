import { useRouter } from "next/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { db } from "~/utils/FireBaseHelper";
import FireBaseStatusInfo from "~/components/FirebaseStatusInfo";
import { useForm } from "react-hook-form";
import { Input } from "~/components/interface/Input";
import { Button } from "~/components/interface/Button";
import { EncryptData } from "~/utils/CryptoHelper";
import { ShareType } from "~/types/ShareType";
type InputType = {
  shareData: string;
};
export default function ShareEditor() {
  const router = useRouter();
  const { id } = router.query;
  const [share, loading, error] = useDocumentOnce<ShareType>(
    db.doc(`share/${id}`)
  );
  const { register, handleSubmit } = useForm<InputType>();
  const submitHandler = async (data: InputType) => {
    const shareData = share.data();
    const encryptedString = EncryptData(shareData.publicKey, data.shareData);
    share.ref.update({ data: encryptedString });
  };
  return (
    <div>
      {share && (
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Input label="Data" type="text" {...register("shareData")}></Input>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      )}
      <FireBaseStatusInfo loading={loading} error={error}></FireBaseStatusInfo>
    </div>
  );
}
