import { useEffect, useRef } from 'react';

export default function CardImageOverlay({ title, type, date, thumnail, idx, handleClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const adjustHeights = () => {
      const cards = document.querySelectorAll('.card');
      let maxHeight = 0;

      // Reset height to auto before recalculating
      cards.forEach((card) => {
        card.style.height = 'auto';
      });

      // Find the max height
      cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });

      // Set all cards to the max height
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    const handleLoad = () => {
      adjustHeights(); // Adjust heights after images load
    };

    // Wait for images to load before adjusting heights
    const images = document.querySelectorAll('.card img');
    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
      }
    });

    // Adjust heights when the component mounts or the window resizes
    window.addEventListener('resize', adjustHeights);

    return () => {
      window.removeEventListener('resize', adjustHeights);
    };
  }, [title]);

  return (
    <div
      ref={cardRef}
      onClick={() => handleClick(title)}
      key={idx}
      className="card overflow-hidden rounded bg-transparent text-slate-500 shadow-md shadow-blue-800 max-w-md cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      {/* Image */}
      <figure className="w-full">
        <img src={thumnail} alt="card image" className="w-full h-full" />
      </figure>

      {/* Body */}
      <div className="p-6">
        <header>
          <h3 className="text-xl font-medium text-slate-700">{title}</h3>
          <p className="text-sm text-slate-400">
            {type?.charAt(0).toUpperCase() + type?.slice(1)}, {date}
          </p>
        </header>
      </div>
    </div>
  );
}
