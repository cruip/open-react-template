import { db } from '../../../utils/firebase';
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
} from 'firebase/firestore';
import { Expenses, MortgageDetails, Property } from '../../types/UserDataModels';

export const createProperty = async (propertyData: Partial<Property>): Promise<string | Error> => {
  try {
    const docRef = await addDoc(collection(db, 'properties'), propertyData);
    const propertyId = docRef.id;
    await updateDoc(docRef, { propertyId }); // Update the document with its own ID

    return propertyId; // Return the ID of the newly created document
  } catch (error) {
    console.error("Error creating property:", error);
    return error as Error;
  }
};
  
  // Get a property by ID with error handling
  export const getProperty = async (propertyId: string): Promise<Property | null | Error> => {
    try {
      const propertyDocRef = doc(db, 'properties', propertyId);
      const propertyDoc = await getDoc(propertyDocRef);
      return propertyDoc.exists() ? (propertyDoc.data() as Property) : null;
    } catch (error) {
      console.error("Error fetching property:", error);
      return error as Error;
    }
  };

  export const fetchPropertiesBatch = async (propertyIds: string[]): Promise<{ properties: { [propertyId: string]: Property }, errors: { [propertyId: string]: Error } }> => {
    let result = {
      properties: {} as { [propertyId: string]: Property },
      errors: {} as { [propertyId: string]: Error }
    };
  
    console.log("Starting batch property fetch for IDs:", propertyIds);
  
    for (const propertyId of propertyIds) {
      try {
        console.log(`Fetching property with ID: ${propertyId}`);
        const propertyData = await getProperty(propertyId);
  
        if (propertyData && !(propertyData instanceof Error)) {
          console.log(`Property fetched successfully for ID: ${propertyId}`, propertyData);
          result.properties[propertyId] = propertyData;
        } else {
          throw new Error(`Property not found or invalid data for ID: ${propertyId}`);
        }
      } catch (error) {
        console.error(`Error fetching property for ID: ${propertyId}`, error);
        result.errors[propertyId] = error as Error;
      }
    }
  
    console.log("Batch property fetch result:", result);
    return result;
  };
  
  
  // Update a property with error handling
  export const updateProperty = async (propertyId: string, propertyData: Partial<Property>): Promise<void | Error> => {
    try {
      const propertyDocRef = doc(db, 'properties', propertyId);
      await updateDoc(propertyDocRef, propertyData);
    } catch (error) {
      console.error("Error updating property:", error);
      return error as Error;
    }
  };

  export const updateExpenses = async (propertyId: string, expenses: Partial<Expenses>): Promise<void | Error> => {
    try {
      const propertyDocRef = doc(db, 'properties', propertyId);
      console.log("Updating expenses for property ID:", propertyId);
      const propertyDoc = await getDoc(propertyDocRef);
      if (propertyDoc.exists()) {
        const propertyData = propertyDoc.data() as Property;
        const updatedExpenses = { ...propertyData.expenses, ...expenses };
        await updateDoc(propertyDocRef, { expenses: updatedExpenses });
      } else {
        throw new Error(`Property not found for ID: ${propertyId}`);
      }
    } catch (error) {
      console.error("Error updating expenses:", error);
      return error as Error;
    }
  }

  export const updateMortgageDetails = async (propertyId: string, mortgageDetails: Partial<MortgageDetails>): Promise<void | Error> => {
    try {
      const propertyDocRef = doc(db, 'properties', propertyId);
      console.log("Updating mortgage details for property ID:", propertyId);
      const propertyDoc = await getDoc(propertyDocRef);
      if (propertyDoc.exists()) {
        const propertyData = propertyDoc.data() as Property;
        const updatedMortgageDetails = { ...propertyData.mortgageDetails, ...mortgageDetails };
        await updateDoc(propertyDocRef, { mortgageDetails: updatedMortgageDetails });
      } else {
        throw new Error(`Property not found for ID: ${propertyId}`);
      }
    } catch (error) {
      console.error("Error updating mortgage details:", error);
      return error as Error;
    }
  }
  
  // Delete a property with error handling
  export const deleteProperty = async (propertyId: string): Promise<void | Error> => {
    try {
      const propertyDocRef = doc(db, 'properties', propertyId);
      await deleteDoc(propertyDocRef);
    } catch (error) {
      console.error("Error deleting property:", error);
      return error as Error;
    }
  }
