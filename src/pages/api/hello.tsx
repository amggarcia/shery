import { generateKeyPairSync } from "crypto";

export default (req, res) => {
  res.status(200).json({ privateKey: "", publicKey: "" });
};
