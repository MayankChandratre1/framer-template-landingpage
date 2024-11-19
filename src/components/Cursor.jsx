import React, { useState, useEffect } from 'react'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Function to handle mouse movement
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', // Prevent cursor from blocking interactions
        zIndex: 9999, // Ensure it's above other elements
        width: '180px', // Size of the magnifying glass
        height: '180px',
        borderRadius: '50%',
        // background: `url(${document.documentElement.style.backgroundImage || ''})`, // Use background image
        backgroundSize: '200%', // Zoom effect
        backgroundPosition: `${-position.x * 2}px ${-position.y * 2}px`, // Adjust position to create zoom
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Add shadow for magnifying glass effect
        border: '2px solid rgba(255, 255, 255, 0.8)',
        backdropFilter: 'invert(1)', // Slight blur for extra realism
      }}
      className='hidden md:block'
    />
  )
}

export default Cursor
