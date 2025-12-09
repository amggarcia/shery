import { Timestamp, FieldValue } from "firebase/firestore";

export type ShareType = {
  data: string;
  publicKey: string;
  status: "created" | "edited" | "delete";
  validUntil: string;
  createdBy: string;
  createdAt: Timestamp | FieldValue;
};
