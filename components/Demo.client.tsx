import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import speaking from '@/public/images/speaking.png';
// import audioFile from '@/public/audio/output.mp3';
import AudioPlayer from './audiotest'; // import the AudioPlayer component

import { useState } from "react";


export default function Demo() {
  // const playList = [
  //   {
  //     name: 'name',
  //     writer: 'writer',
  //     // img: 'image.jpg',
  //     src: "audio/output.mp3",
  //     id: 1,
  //   },
  // ]
  // const defaultInterfacePlacement = {
  //   templateArea: {
  //     playButton: "row1-1",
  //   },
  // };
  // const [interfacePlacement, setInterfacePlacement] = useState<InterfaceGridTemplateArea<1>>();
  return (
    <section>

      <div className="flex justify-center items-center" data-aos="fade-down" data-aos-delay="100">
        {/* <div className="image-container">
          <Link href="/" aria-label="Cruip">
            <Image src={speaking} alt="Logo" style={{ display: 'block' }} />
          </Link>
        </div> */}
        <div className="flex justify-center items-center" style={{ width: '100%' }}>
          {/* Other elements */}
          <AudioPlayer url="/audio/output.mp3" />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center" data-aos="fade-down" data-aos-delay="100">
        <h2 className="h2 mb-4">LISTEN TO TODAY'S BIT ON THE NBA, NFL, AND FASHION</h2>
      </div>
    </section>
  );
}
