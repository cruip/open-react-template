import React, { useEffect, useState } from 'react';
import { storage } from '../firebase-config2'; // Adjust the path if necessary to correctly point to your firebase-config file
import AudioPlayer from './audiotest_media'; // import the AudioPlayer component
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

type MediaTabProps = {
    userEmail: string;
};
const MediaTab: React.FC<MediaTabProps> = ({ userEmail }) => {

    const [audioUrls, setAudioUrls] = useState<string[]>([]);

    useEffect(() => {
        const fetchAudioUrls = async () => {
            const storageRef = ref(storage);
            try {
                const result = await listAll(storageRef);

                const matchingItems = result.items.filter(itemRef => {
                    // Construct the expected pattern for the filename
                    if (itemRef.name.includes(userEmail)){
                        return itemRef
                    }
              
                });

            
                // console.log(result)
                const urlPromises = matchingItems.map(itemRef => getDownloadURL(itemRef));
                const urls = await Promise.all(urlPromises);
                console.log(urls)
                setAudioUrls(urls);
            } catch (error) {
                console.error("Error fetching audio URLs:", error);
            }
        };

        fetchAudioUrls();
    }, [userEmail]);

    const renderAudioPlayerOrMessage = (urlIndex: number, title: string) => {
        return audioUrls[urlIndex] ? (
            <AudioPlayer url={audioUrls[urlIndex]} title={title} style={{ marginBottom: '20px' }} />
        ) : (
            <div style={{
                color: "black"
            }}>No audio exists for {title}</div>
        );
    };
    return (
        <div>
            <h1 className="audio-title" style={{ marginBottom: '70px' }} >Listen To Your Latest Media!</h1>
            <div className="user-profile" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px', // Adds space between each AudioPlayer
                height: '100%' // Adjust as needed
            }}>

                {renderAudioPlayerOrMessage(0, "Today")}
                {renderAudioPlayerOrMessage(1, "Yesterday")}
                {renderAudioPlayerOrMessage(2, "Two Days Ago")}
            </div>

        </div>


    );
};

export default MediaTab;
