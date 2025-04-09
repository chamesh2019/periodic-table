export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: string;
  group: number;
  period: number;
  block: string;
  electronConfiguration: string;
  electrons: number;
  neutrons: number;
  protons: number;
  color: string;
}

// Updated category colors for better dark mode contrast
export const categoryColors = {
  "alkali metal": "#ff7979", // Brighter red
  "alkaline earth metal": "#ffc078", // Brighter orange
  "transition metal": "#f6e58d", // Brighter yellow
  "post-transition metal": "#badc58", // Brighter lime green
  "metalloid": "#7ed6df", // Brighter cyan
  "nonmetal": "#95a5a6", // Light gray (was green, adjusted for contrast)
  "halogen": "#74b9ff", // Brighter blue
  "noble gas": "#a29bfe", // Brighter purple
  "lanthanide": "#fd79a8", // Brighter pink
  "actinide": "#fab1a0", // Brighter peach
  "unknown": "#636e72" // Dark gray for unknown/placeholder categories if needed
};

export const elements: Element[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: 1.008,
    category: "nonmetal",
    group: 1,
    period: 1,
    block: "s",
    electronConfiguration: "1s1",
    electrons: 1,
    neutrons: 0,
    protons: 1,
    color: categoryColors["nonmetal"] // Use category color
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    atomicMass: 4.0026,
    category: "noble gas",
    group: 18,
    period: 1,
    block: "s",
    electronConfiguration: "1s2",
    electrons: 2,
    neutrons: 2,
    protons: 2,
    color: categoryColors["noble gas"] // Use category color
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    atomicMass: 6.94,
    category: "alkali metal",
    group: 1,
    period: 2,
    block: "s",
    electronConfiguration: "1s2 2s1",
    electrons: 3,
    neutrons: 4,
    protons: 3,
    color: categoryColors["alkali metal"] // Use category color
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    atomicMass: 9.0122,
    category: "alkaline earth metal",
    group: 2,
    period: 2,
    block: "s",
    electronConfiguration: "1s2 2s2",
    electrons: 4,
    neutrons: 5,
    protons: 4,
    color: categoryColors["alkaline earth metal"] // Use category color
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    atomicMass: 10.81,
    category: "metalloid",
    group: 13,
    period: 2,
    block: "p",
    electronConfiguration: "1s2 2s2 2p1",
    electrons: 5,
    neutrons: 6,
    protons: 5,
    color: categoryColors["metalloid"] // Use category color
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    atomicMass: 12.011,
    category: "nonmetal",
    group: 14,
    period: 2,
    block: "p",
    electronConfiguration: "1s2 2s2 2p2",
    electrons: 6,
    neutrons: 6,
    protons: 6,
    color: categoryColors["nonmetal"] // Use category color
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    atomicMass: 14.007,
    category: "nonmetal",
    group: 15,
    period: 2,
    block: "p",
    electronConfiguration: "1s2 2s2 2p3",
    electrons: 7,
    neutrons: 7,
    protons: 7,
    color: categoryColors["nonmetal"] // Use category color
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    atomicMass: 15.999,
    category: "nonmetal",
    group: 16,
    period: 2,
    block: "p",
    electronConfiguration: "1s2 2s2 2p4",
    electrons: 8,
    neutrons: 8,
    protons: 8,
    color: categoryColors["nonmetal"] // Use category color
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    atomicMass: 18.998,
    category: "halogen",
    group: 17,
    period: 2,
    block: "p",
    electronConfiguration: "1s2 2s2 2p5",
    electrons: 9,
    neutrons: 10,
    protons: 9,
    color: categoryColors["halogen"] // Use category color
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    atomicMass: 20.180,
    category: "noble gas",
    group: 18,
    period: 2,
    block: "p",
    electronConfiguration: "1s2 2s2 2p6",
    electrons: 10,
    neutrons: 10,
    protons: 10,
    color: categoryColors["noble gas"] // Use category color
  },
  // Added elements 11-118
  { atomicNumber: 11, symbol: "Na", name: "Sodium", atomicMass: 22.990, category: "alkali metal", group: 1, period: 3, block: "s", electronConfiguration: "[Ne] 3s1", electrons: 11, neutrons: 12, protons: 11, color: categoryColors["alkali metal"] },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", atomicMass: 24.305, category: "alkaline earth metal", group: 2, period: 3, block: "s", electronConfiguration: "[Ne] 3s2", electrons: 12, neutrons: 12, protons: 12, color: categoryColors["alkaline earth metal"] },
  { atomicNumber: 13, symbol: "Al", name: "Aluminum", atomicMass: 26.982, category: "post-transition metal", group: 13, period: 3, block: "p", electronConfiguration: "[Ne] 3s2 3p1", electrons: 13, neutrons: 14, protons: 13, color: categoryColors["post-transition metal"] },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", atomicMass: 28.085, category: "metalloid", group: 14, period: 3, block: "p", electronConfiguration: "[Ne] 3s2 3p2", electrons: 14, neutrons: 14, protons: 14, color: categoryColors["metalloid"] },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", atomicMass: 30.974, category: "nonmetal", group: 15, period: 3, block: "p", electronConfiguration: "[Ne] 3s2 3p3", electrons: 15, neutrons: 16, protons: 15, color: categoryColors["nonmetal"] },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", atomicMass: 32.06, category: "nonmetal", group: 16, period: 3, block: "p", electronConfiguration: "[Ne] 3s2 3p4", electrons: 16, neutrons: 16, protons: 16, color: categoryColors["nonmetal"] },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", atomicMass: 35.45, category: "halogen", group: 17, period: 3, block: "p", electronConfiguration: "[Ne] 3s2 3p5", electrons: 17, neutrons: 18, protons: 17, color: categoryColors["halogen"] },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", atomicMass: 39.948, category: "noble gas", group: 18, period: 3, block: "p", electronConfiguration: "[Ne] 3s2 3p6", electrons: 18, neutrons: 22, protons: 18, color: categoryColors["noble gas"] },
  { atomicNumber: 19, symbol: "K", name: "Potassium", atomicMass: 39.098, category: "alkali metal", group: 1, period: 4, block: "s", electronConfiguration: "[Ar] 4s1", electrons: 19, neutrons: 20, protons: 19, color: categoryColors["alkali metal"] },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", atomicMass: 40.078, category: "alkaline earth metal", group: 2, period: 4, block: "s", electronConfiguration: "[Ar] 4s2", electrons: 20, neutrons: 20, protons: 20, color: categoryColors["alkaline earth metal"] },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", atomicMass: 44.956, category: "transition metal", group: 3, period: 4, block: "d", electronConfiguration: "[Ar] 3d1 4s2", electrons: 21, neutrons: 24, protons: 21, color: categoryColors["transition metal"] },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", atomicMass: 47.867, category: "transition metal", group: 4, period: 4, block: "d", electronConfiguration: "[Ar] 3d2 4s2", electrons: 22, neutrons: 26, protons: 22, color: categoryColors["transition metal"] },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", atomicMass: 50.942, category: "transition metal", group: 5, period: 4, block: "d", electronConfiguration: "[Ar] 3d3 4s2", electrons: 23, neutrons: 28, protons: 23, color: categoryColors["transition metal"] },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", atomicMass: 51.996, category: "transition metal", group: 6, period: 4, block: "d", electronConfiguration: "[Ar] 3d5 4s1", electrons: 24, neutrons: 28, protons: 24, color: categoryColors["transition metal"] },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", atomicMass: 54.938, category: "transition metal", group: 7, period: 4, block: "d", electronConfiguration: "[Ar] 3d5 4s2", electrons: 25, neutrons: 30, protons: 25, color: categoryColors["transition metal"] },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", atomicMass: 55.845, category: "transition metal", group: 8, period: 4, block: "d", electronConfiguration: "[Ar] 3d6 4s2", electrons: 26, neutrons: 30, protons: 26, color: categoryColors["transition metal"] },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", atomicMass: 58.933, category: "transition metal", group: 9, period: 4, block: "d", electronConfiguration: "[Ar] 3d7 4s2", electrons: 27, neutrons: 32, protons: 27, color: categoryColors["transition metal"] },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", atomicMass: 58.693, category: "transition metal", group: 10, period: 4, block: "d", electronConfiguration: "[Ar] 3d8 4s2", electrons: 28, neutrons: 31, protons: 28, color: categoryColors["transition metal"] },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", atomicMass: 63.546, category: "transition metal", group: 11, period: 4, block: "d", electronConfiguration: "[Ar] 3d10 4s1", electrons: 29, neutrons: 35, protons: 29, color: categoryColors["transition metal"] },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", atomicMass: 65.38, category: "transition metal", group: 12, period: 4, block: "d", electronConfiguration: "[Ar] 3d10 4s2", electrons: 30, neutrons: 35, protons: 30, color: categoryColors["transition metal"] },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", atomicMass: 69.723, category: "post-transition metal", group: 13, period: 4, block: "p", electronConfiguration: "[Ar] 3d10 4s2 4p1", electrons: 31, neutrons: 39, protons: 31, color: categoryColors["post-transition metal"] },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", atomicMass: 72.63, category: "metalloid", group: 14, period: 4, block: "p", electronConfiguration: "[Ar] 3d10 4s2 4p2", electrons: 32, neutrons: 41, protons: 32, color: categoryColors["metalloid"] },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", atomicMass: 74.922, category: "metalloid", group: 15, period: 4, block: "p", electronConfiguration: "[Ar] 3d10 4s2 4p3", electrons: 33, neutrons: 42, protons: 33, color: categoryColors["metalloid"] },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", atomicMass: 78.971, category: "nonmetal", group: 16, period: 4, block: "p", electronConfiguration: "[Ar] 3d10 4s2 4p4", electrons: 34, neutrons: 45, protons: 34, color: categoryColors["nonmetal"] },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", atomicMass: 79.904, category: "halogen", group: 17, period: 4, block: "p", electronConfiguration: "[Ar] 3d10 4s2 4p5", electrons: 35, neutrons: 45, protons: 35, color: categoryColors["halogen"] },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", atomicMass: 83.798, category: "noble gas", group: 18, period: 4, block: "p", electronConfiguration: "[Ar] 3d10 4s2 4p6", electrons: 36, neutrons: 48, protons: 36, color: categoryColors["noble gas"] },
  { atomicNumber: 37, symbol: "Rb", name: "Rubidium", atomicMass: 85.468, category: "alkali metal", group: 1, period: 5, block: "s", electronConfiguration: "[Kr] 5s1", electrons: 37, neutrons: 48, protons: 37, color: categoryColors["alkali metal"] },
  { atomicNumber: 38, symbol: "Sr", name: "Strontium", atomicMass: 87.62, category: "alkaline earth metal", group: 2, period: 5, block: "s", electronConfiguration: "[Kr] 5s2", electrons: 38, neutrons: 50, protons: 38, color: categoryColors["alkaline earth metal"] },
  { atomicNumber: 39, symbol: "Y", name: "Yttrium", atomicMass: 88.906, category: "transition metal", group: 3, period: 5, block: "d", electronConfiguration: "[Kr] 4d1 5s2", electrons: 39, neutrons: 50, protons: 39, color: categoryColors["transition metal"] },
  { atomicNumber: 40, symbol: "Zr", name: "Zirconium", atomicMass: 91.224, category: "transition metal", group: 4, period: 5, block: "d", electronConfiguration: "[Kr] 4d2 5s2", electrons: 40, neutrons: 51, protons: 40, color: categoryColors["transition metal"] },
  { atomicNumber: 41, symbol: "Nb", name: "Niobium", atomicMass: 92.906, category: "transition metal", group: 5, period: 5, block: "d", electronConfiguration: "[Kr] 4d4 5s1", electrons: 41, neutrons: 52, protons: 41, color: categoryColors["transition metal"] },
  { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", atomicMass: 95.96, category: "transition metal", group: 6, period: 5, block: "d", electronConfiguration: "[Kr] 4d5 5s1", electrons: 42, neutrons: 54, protons: 42, color: categoryColors["transition metal"] },
  { atomicNumber: 43, symbol: "Tc", name: "Technetium", atomicMass: 98, category: "transition metal", group: 7, period: 5, block: "d", electronConfiguration: "[Kr] 4d5 5s2", electrons: 43, neutrons: 55, protons: 43, color: categoryColors["transition metal"] },
  { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", atomicMass: 101.07, category: "transition metal", group: 8, period: 5, block: "d", electronConfiguration: "[Kr] 4d7 5s1", electrons: 44, neutrons: 57, protons: 44, color: categoryColors["transition metal"] },
  { atomicNumber: 45, symbol: "Rh", name: "Rhodium", atomicMass: 102.91, category: "transition metal", group: 9, period: 5, block: "d", electronConfiguration: "[Kr] 4d8 5s1", electrons: 45, neutrons: 58, protons: 45, color: categoryColors["transition metal"] },
  { atomicNumber: 46, symbol: "Pd", name: "Palladium", atomicMass: 106.42, category: "transition metal", group: 10, period: 5, block: "d", electronConfiguration: "[Kr] 4d10", electrons: 46, neutrons: 60, protons: 46, color: categoryColors["transition metal"] },
  { atomicNumber: 47, symbol: "Ag", name: "Silver", atomicMass: 107.87, category: "transition metal", group: 11, period: 5, block: "d", electronConfiguration: "[Kr] 4d10 5s1", electrons: 47, neutrons: 61, protons: 47, color: categoryColors["transition metal"] },
  { atomicNumber: 48, symbol: "Cd", name: "Cadmium", atomicMass: 112.41, category: "transition metal", group: 12, period: 5, block: "d", electronConfiguration: "[Kr] 4d10 5s2", electrons: 48, neutrons: 64, protons: 48, color: categoryColors["transition metal"] },
  { atomicNumber: 49, symbol: "In", name: "Indium", atomicMass: 114.82, category: "post-transition metal", group: 13, period: 5, block: "p", electronConfiguration: "[Kr] 4d10 5s2 5p1", electrons: 49, neutrons: 66, protons: 49, color: categoryColors["post-transition metal"] },
  { atomicNumber: 50, symbol: "Sn", name: "Tin", atomicMass: 118.71, category: "post-transition metal", group: 14, period: 5, block: "p", electronConfiguration: "[Kr] 4d10 5s2 5p2", electrons: 50, neutrons: 69, protons: 50, color: categoryColors["post-transition metal"] },
  { atomicNumber: 51, symbol: "Sb", name: "Antimony", atomicMass: 121.76, category: "metalloid", group: 15, period: 5, block: "p", electronConfiguration: "[Kr] 4d10 5s2 5p3", electrons: 51, neutrons: 71, protons: 51, color: categoryColors["metalloid"] },
  { atomicNumber: 52, symbol: "Te", name: "Tellurium", atomicMass: 127.60, category: "metalloid", group: 16, period: 5, block: "p", electronConfiguration: "[Kr] 4d10 5s2 5p4", electrons: 52, neutrons: 76, protons: 52, color: categoryColors["metalloid"] },
  { atomicNumber: 53, symbol: "I", name: "Iodine", atomicMass: 126.90, category: "halogen", group: 17, period: 5, block: "p", electronConfiguration: "[Kr] 4d10 5s2 5p5", electrons: 53, neutrons: 74, protons: 53, color: categoryColors["halogen"] },
  { atomicNumber: 54, symbol: "Xe", name: "Xenon", atomicMass: 131.29, category: "noble gas", group: 18, period: 5, block: "p", electronConfiguration: "[Kr] 4d10 5s2 5p6", electrons: 54, neutrons: 77, protons: 54, color: categoryColors["noble gas"] },
  { atomicNumber: 55, symbol: "Cs", name: "Cesium", atomicMass: 132.91, category: "alkali metal", group: 1, period: 6, block: "s", electronConfiguration: "[Xe] 6s1", electrons: 55, neutrons: 78, protons: 55, color: categoryColors["alkali metal"] },
  { atomicNumber: 56, symbol: "Ba", name: "Barium", atomicMass: 137.33, category: "alkaline earth metal", group: 2, period: 6, block: "s", electronConfiguration: "[Xe] 6s2", electrons: 56, neutrons: 81, protons: 56, color: categoryColors["alkaline earth metal"] },
  { atomicNumber: 57, symbol: "La", name: "Lanthanum", atomicMass: 138.91, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 5d1 6s2", electrons: 57, neutrons: 82, protons: 57, color: categoryColors["lanthanide"] },
  { atomicNumber: 58, symbol: "Ce", name: "Cerium", atomicMass: 140.12, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f1 5d1 6s2", electrons: 58, neutrons: 82, protons: 58, color: categoryColors["lanthanide"] },
  { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", atomicMass: 140.91, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f3 6s2", electrons: 59, neutrons: 82, protons: 59, color: categoryColors["lanthanide"] },
  { atomicNumber: 60, symbol: "Nd", name: "Neodymium", atomicMass: 144.24, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f4 6s2", electrons: 60, neutrons: 84, protons: 60, color: categoryColors["lanthanide"] },
  { atomicNumber: 61, symbol: "Pm", name: "Promethium", atomicMass: 145, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f5 6s2", electrons: 61, neutrons: 84, protons: 61, color: categoryColors["lanthanide"] },
  { atomicNumber: 62, symbol: "Sm", name: "Samarium", atomicMass: 150.36, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f6 6s2", electrons: 62, neutrons: 88, protons: 62, color: categoryColors["lanthanide"] },
  { atomicNumber: 63, symbol: "Eu", name: "Europium", atomicMass: 151.96, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f7 6s2", electrons: 63, neutrons: 89, protons: 63, color: categoryColors["lanthanide"] },
  { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", atomicMass: 157.25, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f7 5d1 6s2", electrons: 64, neutrons: 93, protons: 64, color: categoryColors["lanthanide"] },
  { atomicNumber: 65, symbol: "Tb", name: "Terbium", atomicMass: 158.93, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f9 6s2", electrons: 65, neutrons: 94, protons: 65, color: categoryColors["lanthanide"] },
  { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", atomicMass: 162.50, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f10 6s2", electrons: 66, neutrons: 97, protons: 66, color: categoryColors["lanthanide"] },
  { atomicNumber: 67, symbol: "Ho", name: "Holmium", atomicMass: 164.93, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f11 6s2", electrons: 67, neutrons: 98, protons: 67, color: categoryColors["lanthanide"] },
  { atomicNumber: 68, symbol: "Er", name: "Erbium", atomicMass: 167.26, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f12 6s2", electrons: 68, neutrons: 99, protons: 68, color: categoryColors["lanthanide"] },
  { atomicNumber: 69, symbol: "Tm", name: "Thulium", atomicMass: 168.93, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f13 6s2", electrons: 69, neutrons: 100, protons: 69, color: categoryColors["lanthanide"] },
  { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", atomicMass: 173.05, category: "lanthanide", group: 3, period: 6, block: "f", electronConfiguration: "[Xe] 4f14 6s2", electrons: 70, neutrons: 103, protons: 70, color: categoryColors["lanthanide"] },
  { atomicNumber: 71, symbol: "Lu", name: "Lutetium", atomicMass: 174.97, category: "lanthanide", group: 3, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d1 6s2", electrons: 71, neutrons: 104, protons: 71, color: categoryColors["lanthanide"] },
  { atomicNumber: 72, symbol: "Hf", name: "Hafnium", atomicMass: 178.49, category: "transition metal", group: 4, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d2 6s2", electrons: 72, neutrons: 106, protons: 72, color: categoryColors["transition metal"] },
  { atomicNumber: 73, symbol: "Ta", name: "Tantalum", atomicMass: 180.95, category: "transition metal", group: 5, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d3 6s2", electrons: 73, neutrons: 108, protons: 73, color: categoryColors["transition metal"] },
  { atomicNumber: 74, symbol: "W", name: "Tungsten", atomicMass: 183.84, category: "transition metal", group: 6, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d4 6s2", electrons: 74, neutrons: 110, protons: 74, color: categoryColors["transition metal"] },
  { atomicNumber: 75, symbol: "Re", name: "Rhenium", atomicMass: 186.21, category: "transition metal", group: 7, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d5 6s2", electrons: 75, neutrons: 111, protons: 75, color: categoryColors["transition metal"] },
  { atomicNumber: 76, symbol: "Os", name: "Osmium", atomicMass: 190.23, category: "transition metal", group: 8, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d6 6s2", electrons: 76, neutrons: 114, protons: 76, color: categoryColors["transition metal"] },
  { atomicNumber: 77, symbol: "Ir", name: "Iridium", atomicMass: 192.22, category: "transition metal", group: 9, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d7 6s2", electrons: 77, neutrons: 115, protons: 77, color: categoryColors["transition metal"] },
  { atomicNumber: 78, symbol: "Pt", name: "Platinum", atomicMass: 195.08, category: "transition metal", group: 10, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d9 6s1", electrons: 78, neutrons: 117, protons: 78, color: categoryColors["transition metal"] },
  { atomicNumber: 79, symbol: "Au", name: "Gold", atomicMass: 196.97, category: "transition metal", group: 11, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d10 6s1", electrons: 79, neutrons: 118, protons: 79, color: categoryColors["transition metal"] },
  { atomicNumber: 80, symbol: "Hg", name: "Mercury", atomicMass: 200.59, category: "transition metal", group: 12, period: 6, block: "d", electronConfiguration: "[Xe] 4f14 5d10 6s2", electrons: 80, neutrons: 121, protons: 80, color: categoryColors["transition metal"] },
  { atomicNumber: 81, symbol: "Tl", name: "Thallium", atomicMass: 204.38, category: "post-transition metal", group: 13, period: 6, block: "p", electronConfiguration: "[Xe] 4f14 5d10 6s2 6p1", electrons: 81, neutrons: 123, protons: 81, color: categoryColors["post-transition metal"] },
  { atomicNumber: 82, symbol: "Pb", name: "Lead", atomicMass: 207.2, category: "post-transition metal", group: 14, period: 6, block: "p", electronConfiguration: "[Xe] 4f14 5d10 6s2 6p2", electrons: 82, neutrons: 125, protons: 82, color: categoryColors["post-transition metal"] },
  { atomicNumber: 83, symbol: "Bi", name: "Bismuth", atomicMass: 208.98, category: "post-transition metal", group: 15, period: 6, block: "p", electronConfiguration: "[Xe] 4f14 5d10 6s2 6p3", electrons: 83, neutrons: 126, protons: 83, color: categoryColors["post-transition metal"] },
  { atomicNumber: 84, symbol: "Po", name: "Polonium", atomicMass: 209, category: "post-transition metal", group: 16, period: 6, block: "p", electronConfiguration: "[Xe] 4f14 5d10 6s2 6p4", electrons: 84, neutrons: 125, protons: 84, color: categoryColors["post-transition metal"] },
  { atomicNumber: 85, symbol: "At", name: "Astatine", atomicMass: 210, category: "metalloid", group: 17, period: 6, block: "p", electronConfiguration: "[Xe] 4f14 5d10 6s2 6p5", electrons: 85, neutrons: 125, protons: 85, color: categoryColors["metalloid"] },
  { atomicNumber: 86, symbol: "Rn", name: "Radon", atomicMass: 222, category: "noble gas", group: 18, period: 6, block: "p", electronConfiguration: "[Xe] 4f14 5d10 6s2 6p6", electrons: 86, neutrons: 136, protons: 86, color: categoryColors["noble gas"] },
  { atomicNumber: 87, symbol: "Fr", name: "Francium", atomicMass: 223, category: "alkali metal", group: 1, period: 7, block: "s", electronConfiguration: "[Rn] 7s1", electrons: 87, neutrons: 136, protons: 87, color: categoryColors["alkali metal"] },
  { atomicNumber: 88, symbol: "Ra", name: "Radium", atomicMass: 226, category: "alkaline earth metal", group: 2, period: 7, block: "s", electronConfiguration: "[Rn] 7s2", electrons: 88, neutrons: 138, protons: 88, color: categoryColors["alkaline earth metal"] },
  { atomicNumber: 89, symbol: "Ac", name: "Actinium", atomicMass: 227, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 6d1 7s2", electrons: 89, neutrons: 138, protons: 89, color: categoryColors["actinide"] },
  { atomicNumber: 90, symbol: "Th", name: "Thorium", atomicMass: 232.04, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 6d2 7s2", electrons: 90, neutrons: 142, protons: 90, color: categoryColors["actinide"] },
  { atomicNumber: 91, symbol: "Pa", name: "Protactinium", atomicMass: 231.04, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f2 6d1 7s2", electrons: 91, neutrons: 140, protons: 91, color: categoryColors["actinide"] },
  { atomicNumber: 92, symbol: "U", name: "Uranium", atomicMass: 238.03, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f3 6d1 7s2", electrons: 92, neutrons: 146, protons: 92, color: categoryColors["actinide"] },
  { atomicNumber: 93, symbol: "Np", name: "Neptunium", atomicMass: 237, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f4 6d1 7s2", electrons: 93, neutrons: 144, protons: 93, color: categoryColors["actinide"] },
  { atomicNumber: 94, symbol: "Pu", name: "Plutonium", atomicMass: 244, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f6 7s2", electrons: 94, neutrons: 150, protons: 94, color: categoryColors["actinide"] },
  { atomicNumber: 95, symbol: "Am", name: "Americium", atomicMass: 243, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f7 7s2", electrons: 95, neutrons: 148, protons: 95, color: categoryColors["actinide"] },
  { atomicNumber: 96, symbol: "Cm", name: "Curium", atomicMass: 247, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f7 6d1 7s2", electrons: 96, neutrons: 151, protons: 96, color: categoryColors["actinide"] },
  { atomicNumber: 97, symbol: "Bk", name: "Berkelium", atomicMass: 247, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f9 7s2", electrons: 97, neutrons: 150, protons: 97, color: categoryColors["actinide"] },
  { atomicNumber: 98, symbol: "Cf", name: "Californium", atomicMass: 251, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f10 7s2", electrons: 98, neutrons: 153, protons: 98, color: categoryColors["actinide"] },
  { atomicNumber: 99, symbol: "Es", name: "Einsteinium", atomicMass: 252, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f11 7s2", electrons: 99, neutrons: 153, protons: 99, color: categoryColors["actinide"] },
  { atomicNumber: 100, symbol: "Fm", name: "Fermium", atomicMass: 257, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f12 7s2", electrons: 100, neutrons: 157, protons: 100, color: categoryColors["actinide"] },
  { atomicNumber: 101, symbol: "Md", name: "Mendelevium", atomicMass: 258, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f13 7s2", electrons: 101, neutrons: 157, protons: 101, color: categoryColors["actinide"] },
  { atomicNumber: 102, symbol: "No", name: "Nobelium", atomicMass: 259, category: "actinide", group: 3, period: 7, block: "f", electronConfiguration: "[Rn] 5f14 7s2", electrons: 102, neutrons: 157, protons: 102, color: categoryColors["actinide"] },
  { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", atomicMass: 262, category: "actinide", group: 3, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 7s2 7p1", electrons: 103, neutrons: 159, protons: 103, color: categoryColors["actinide"] },
  { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", atomicMass: 267, category: "transition metal", group: 4, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 6d2 7s2", electrons: 104, neutrons: 163, protons: 104, color: categoryColors["transition metal"] },
  { atomicNumber: 105, symbol: "Db", name: "Dubnium", atomicMass: 268, category: "transition metal", group: 5, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 6d3 7s2", electrons: 105, neutrons: 163, protons: 105, color: categoryColors["transition metal"] },
  { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", atomicMass: 271, category: "transition metal", group: 6, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 6d4 7s2", electrons: 106, neutrons: 165, protons: 106, color: categoryColors["transition metal"] },
  { atomicNumber: 107, symbol: "Bh", name: "Bohrium", atomicMass: 272, category: "transition metal", group: 7, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 6d5 7s2", electrons: 107, neutrons: 165, protons: 107, color: categoryColors["transition metal"] },
  { atomicNumber: 108, symbol: "Hs", name: "Hassium", atomicMass: 270, category: "transition metal", group: 8, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 6d6 7s2", electrons: 108, neutrons: 162, protons: 108, color: categoryColors["transition metal"] },
  { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", atomicMass: 276, category: "transition metal", group: 9, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 6d7 7s2", electrons: 109, neutrons: 167, protons: 109, color: categoryColors["transition metal"] },
  { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", atomicMass: 281, category: "transition metal", group: 10, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 6d9 7s1", electrons: 110, neutrons: 171, protons: 110, color: categoryColors["transition metal"] }, // Category often listed as 'unknown' but placed with transition metals
  { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", atomicMass: 280, category: "transition metal", group: 11, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 6d10 7s1", electrons: 111, neutrons: 169, protons: 111, color: categoryColors["transition metal"] }, // Category often listed as 'unknown' but placed with transition metals
  { atomicNumber: 112, symbol: "Cn", name: "Copernicium", atomicMass: 285, category: "transition metal", group: 12, period: 7, block: "d", electronConfiguration: "[Rn] 5f14 6d10 7s2", electrons: 112, neutrons: 173, protons: 112, color: categoryColors["transition metal"] }, // Category often listed as 'unknown' but placed with transition metals
  { atomicNumber: 113, symbol: "Nh", name: "Nihonium", atomicMass: 286, category: "post-transition metal", group: 13, period: 7, block: "p", electronConfiguration: "[Rn] 5f14 6d10 7s2 7p1", electrons: 113, neutrons: 173, protons: 113, color: categoryColors["post-transition metal"] }, // Category often listed as 'unknown' but placed with post-transition metals
  { atomicNumber: 114, symbol: "Fl", name: "Flerovium", atomicMass: 289, category: "post-transition metal", group: 14, period: 7, block: "p", electronConfiguration: "[Rn] 5f14 6d10 7s2 7p2", electrons: 114, neutrons: 175, protons: 114, color: categoryColors["post-transition metal"] }, // Category often listed as 'unknown' but placed with post-transition metals
  { atomicNumber: 115, symbol: "Mc", name: "Moscovium", atomicMass: 290, category: "post-transition metal", group: 15, period: 7, block: "p", electronConfiguration: "[Rn] 5f14 6d10 7s2 7p3", electrons: 115, neutrons: 175, protons: 115, color: categoryColors["post-transition metal"] }, // Category often listed as 'unknown' but placed with post-transition metals
  { atomicNumber: 116, symbol: "Lv", name: "Livermorium", atomicMass: 293, category: "post-transition metal", group: 16, period: 7, block: "p", electronConfiguration: "[Rn] 5f14 6d10 7s2 7p4", electrons: 116, neutrons: 177, protons: 116, color: categoryColors["post-transition metal"] }, // Category often listed as 'unknown' but placed with post-transition metals
  { atomicNumber: 117, symbol: "Ts", name: "Tennessine", atomicMass: 294, category: "halogen", group: 17, period: 7, block: "p", electronConfiguration: "[Rn] 5f14 6d10 7s2 7p5", electrons: 117, neutrons: 177, protons: 117, color: categoryColors["halogen"] }, // Category often listed as 'unknown' but placed with halogens
  { atomicNumber: 118, symbol: "Og", name: "Oganesson", atomicMass: 294, category: "noble gas", group: 18, period: 7, block: "p", electronConfiguration: "[Rn] 5f14 6d10 7s2 7p6", electrons: 118, neutrons: 176, protons: 118, color: categoryColors["noble gas"] }, // Category often listed as 'unknown' but placed with noble gases
];

export const getElementByAtomicNumber = (atomicNumber: number): Element | undefined => {
  return elements.find(element => element.atomicNumber === atomicNumber);
};

export const getElementBySymbol = (symbol: string): Element | undefined => {
  return elements.find(element => element.symbol === symbol);
};