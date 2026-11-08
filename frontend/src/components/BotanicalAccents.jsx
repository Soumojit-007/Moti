import React from 'react';

// Delicate vintage floral corner flourish
export const CornerFlourish = ({ className = "w-16 h-16 text-[#C58D91]/40" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 90C10 50 35 25 75 25M90 10C50 10 25 35 25 75"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M25 75C30 65 42 60 48 65C54 70 50 82 40 82C30 82 25 75 25 75Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <path
      d="M75 25C65 30 60 42 65 48C70 54 82 50 82 40C82 30 75 25 75 25Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <circle cx="20" cy="80" r="2.5" fill="currentColor" fillOpacity="0.4" />
    <circle cx="80" cy="20" r="2.5" fill="currentColor" fillOpacity="0.4" />
    <circle cx="48" cy="48" r="1.5" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

// Hand-drawn botanical blossom illustration
export const BotanicalFlower = ({ className = "w-12 h-12 text-[#C58D91]" }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stem & Leaves */}
    <path
      d="M30 55C30 42 31 32 30 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M30 42C35 40 42 42 44 46C40 48 34 46 30 42Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M30 35C24 33 18 35 16 39C20 41 26 39 30 35Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      fillOpacity="0.2"
    />
    {/* Delicate petals */}
    <path
      d="M30 24C24 20 20 12 26 8C31 4 33 14 30 24Z"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="currentColor"
      fillOpacity="0.25"
    />
    <path
      d="M30 24C36 20 40 12 34 8C29 4 27 14 30 24Z"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="currentColor"
      fillOpacity="0.25"
    />
    <path
      d="M30 24C22 24 16 18 20 12C24 7 28 16 30 24Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M30 24C38 24 44 18 40 12C36 7 32 16 30 24Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <circle cx="30" cy="18" r="2.5" fill="#794A50" fillOpacity="0.7" />
  </svg>
);

// Decorative hand-drawn heart
export const DecorativeHeart = ({ className = "w-12 h-12 text-[#C58D91]" }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M30 48C30 48 12 36 12 22C12 14.5 17.5 10 24 10C28 10 30 13 30 13C30 13 32 10 36 10C42.5 10 48 14.5 48 22C48 36 30 48 30 48Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M20 18C17 21 16 25 17 28"
      stroke="#FFFCF8"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="36" cy="22" r="1.5" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

// Decorative hand-drawn star
export const HandDrawnStar = ({ className = "w-12 h-12 text-[#C58D91]" }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M30 8L35 22L49 24L38 33L42 47L30 39L18 47L22 33L11 24L25 22L30 8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <circle cx="30" cy="28" r="2" fill="#794A50" fillOpacity="0.6" />
    <path d="M12 14L14 16M48 14L46 16M48 44L46 42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Vintage divider with subtle heart center
export const VintageDivider = ({ className = "my-6 text-[#C58D91]/60" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C58D91]/50" />
    <div className="text-xs text-[#794A50]/70 font-serif italic">❦</div>
    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C58D91]/50" />
  </div>
);

// Vintage postmark stamp graphic
export const VintageStamp = ({ className = "w-24 h-24 text-[#C58D91]/40" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1" />
    <text x="50" y="38" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="Playfair Display, serif" letterSpacing="2">WITH CARE</text>
    <path d="M30 50H70" stroke="currentColor" strokeWidth="0.8" />
    <path d="M25 55H75" stroke="currentColor" strokeWidth="0.8" />
    <text x="50" y="68" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="Dancing Script, cursive">From the heart</text>
  </svg>
);
