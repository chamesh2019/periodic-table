import React from 'react';
import { Element } from '@/data/elements';

type ElementCardProps = {
  element: Element;
  onClick: (element: Element) => void;
};

// Helper function to determine if text should be dark or light based on background color
const getTextColor = (bgColor: string): string => {
  // Default to white text if no background color
  if (!bgColor) return 'text-white';
  
  // Convert hex to RGB
  const hex = bgColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black text for light backgrounds, white text for dark backgrounds
  return brightness > 0.6 ? 'text-gray-800' : 'text-white';
};

const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  const textColorClass = getTextColor(element.color);
  
  return (
    <div
      className={`cursor-pointer p-3 rounded-lg text-center shadow-md transition-transform duration-200 hover:scale-105 ${textColorClass}`}
      style={{ backgroundColor: element.color || '#666' }} // Added default color
      onClick={() => onClick(element)}
    >
      <div className="text-xs font-light">{element.atomicNumber}</div>
      <div className="text-xl font-bold mb-1">{element.symbol}</div>
      <div className="text-xs truncate">{element.name}</div> {/* Added element name */}
    </div>
  );
};

export default ElementCard;