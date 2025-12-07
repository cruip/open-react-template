"use client";

import { useState, useRef } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface ModalVideoProps {
  thumb: StaticImageData | string;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth?: number;
  videoHeight?: number;
  isYouTube?: boolean;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  isYouTube = false,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative">
      {/* Secondary illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>

      {/* Video thumbnail */}
      <button
        className="group relative flex w-full items-center justify-center rounded-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-warm-sand/50"
        onClick={() => {
          setModalOpen(true);
        }}
        aria-label="Watch the video"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <figure className="relative w-full overflow-hidden rounded-2xl">
          <Image
            className="w-full h-auto object-cover"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-charcoal-blue/30 transition-opacity group-hover:bg-charcoal-blue/20" />
        </figure>
        {/* Play icon */}
        <span className="pointer-events-none absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-charcoal-blue before:duration-300 group-hover:before:scale-110">
          <span className="relative flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
            >
              <path
                fill="url(#pla)"
                fillRule="evenodd"
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
                clipRule="evenodd"
              />
              <defs>
                <linearGradient
                  id="pla"
                  x1={10}
                  x2={10}
                  y1={0}
                  y2={20}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#cca989" />
                  <stop offset={1} stopColor="#9bacbc" stopOpacity=".72" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-sm font-medium leading-tight text-cadet-blue">
              Watch Demo
              <span className="text-cadet-blue/50"> - </span>
              Drone Inspection
            </span>
          </span>
        </span>
      </button>
      {/* End: Video thumbnail */}

      <Dialog
        initialFocus={isYouTube ? iframeRef : videoRef}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 z-99999 bg-black/70 transition-opacity duration-300 ease-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-99999 flex items-center justify-center p-2 sm:p-4 md:p-8">
          <DialogPanel
            transition
            className="w-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {isYouTube ? (
                <iframe
                  ref={iframeRef}
                  src={modalOpen ? `${video}?autoplay=1&rel=0&modestbranding=1` : ""}
                  title="Drone Building Inspection"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              ) : (
                <video
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                  loop
                  controls
                  autoPlay
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
