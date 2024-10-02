import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ children, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of the duplicate slide
  const [isTransitioning, setIsTransitioning] = useState(true);

  const childrenArray = React.Children.toArray(children);
  const childrenCount = childrenArray.length;
  const totalSlides = childrenCount + 2; // Includes duplicates of the first and last slide

  const carouselRef = useRef();

  const goToPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(childrenCount); // Go to the last actual slide
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex === totalSlides - 1) {
      setCurrentIndex(1); // Go to the first actual slide
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Auto-slide functionality with interval
  useEffect(() => {
    const intervalId = setInterval(goToNext, interval);
    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [currentIndex, interval]);

  // Handle infinite loop effect
  useEffect(() => {
    if (currentIndex === totalSlides - 1) {
      // Jump to the real first slide when we reach the duplicate first slide
      setTimeout(() => {
        setIsTransitioning(false); // Disable transition
        setCurrentIndex(1); // Jump to the real first slide
      }, 500); // Time it with the CSS transition
    } else if (currentIndex === 0) {
      // Jump to the real last slide when we reach the duplicate last slide
      setTimeout(() => {
        setIsTransitioning(false); // Disable transition
        setCurrentIndex(childrenCount); // Jump to the real last slide
      }, 500); // Time it with the CSS transition
    } else {
      setIsTransitioning(true); // Enable transitions during normal slide changes
    }
  }, [currentIndex, totalSlides, childrenCount]);

  return (
    <div className="relative flex justify-center items-center w-full max-w-4xl mx-auto overflow-hidden">
      {/* Left Arrow */}
      <button
        className="absolute left-0 p-2 rounded-full text-white z-10 hidden md:block"
        onClick={goToPrevious}
      >
        <svg
          width={12}
          height={20}
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z"
            fill="white"
          />
        </svg>
      </button>

      {/* Carousel Content */}
      <div
        ref={carouselRef}
        className={`w-full h-full flex transition-transform ${
          isTransitioning ? 'duration-500 ease-in-out' : ''
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={() => {
          if (!isTransitioning) setIsTransitioning(true); // Re-enable transitions after the jump
        }}
      >
        {/* Duplicate of the last slide at the beginning */}
        <div className="w-full h-full flex-shrink-0">{childrenArray[childrenCount - 1]}</div>

        {/* Actual slides */}
        {childrenArray.map((child, index) => (
          <div className="w-full h-full flex-shrink-0" key={index}>
            {child}
          </div>
        ))}

        {/* Duplicate of the first slide at the end */}
        <div className="w-full h-full flex-shrink-0">{childrenArray[0]}</div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 p-2 rounded-full text-white z-10 hidden md:block"
        onClick={goToNext}
      >
        <svg
          width={13}
          height={20}
          viewBox="0 0 13 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.025 20L0.25 18.225L8.475 10L0.25 1.775L2.025 0L12.025 10L2.025 20Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
