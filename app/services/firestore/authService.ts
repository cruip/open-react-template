import { signInWithEmailAndPassword } from "firebase/auth";
import { getUserProperties } from "./userDataAccess";
import { User } from "../../types/UserDataModels";
import { auth } from "@/utils/firebase";

export const signInUser = async (email: string, password: string): Promise<User> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user) throw new Error("Login failed");
  
      // Extract necessary data from userCredential
      const {uid, email: userEmail} = userCredential.user;
  
      // Fetch user properties if necessary
      const properties = await getUserProperties(uid);
  
      // Construct the User object
      const user: User = {
        userId: uid,
        email: userEmail ?? "",
        properties: properties ?? [], // Assuming properties is an array of propertyId objects
      };
  
      return user;
    } catch (error) {
      console.error("Authentication sign in error:", error);
      throw error;
    }
  };