import { db } from '../../../utils/firebase';
import {
  doc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
} from 'firebase/firestore';
import { PerformanceMetrics } from '../../types/UserDataModels';

// Create performance metrics for a property
export const createPerformanceMetrics = async (propertyId: string, metricsData: PerformanceMetrics) => {
  const metricsCollectionRef = collection(db, 'properties', propertyId, 'performanceMetrics');
  await setDoc(doc(metricsCollectionRef), metricsData);
};

// Get performance metrics for a property
export const getPerformanceMetrics = async (propertyId: string) => {
  const metricsCollectionRef = collection(db, 'properties', propertyId, 'performanceMetrics');
  const querySnapshot = await getDocs(metricsCollectionRef);
  return querySnapshot.docs.map(doc => doc.data() as PerformanceMetrics);
};

// Update performance metrics
export const updatePerformanceMetrics = async (propertyId: string, metricId: string, metricsData: Partial<PerformanceMetrics>) => {
  const metricDocRef = doc(db, 'properties', propertyId, 'performanceMetrics', metricId);
  await updateDoc(metricDocRef, metricsData);
};

// Delete performance metrics
export const deletePerformanceMetrics = async (propertyId: string, metricId: string) => {
  const metricDocRef = doc(db, 'properties', propertyId, 'performanceMetrics', metricId);
  await deleteDoc(metricDocRef);
};
