"use client";
import React, { useRef, useState, useEffect } from "react";
import { PiSpeakerSimpleLowThin,PiSpeakerSimpleSlashThin } from "react-icons/pi";

const videos = [
  "https://cdn.sanity.io/files/0hjyj1bs/production/8b52aadcd41bfe54855b2fc4d13fd512443bdbf5.mp4",
  "https://cdn.sanity.io/files/0hjyj1bs/production/e6081260b545e42360eddcfb9f63bb9993c8671f.mp4",
  "https://cdn.sanity.io/files/0hjyj1bs/production/8b52aadcd41bfe54855b2fc4d13fd512443bdbf5.mp4",
  "https://cdn.sanity.io/files/0hjyj1bs/production/e6081260b545e42360eddcfb9f63bb9993c8671f.mp4",
];

// Add thumbnails for each video (you should replace these with actual thumbnails)
const thumbnails = [
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
];

const Banner = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Handle video initialization and switching
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsVideoReady(true);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleEnded = () => {
      // Auto-play next video when current ends
      const nextIndex = (activeIndex + 1) % videos.length;
      setActiveIndex(nextIndex);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Set up video source only when activeIndex changes
    if (video.src !== videos[activeIndex]) {
      video.src = videos[activeIndex];
      setIsVideoReady(false);
    }
    
    video.muted = isMuted;
    
    if (isPlaying) {
      video.play().catch(error => {
        console.log("Auto-play prevented:", error);
      });
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [activeIndex, isPlaying]);

  // Handle mute/unmute without restarting video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleSound = () => setIsMuted((prev) => !prev);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const selectVideo = (idx) => {
    if (idx === activeIndex) return;
    
    setActiveIndex(idx);
    setCurrentTime(0);
    
    // Reset video playback
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Calculate progress percentage for timelapse/progress bar
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Determine next video index for the "Next" preview
  const nextIndex = (activeIndex + 1) % videos.length;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        className="w-full !h-screen object-cover"
        poster="https://cdn.sanity.io/images/0hjyj1bs/production/0c329663d0ca564350e044ceb52132e254157ded-2000x1143.webp"
      />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      {/* Sound toggle */}
      <button
        onClick={toggleSound}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-5 right-5 z-10  rounded-full text-white hover:bg-opacity-75 transition !text-2xl"
      >
        {isMuted ? <PiSpeakerSimpleSlashThin /> : <PiSpeakerSimpleLowThin />}
      </button>

      {/* Details and duration bar */}
      <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col gap-4 bg-black/40 w-fit  backdrop-blur-sm ">
        <div className="flex gap-2 items-center">
          {/* Thumbnail for next video */}
          <div className="w-20 h-20 bg-gray-800 overflow-hidden flex-none">
            <img
              src={thumbnails[nextIndex]}
              alt="Next video thumb"
              className="!w-full !h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center h-full gap-2 py-2 pr-2">
            <span className="text-[8px] text-gray-300 uppercase font-semibold">Next</span>
            <div className="text-xs font-medium text-white truncate">
              The Grand Reveal #{nextIndex + 1}
            </div>
            
          
            
            {/* Pagination dots and timelapse */}
            <div className="flex items-center gap-2 ">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  className={`relative w-8 h-[2px] overflow-hidden transition-colors duration-300
                    ${activeIndex === idx ? "bg-gray-400" : "bg-gray-600"}`}
                  onClick={() => selectVideo(idx)}
                  aria-label={`Go to video ${idx + 1}`}
                >
                  {/* Only active dot shows progress */}
                  {activeIndex === idx && (
                    <span
                      className="absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;