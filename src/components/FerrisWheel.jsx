import './FerrisWheel.css';
import { useState } from 'react';

const photos = [
  { src: '/src/images/april-6-2023.jpg', caption: 'lol', },
  { src: '/src/images/dec-29-2023.jpg', caption: 'lol', },
  { src: '/src/images/feb-14-2023.jpg', caption: 'lol', },
  { src: '/src/images/feb-14-2024.jpg', caption: 'lol', },
  { src: '/src/images/feb-14-2025.jpg', caption: 'lol', },
  { src: '/src/images/jan-19-2024.jpg', caption: 'lol', },
  { src: '/src/images/june-9-2024.jpg', caption: 'lol', },
  { src: '/src/images/march-19-2023.jpg', caption: 'lol', },
  { src: '/src/images/nov-11-2023.jpg', caption: 'lol', },
  { src: '/src/images/nov-25-2023.jpg', caption: 'lol', },
  { src: '/src/images/oct-7-2023.jpg', caption: 'lol', },
  { src: '/src/images/oct-15-2023.jpg', caption: 'lol', },
  { src: '/src/images/oct-17-2024.jpg', caption: 'lol', },
  { src: '/src/images/oct-17-2024-2.jpg', caption: 'lol', },
  { src: '/src/images/oct-28-2023.jpg', caption: 'lol', },
];

export default function FerrisWheel() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="ferris-page">
      <h1 className="ferris-title">infinite loop <br></br> of love</h1>

      {selectedIndex === null ? (
        <div className="wheel-container">
          <div className="wheel spinning">
           {photos.map((photo, i) => (
            <div key={i} 
                className="spoke" 
                style={{ 
                  transform: `rotate(${i * (360 / photos.length)}deg)`, 
                  zIndex: photos.length - i 
                }}>
              <div className="photo-holder" onClick={() => handleClick(i)}>
                <img src={photo.src} alt={`photo-${i}`} />
              </div>
            </div>
          ))}
          </div>
        </div>
      ) : (
        <div className="fullscreen-view">
          <img src={photos[selectedIndex].src} alt={`photo-${selectedIndex}`} />
          <p className="photo-caption">{photos[selectedIndex].caption}</p>
          <button className="close-button" onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
}