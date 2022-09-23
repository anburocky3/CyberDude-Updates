import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { LoginCredentials } from "types/Global";
import { db } from "./firebase";

export function Logout() {
  const auth = getAuth();
  return new Promise(function (resolve, reject) {
    signOut(auth)
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject("Something went wrong!");
      });
  });
}

export function loginWithEmail({ user, pass }: LoginCredentials) {
  return new Promise(function (resolve, reject) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user, pass).then((response) => {
      console.log(response);
      resolve(response);
    });
  });
}

export function getDataById(col: string, docId: string) {
  return new Promise(function (resolve, reject) {
    const docRef = doc(db, col, docId);
    getDoc(docRef)
      .then((e) => {
        resolve(e.data());
      })
      .catch((e) => {
        reject(e);
      });
  });
}
