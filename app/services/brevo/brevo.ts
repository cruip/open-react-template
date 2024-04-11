import { httpsCallable } from 'firebase/functions';
import {functions} from "@/utils/firebase";

export const createOrUpdateBrevoContact = async ( email: string, listIds: number[], userId?: string, ) => {
try {
    // Assuming the name of your Firebase Function is 'createOrUpdateBrevoContact'
    const createOrUpdateBrevoContact = httpsCallable(functions, 'createOrUpdateBrevoContact');
    const ext_id = userId || "unregistered";
    const crmResponse = await createOrUpdateBrevoContact({ email, ext_id, listIds });
    console.log('CRM contact created/updated successfully:', crmResponse.data);
  } catch (error) {
    console.error('Error creating CRM contact:', error);
    // Handle the error according to your app's needs, such as showing a message to the user
  }
}