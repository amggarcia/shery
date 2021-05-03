import firebase from "firebase";
export interface Props {
  loading: boolean;
  error: firebase.FirebaseError;
}

export default function FireBaseStatusInfo(props: Props) {
  return (
    <div>
      {props.loading && <div>Loading information</div>}
      {props.error && (
        <div>Error loading information {props.error.message} </div>
      )}
    </div>
  );
}
