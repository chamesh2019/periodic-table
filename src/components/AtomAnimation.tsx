'use client';

import React from 'react';
import { Element } from '@/data/elements';
import { motion } from 'framer-motion';

type AtomAnimationProps = {
  element: Element;
};

const AtomAnimation: React.FC<AtomAnimationProps> = ({ element }) => {
  // Calculate appropriate number of electron shells (simplified)
  const getElectronShells = (): number[] => {
    const shells: number[] = [];
    let remainingElectrons = element.electrons;
    const shellCapacity = [2, 8, 18, 32, 32, 18, 8]; // Approximate max per shell
    
    for (let i = 0; i < shellCapacity.length && remainingElectrons > 0; i++) {
      const electronsInShell = Math.min(remainingElectrons, shellCapacity[i]);
      if (electronsInShell > 0) {
        shells.push(electronsInShell);
        remainingElectrons -= electronsInShell;
      }
    }
    
    return shells;
  };

  const electronShells = getElectronShells();

  // Calculate appropriate display of electrons (visual simplification)
  const getElectronsToShow = (shellIndex: number, totalInShell: number): number => {
    return Math.min(totalInShell, shellIndex === 0 ? 2 : 8);
  };

  return (
    <div className="atom-container w-full h-full relative flex items-center justify-center">
      {/* Nucleus */}
      <motion.div 
        className="nucleus absolute rounded-full z-10"
        style={{ 
          backgroundColor: element.color || '#666',
          width: `20px`,
          height: `20px`,
          boxShadow: `0 0 10px 2px ${element.color || '#666'}`
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Electron Shells */}
      {electronShells.map((electronsInShell, shellIndex) => {
        const multiplyer = element.atomicNumber <= 10 ? 60 : element.atomicNumber <= 37 ? 50 : element.atomicNumber <= 54 ? 40 : 30; // Adjust size based on atomic number
        const orbitSize = 15 + multiplyer + (shellIndex * multiplyer); // Diameter in pixels
        const orbitDuration = 3 + (shellIndex * 1.5); // Slower animations for better visibility
        const electronsToShow = getElectronsToShow(shellIndex, electronsInShell);
        
        return (
          <div 
            key={shellIndex}
            className="orbit absolute rounded-full border border-gray-600"
            style={{ 
              width: `${orbitSize}px`, 
              height: `${orbitSize}px`,
              opacity: 0.7 - shellIndex * 0.05, // Fading effect for outer shells
            }}
          >
            {/* This approach uses rotation around the center point */}
            {Array.from({ length: electronsToShow }).map((_, electronIndex) => {
              // Each electron is positioned at a different angle around the orbit
              const startAngle = (electronIndex / electronsToShow) * 360;
              
              return (
                <motion.div
                  key={`orbit-${electronIndex}`}
                  className="absolute w-full h-full"
                  style={{
                    transformOrigin: `${orbitSize / 2}px center`, // Adjust transform origin for proper alignment
                  }}
                  initial={{
                    rotate: startAngle
                  }}
                  animate={{
                    rotate: startAngle + 360
                  }}
                  transition={{
                    duration: orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  <div 
                    className="electron absolute rounded-full bg-blue-300"
                    style={{
                      width: '6px',
                      height: '6px',
                      boxShadow: '0 0 4px 1px rgba(100, 200, 255, 0.7)',
                      top: '-3px', // Center the electron vertically
                      left: '50%', // Center the electron horizontally
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        );
      })}
      
      {/* Element Symbol */}
      <div className="absolute -bottom-6 text-center">
        <span className="text-sm font-medium text-white/80">{element.symbol}</span>
      </div>
    </div>
  );
};

export default AtomAnimation;