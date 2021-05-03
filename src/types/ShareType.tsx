export type ShareType = {
  data: string;
  publicKey: string;
  status: "created" | "edited" | "delete";
  validUntil: string;
};
