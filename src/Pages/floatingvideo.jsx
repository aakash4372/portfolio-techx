import React, { useState, useRef, useEffect } from 'react';

const FloatingVideoPlayer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  // Sample Instagram-style portrait video (9:16 aspect ratio)
  const videoUrl = "Banners/floatingvideo.mp4"; // Replace with your video URL

  const handleClose = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Match this with the CSS transition duration
  };

  // Ensure video maintains portrait aspect ratio
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.style.aspectRatio = '9/16';
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`floating-video-container ${isFading ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        width: '150px', // Reduced from 300px to make it more compact
        borderRadius: '8px', // Slightly smaller border radius
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)', // Lighter shadow
        zIndex: 1000,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div style={{ position: 'relative' }}>
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
          }}
        />
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '4px', // Reduced from 8px
            right: '4px', // Reduced from 8px
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '20px', // Smaller close button
            height: '20px', // Smaller close button
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '14px', // Smaller font
            fontWeight: 'bold',
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FloatingVideoPlayer;