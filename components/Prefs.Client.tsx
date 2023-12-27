import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { doc, arrayUnion, arrayRemove, updateDoc, collection, onSnapshot } from "@firebase/firestore";
import { getFirestore, setDoc} from "@firebase/firestore"
import { db } from '../firebase-config2'; // Adjust the path if necessary to correctly point to your firebase-config file
type PreferencesTabProps = {
  userEmail: string;
};
const PreferencesTab: React.FC<PreferencesTabProps> = ({ userEmail }) => {

  // State to manage preferences
  const staticOptions: string[] = [
    'Technology: AI',
    'Technology: Cryptocurrency',
    'Technology: Quantum Computing',
    'News: Politics',
    'News: World News',
    'News: Finance',
    'Sports: Basketball',
    'Sports: Football',
    'Sports: College Sports',
    'Art: Fashion',
    'Art: Fine Arts',
    'Art: Theater',
    'Art: Music',
    'Food: Cooking',
    'Music: Pop',
    'Music: Rap',
    'Music: Concerts',
    'Music: Indie',
    'Gaming',
    'Fitness',
    'Movies',
    'Travel',
    'Fashion',
    'Basketball',
    'Cooking'
  ];
  
  // State to manage search results and search query
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(staticOptions);

  // Function to handle search query changesu
  const handleSearch = (event: { target: { value: string; }; }) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the static options based on the query
    const filtered = staticOptions.filter(option =>
      option.toLowerCase().includes(query)
    );
    setFilteredOptions(filtered);
  };
  const [preferences, setPreferences] = useState([]);

  const addPreferenceToUser = async (newPreference: unknown) => {
    try {
      const userRef = doc(db, userEmail, "Preferences");
      await updateDoc(userRef, {
        prefs: arrayUnion(newPreference)
      });
      console.log(`Preference "${newPreference}" added to ${userEmail}`);
    } catch (error) {
      console.error("Error adding preference: ", error);
    }
  };

  const removePreference = async (preference: any) => {
    const preferencesRef = doc(db, userEmail, "Preferences");
    try {
      await updateDoc(preferencesRef, {
        prefs: arrayRemove(preference)
      });
      setPreferences(currentPreferences => currentPreferences.filter(p => p !== preference));
    } catch (error) {
      console.error("Error removing preference: ", error);
    }
  };
  useEffect(() => {
    const preferencesRef = doc(db, userEmail, "Preferences");

    // Listen for real-time updates
    const unsubscribe = onSnapshot(preferencesRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setPreferences(data.prefs || []); // Update state with new preferences
      } else {
        // Handle the case where the document does not exist
        try {
          setDoc(preferencesRef, { prefs: [] });
          console.log("Document with initial preferences created.");
        } catch (error) {
          console.error("Error creating document: ", error);
        }
      }
    });

    // Clean up the listener
    return () => unsubscribe();
  }, [userEmail]); // Re-run effect if userEmail changes
  // State to manage active tab

  return (
    <div className="user-profile">
      <div className="search-container">
        {/* Search bar */}
        <input className='flex items-center justify-center'
          type="text"
          placeholder="Search preferences..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="search-results">
          {filteredOptions.map(option => (
            <div key={option} onClick={() => addPreferenceToUser(option)}>{option}</div>
          ))}
        </div>
      </div>
     

      <div className="preferences">
        {/* <h3 className="h3 mb-4 text-black text-4xl">Your Preferences</h3> */}
        <div className="preferences-list">
          {preferences.map((preference) => (
            <button key={preference} className="preference-item " onClick={() => removePreference(preference)}>{preference}</button>
          ))}
        </div>
      </div>
      {/* ... other components ... */}
    </div>
  );
};

export default PreferencesTab;
