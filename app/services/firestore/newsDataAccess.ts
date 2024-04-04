import {db} from "../../../utils/firebase";
import {doc, getDocs, updateDoc, deleteDoc, collection, addDoc, FirestoreError} from "firebase/firestore";
import {Expenses, MortgageDetails, Property, News, NewsContent} from "../../types/UserDataModels";

export const fetchNews = async (): Promise<News[] | FirestoreError> => {
  try {
    const newsCollectionRef = collection(db, "news");
    const querySnapshot = await getDocs(newsCollectionRef);
    const newsData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} as News)); // Include document ID
    console.log(newsData); // Console log the newsData
    return newsData;
  } catch (error) {
    console.error("Error fetching news:", error);
    return error as FirestoreError; // Use FirestoreError for more specific error handling
  }
};
