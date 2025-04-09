'use client';

import { useState } from 'react';
import { Element, elements, categoryColors } from '@/data/elements';
import { motion, AnimatePresence } from 'framer-motion';
import AtomAnimation from './AtomAnimation';
import ElementCard from './ElementCard';

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  
  const maxGroup = 18;
  const maxPeriod = 7;
  
  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };
  
  const closeElementDetail = () => {
    setSelectedElement(null);
  };
  
  // Get accent color for headings based on element category
  const getAccentColor = () => {
    if (!selectedElement) return 'text-white';
    
    // Use a brighter version of category color for headings
    const category = selectedElement.category;
    switch(category) {
      case 'alkali metal': return 'text-red-300';
      case 'alkaline earth metal': return 'text-orange-300';
      case 'transition metal': return 'text-yellow-300';
      case 'post-transition metal': return 'text-lime-300';
      case 'metalloid': return 'text-cyan-300';
      case 'nonmetal': return 'text-gray-300';
      case 'halogen': return 'text-blue-300';
      case 'noble gas': return 'text-purple-300';
      case 'lanthanide': return 'text-pink-300';
      case 'actinide': return 'text-rose-300';
      default: return 'text-white';
    }
  };
  
  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-8">
      
      {/* Legend */}
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4 text-white">Element Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: color }}></div>
              <span className="text-sm capitalize text-gray-200">{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Table Grid */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg overflow-auto">
        <div 
          className="grid gap-1.5 w-full"
          style={{
            gridTemplateColumns: `repeat(${maxGroup}, minmax(60px, 1fr))`,
            gridTemplateRows: `repeat(${maxPeriod}, minmax(80px, auto))`,
          }}
        >
          {/* Elements */}
          {elements.map(element => {
            const gridColumn = element.group;
            const gridRow = element.period;
            
            return (
              <div
                key={element.atomicNumber}
                style={{
                  gridColumn,
                  gridRow,
                }}
              >
                <ElementCard element={element} onClick={handleElementClick} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Element Detail Modal */}
      <AnimatePresence>
        {selectedElement && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeElementDetail}
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-8 max-w-3xl w-full border border-gray-700"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Element header with close button */}
              <div className="flex justify-between items-start mb-6">
                <h2 className={`text-4xl font-bold ${getAccentColor()}`}>
                  {selectedElement.name} 
                  <span className="text-gray-300 ml-2 text-2xl">({selectedElement.symbol})</span>
                </h2>
                <button 
                  className="text-gray-400 hover:text-white rounded-full p-1 transition-colors"
                  onClick={closeElementDetail}
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Element details */}
                <div className="flex-1">
                  <div className="bg-gray-800/50 rounded-lg p-5 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-gray-200">
                      <div>
                        <div className="text-gray-400 text-sm">Atomic Number</div>
                        <div className="font-semibold text-lg">{selectedElement.atomicNumber}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Atomic Mass</div>
                        <div className="font-semibold text-lg">{selectedElement.atomicMass.toFixed(4)}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Category</div>
                        <div className={`font-semibold capitalize text-lg ${getAccentColor()}`}>{selectedElement.category}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Block</div>
                        <div className="font-semibold text-lg">{selectedElement.block}-block</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Electron Configuration</div>
                        <div className="font-semibold">{selectedElement.electronConfiguration}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Period / Group</div>
                        <div className="font-semibold text-lg">{selectedElement.period} / {selectedElement.group}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="text-gray-300 font-semibold mb-3">Atomic Composition</div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center bg-blue-900/30 rounded-lg p-3">
                          <div className="text-blue-400 font-bold text-2xl">{selectedElement.protons}</div>
                          <div className="text-sm text-blue-200">protons</div>
                        </div>
                        <div className="flex flex-col items-center bg-green-900/30 rounded-lg p-3">
                          <div className="text-green-400 font-bold text-2xl">{selectedElement.neutrons}</div>
                          <div className="text-sm text-green-200">neutrons</div>
                        </div>
                        <div className="flex flex-col items-center bg-yellow-900/30 rounded-lg p-3">
                          <div className="text-yellow-400 font-bold text-2xl">{selectedElement.electrons}</div>
                          <div className="text-sm text-yellow-200">electrons</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Atom animation area */}
                <div className="w-full md:w-64 h-64 flex items-center justify-center bg-gray-800/30 rounded-lg border border-gray-700">
                  <AtomAnimation element={selectedElement} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <footer className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Interactive Periodic Table | All elements data based on current scientific knowledge</p>
      </footer>
    </div>
  );
}