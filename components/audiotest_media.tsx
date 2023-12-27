import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause } from 'react-icons/fa';

interface AudioPlayerProps {
    url: string;
    style?: React.CSSProperties; 
    title: string;
    // Add this line to include a style property

}

const AudioPlayerMedia: React.FC<AudioPlayerProps> = ({ url, style, title}) => {
    const waveformRef = useRef<HTMLDivElement>(null);
    const wavesurfer = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (waveformRef.current) {
            wavesurfer.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: 'white',
                progressColor: 'grey',
                cursorColor: "white",
                barWidth: 2,
                // Optionally, specify the spacing between bars
                barGap: 1,
                // And the bar radius
                barRadius: 2,
                renderFunction: (channels, ctx) => {
                    const { width, height } = ctx.canvas
                    const scale = channels[0].length / width
                    const step = 10

                    ctx.translate(0, height / 2)
                    ctx.strokeStyle = ctx.fillStyle
                    ctx.beginPath()

                    for (let i = 0; i < width; i += step * 2) {
                        const index = Math.floor(i * scale)
                        const value = Math.abs(channels[0][index])
                        let x = i
                        let y = value * height

                        ctx.moveTo(x, 0)
                        ctx.lineTo(x, y)
                        ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, true)
                        ctx.lineTo(x + step, 0)

                        x = x + step
                        y = -y
                        ctx.moveTo(x, 0)
                        ctx.lineTo(x, y)
                        ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, false)
                        ctx.lineTo(x + step, 0)
                    }

                    ctx.stroke()
                    ctx.closePath()
                },
                // Add more options here if needed
            });

            wavesurfer.current.load(url);

            wavesurfer.current.on('play', () => setIsPlaying(true));
            wavesurfer.current.on('pause', () => setIsPlaying(false));
            wavesurfer.current.on('finish', () => setIsPlaying(false));
        }

        return () => wavesurfer.current?.destroy();
    }, [url]);

    const handlePlayPause = () => {
        wavesurfer.current?.playPause();
    };

    return (
        <div style={style}>
            <h1 className='audio-heading'>{title}</h1>
            <div style={{
                display: 'flex', alignItems: 'center',
                width: 800,
                backgroundColor: '#5E1AED', 
                borderRadius: '10px 45px 45px 10px',
                padding: '10px'
            }}>
                <button onClick={handlePlayPause} style={{ marginRight: '10px', color: 'white' }}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <div id="waveform" ref={waveformRef} style={{ width: 800 }} />
            </div>
        </div>

    );
};

export default AudioPlayerMedia;
