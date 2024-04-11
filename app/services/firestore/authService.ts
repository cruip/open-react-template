import { signInWithEmailAndPassword } from "firebase/auth";
import { getUserProperties } from "./userDataAccess";
import { User as UserDb } from "../../types/UserDataModels";
import { auth } from "@/utils/firebase";

export const signInUser = async (email: string, password: string): Promise<UserDb> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user) throw new Error("Login failed");
  
      // Extract necessary data from userCredential
      const {uid, email: userEmail,} = userCredential.user;
  
      // Fetch user properties if necessary
      const properties = await getUserProperties(uid);
  
      if (properties instanceof Error) {
        console.error("Failed to get user properties:", properties);
        throw properties;
      }
      // Construct the User object
      const user: UserDb = {
        userId: uid,
        email: userEmail ?? "",
        properties: properties ?? [], // Assuming properties is an array of propertyId objects
        isSubscribed: false, // Assuming isSubscribed is a boolean
      };
  
      return user;
    } catch (error) {
      console.error("Authentication sign in error:", error);
      throw error;
    }
  };