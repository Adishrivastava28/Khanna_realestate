// Carousel.js
import React, { useState } from 'react'
import './carousel.css'

const photos = [
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/500',
  // Add more photo URLs as needed
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? photos.length - 3 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const newIndex = currentIndex === photos.length - 3 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative" id="">
      <button
        className=""
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="flex justify-center items-center">
        {photos.slice(currentIndex, currentIndex + 3).map((photo, index) => (
          <img
            key={index}
            className="mx-2"
            src={photo}
            alt={`Photo ${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
