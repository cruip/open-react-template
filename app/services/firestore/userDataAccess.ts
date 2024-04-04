import {auth, db} from "../../../utils/firebase";
import {doc, setDoc, getDoc, updateDoc, deleteDoc, collection, query, where, getDocs} from "firebase/firestore";
import {User} from "../../types/UserDataModels";
import {signInWithEmailAndPassword} from "firebase/auth";

const usersCollectionRef = collection(db, "users");

// Create a user with error handling
export const createUserInDb = async (userData: User): Promise<void | Error> => {
  try {
    await setDoc(doc(db, "users", userData.userId), userData);
  } catch (error) {
    console.error("Error creating user:", error);
    return error as Error;
  }
};

// Read a user's data with error handling
export const getUserfromDb = async (userId: string): Promise<User | null | Error> => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    return userDoc.exists() ? (userDoc.data() as User) : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return error as Error;
  }
};

// Update a user's data with error handling
export const updateUserInDb = async (userId: string, userData: Partial<User>): Promise<void | Error> => {
  try {
    console.log("userId", userId, "userData", userData);
    const userDocRef = doc(db, "users", userId);
    console.log("userDocRef", userDocRef);
    await updateDoc(userDocRef, userData);
  } catch (error) {
    console.error("Error updating user:", error);
    return error as Error;
  }
};

// Delete a user with error handling
export const deleteUserInDb = async (userId: string): Promise<void | Error> => {
  try {
    const userDocRef = doc(db, "users", userId);
    await deleteDoc(userDocRef);
  } catch (error) {
    console.error("Error deleting user:", error);
    return error as Error;
  }
};

export const getUserProperties = async (userId: string): Promise<string[] | Error> => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const userData = userDoc.data() as User;
      return userData.properties ?? []; // Return the properties array or an empty array if undefined
    } else {
      throw new Error(`User with ID ${userId} does not exist.`);
    }
  } catch (error) {
    console.error("Error fetching user properties:", error);
    return error as Error;
  }
};
