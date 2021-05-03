import NodeRSA from "node-rsa";

export function GenerateKeyPair() {
  const key = new NodeRSA().generateKeyPair();
  return key;
}

export function EncryptData(keyData: string, sourceData: string) {
  const key = new NodeRSA();
  key.importKey(keyData, "public");
  const encryptedString = key.encrypt(sourceData, "base64");
  return encryptedString;
}

export function DecryptData(keyData: any, cipher: string) {
  const encryptedString = keyData.decrypt(cipher, "utf-8");
  return encryptedString;
}
