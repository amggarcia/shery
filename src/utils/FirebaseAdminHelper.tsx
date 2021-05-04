import admin from "firebase-admin";
const firebaseAdminConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: JSON.parse(process.env.FIREBASE_PRIVATE_KEY).replace(
    /\\n/g,
    "\n"
  ),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

function initializeFirebaseAdmin() {
  if (!admin.apps.length) {
    const firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert({ ...firebaseAdminConfig }),
    });
  }
  return admin;
}

export const auth = initializeFirebaseAdmin().auth();
